# GembaGrowth - Personal Blog

This project is a high-performance, AI-powered personal blog built with Next.js, Genkit, and Firebase.

## Getting Started Locally

To run this project on your own machine, follow these steps:

1. **Download/Clone the Source Code**: Export your project from the Studio environment.
2. **Install Dependencies**:
   ```bash
   npm install
   ```
3. **Set Up Environment Variables**:
   Create a `.env` file in the root directory and add your API keys:
   ```env
   GEMINI_API_KEY=your_google_ai_studio_api_key
   NEXT_PUBLIC_SITE_URL=http://localhost:9002
   ```
4. **Run the Development Server**:
   ```bash
   npm run dev
   ```

## Integration with Google AI Studio

This application uses **Genkit** with the `@genkit-ai/google-genai` plugin. To continue using the AI features (like blog image generation):

1. Go to [Google AI Studio](https://aistudio.google.com/).
2. Generate a new **API Key**.
3. Replace the `GEMINI_API_KEY` in your `.env` file with this new key.

## Deploying to Firebase App Hosting

When you are ready to take your project live outside of the Studio environment:

1. **Push your code to GitHub**: Create a repository for your project.
2. **Connect to Firebase**: In the [Firebase Console](https://console.firebase.google.com/), go to **App Hosting**.
3. **Set Up Deployment**: Connect your GitHub repository. Firebase will automatically detect the Next.js setup and handle builds and deployments for you.

## Project Structure

- `_posts/`: Contains your blog articles in Markdown format.
- `src/ai/`: Genkit flows and configuration for AI features.
- `src/app/`: Next.js App Router pages and layouts.
- `src/components/`: Reusable React components, including ShadCN UI elements.


## Login 
# Login on cluster (staging)
gcloud auth login
gcloud config set project studio-597319708-5ec9f
kubectl get pods