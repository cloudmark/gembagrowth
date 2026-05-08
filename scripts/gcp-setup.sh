#!/usr/bin/env bash
# One-time setup: enables APIs, creates Artifact Registry repo, service account,
# Workload Identity Federation pool/provider, and grants IAM bindings so the
# GitHub Actions workflow can build & deploy to Cloud Run via OIDC (no JSON key).
#
# Run from a machine with `gcloud` authenticated as a project owner:
#   bash scripts/gcp-setup.sh
#
# Idempotent-ish: most commands tolerate re-running; "already exists" errors
# from create steps are safe to ignore.

set -euo pipefail

PROJECT_ID="studio-597319708-5ec9f"
REGION="europe-west1"
AR_REPO="gembagrowth"
SERVICE="gembagrowth"
GITHUB_REPO="cloudmark/gembagrowth"

SA_NAME="github-deployer"
SA_EMAIL="${SA_NAME}@${PROJECT_ID}.iam.gserviceaccount.com"
POOL_ID="github-pool"
PROVIDER_ID="github-provider"

echo "==> Using project: ${PROJECT_ID}"
gcloud config set project "${PROJECT_ID}"

PROJECT_NUMBER="$(gcloud projects describe "${PROJECT_ID}" --format='value(projectNumber)')"
echo "==> Project number: ${PROJECT_NUMBER}"

echo "==> Enabling required APIs"
gcloud services enable \
  run.googleapis.com \
  artifactregistry.googleapis.com \
  iamcredentials.googleapis.com \
  cloudbuild.googleapis.com \
  iam.googleapis.com

echo "==> Ensuring Artifact Registry repo '${AR_REPO}' exists in ${REGION}"
gcloud artifacts repositories describe "${AR_REPO}" --location="${REGION}" >/dev/null 2>&1 || \
  gcloud artifacts repositories create "${AR_REPO}" \
    --repository-format=docker \
    --location="${REGION}" \
    --description="Container images for ${SERVICE}"

echo "==> Ensuring service account '${SA_EMAIL}'"
gcloud iam service-accounts describe "${SA_EMAIL}" >/dev/null 2>&1 || \
  gcloud iam service-accounts create "${SA_NAME}" \
    --display-name="GitHub Actions deployer"

echo "==> Granting roles to ${SA_EMAIL}"
for role in \
  roles/run.admin \
  roles/artifactregistry.writer \
  roles/iam.serviceAccountUser \
  roles/storage.admin
do
  gcloud projects add-iam-policy-binding "${PROJECT_ID}" \
    --member="serviceAccount:${SA_EMAIL}" \
    --role="${role}" \
    --condition=None >/dev/null
done

echo "==> Ensuring Workload Identity Pool '${POOL_ID}'"
gcloud iam workload-identity-pools describe "${POOL_ID}" --location=global >/dev/null 2>&1 || \
  gcloud iam workload-identity-pools create "${POOL_ID}" \
    --location=global \
    --display-name="GitHub Actions Pool"

echo "==> Ensuring OIDC provider '${PROVIDER_ID}'"
gcloud iam workload-identity-pools providers describe "${PROVIDER_ID}" \
    --workload-identity-pool="${POOL_ID}" --location=global >/dev/null 2>&1 || \
  gcloud iam workload-identity-pools providers create-oidc "${PROVIDER_ID}" \
    --workload-identity-pool="${POOL_ID}" \
    --location=global \
    --display-name="GitHub OIDC" \
    --issuer-uri="https://token.actions.githubusercontent.com" \
    --attribute-mapping="google.subject=assertion.sub,attribute.repository=assertion.repository,attribute.repository_owner=assertion.repository_owner,attribute.ref=assertion.ref" \
    --attribute-condition="assertion.repository == '${GITHUB_REPO}'"

echo "==> Binding GitHub repo '${GITHUB_REPO}' -> SA '${SA_EMAIL}'"
gcloud iam service-accounts add-iam-policy-binding "${SA_EMAIL}" \
  --role=roles/iam.workloadIdentityUser \
  --member="principalSet://iam.googleapis.com/projects/${PROJECT_NUMBER}/locations/global/workloadIdentityPools/${POOL_ID}/attribute.repository/${GITHUB_REPO}" >/dev/null

echo "==> Allowing public (unauthenticated) invocation of Cloud Run service"
echo "    (skipped here; first deploy will create the service. Re-run after deploy if needed:"
echo "     gcloud run services add-iam-policy-binding ${SERVICE} --region=${REGION} \\"
echo "       --member=allUsers --role=roles/run.invoker)"

WIF_PROVIDER="projects/${PROJECT_NUMBER}/locations/global/workloadIdentityPools/${POOL_ID}/providers/${PROVIDER_ID}"

cat <<EOF

===========================================================================
Setup complete. Add these as GitHub Actions repository VARIABLES (not secrets)
under: https://github.com/${GITHUB_REPO}/settings/variables/actions

  GCP_PROJECT_ID       = ${PROJECT_ID}
  GCP_REGION           = ${REGION}
  GCP_AR_REPO          = ${AR_REPO}
  GCP_SERVICE          = ${SERVICE}
  GCP_WIF_PROVIDER     = ${WIF_PROVIDER}
  GCP_SA_EMAIL         = ${SA_EMAIL}
===========================================================================
EOF
