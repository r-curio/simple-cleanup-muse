import { useLanguage } from '@/contexts/LanguageContext';
import { Award } from 'lucide-react';

export const TrustSection = () => {
  const { t } = useLanguage();

  return (
    <section className="section-padding bg-muted/30">
      <div className="container-custom text-center">
        <div className="flex items-center justify-center gap-3 mb-6">
          <Award className="h-8 w-8 text-silver" />
          <h2 className="text-2xl md:text-3xl font-light">
            {t('trust.official')}
          </h2>
        </div>
        <p className="text-silver-muted max-w-2xl mx-auto text-lg">
          {t('trust.subtitle')}
        </p>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-12 max-w-3xl mx-auto">
          <div className="text-center">
            <div className="text-4xl font-light text-accent-blue mb-2">10+</div>
            <p className="text-silver-muted">{t('trust.years')}</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-light text-accent-blue mb-2">500+</div>
            <p className="text-silver-muted">{t('trust.clients')}</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-light text-accent-blue mb-2">100%</div>
            <p className="text-silver-muted">{t('trust.satisfaction')}</p>
          </div>
        </div>
      </div>
    </section>
  );
};
