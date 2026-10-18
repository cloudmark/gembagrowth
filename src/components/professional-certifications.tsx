const certifications = [
  {
    title: 'European Engineer (Eur. Ing.)',
    issuer: 'FEANI, No. 31568',
    year: '2011',
  },
  {
    title: 'Warranted Engineer',
    issuer: 'Government of Malta, No. 997',
    year: '2010',
  },
];

export default function ProfessionalCertifications() {
  return (
    <section className="biography-certifications" aria-labelledby="certifications-heading">
      <h2 id="certifications-heading">Professional Certifications</h2>
      <div className="biography-certifications-list">
        {certifications.map(cert => (
          <div key={cert.title} className="biography-certification">
            <div>
              <h3>{cert.title}</h3>
              <p>{cert.issuer}</p>
            </div>
            <p className="certification-year">Awarded {cert.year}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
