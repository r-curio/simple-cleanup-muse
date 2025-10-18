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
        
        {/* Placeholder for client logos */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto opacity-40">
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="aspect-video bg-muted rounded-lg flex items-center justify-center border border-border"
            >
              <span className="text-xs text-silver-muted">Client Logo</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
