
'use client';

import { Award } from 'lucide-react';
import { Card } from '@/components/ui/card';

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
    <div className="my-12">
      <h3 className="text-2xl font-headline font-bold text-primary mb-6 text-center">
        Professional Certifications
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {certifications.map((cert) => (
          <Card key={cert.title} className="group hover:bg-card/90 shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="flex items-center p-4 gap-4">
                <div className="flex-shrink-0">
                    <div className="p-2 bg-accent/10 rounded-full">
                        <Award className="h-6 w-6 text-accent" />
                    </div>
                </div>
                <div className="flex-grow">
                    <h4 className="font-headline text-lg text-primary font-semibold">
                        {cert.title}
                    </h4>
                    <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                    <p className="text-xs text-muted-foreground/80 mt-1">Awarded {cert.year}</p>
                </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
