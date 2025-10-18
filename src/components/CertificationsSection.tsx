import { useLanguage } from '@/contexts/LanguageContext';
import { Shield, Award, CheckCircle2 } from 'lucide-react';

export const CertificationsSection = () => {
  const { t } = useLanguage();

  const certifications = [
    {
      name: 'ISSA',
      description: t('certifications.issa'),
      icon: Award,
    },
    {
      name: 'BSCAI',
      description: t('certifications.bscai'),
      icon: Shield,
    },
    {
      name: 'CNESST',
      description: t('certifications.cnesst'),
      icon: CheckCircle2,
    },
    {
      name: 'CPEEP',
      description: t('certifications.cpeep'),
      icon: CheckCircle2,
    },
  ];

  return (
    <section className="section-padding bg-muted/20">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-light mb-4">
            {t('certifications.title')}
          </h2>
          <p className="text-silver-muted max-w-2xl mx-auto">
            {t('certifications.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {certifications.map((cert) => (
            <div
              key={cert.name}
              className="flex flex-col items-center p-6 rounded-lg bg-card border border-border hover:border-accent-blue/50 transition-all group"
            >
              <cert.icon className="h-12 w-12 text-accent-blue mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-semibold mb-2">{cert.name}</h3>
              <p className="text-silver-muted text-sm text-center">
                {cert.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
