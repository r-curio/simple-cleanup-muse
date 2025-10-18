import { useLanguage } from '@/contexts/LanguageContext';
import { Building2, TrendingUp, Clock } from 'lucide-react';
import { Card } from '@/components/ui/card';

export const CaseStudiesSection = () => {
  const { t } = useLanguage();

  const caseStudies = [
    {
      icon: Building2,
      title: t('caseStudies.case1.title'),
      challenge: t('caseStudies.case1.challenge'),
      result: t('caseStudies.case1.result'),
      improvement: '95%',
    },
    {
      icon: TrendingUp,
      title: t('caseStudies.case2.title'),
      challenge: t('caseStudies.case2.challenge'),
      result: t('caseStudies.case2.result'),
      improvement: '3x',
    },
    {
      icon: Clock,
      title: t('caseStudies.case3.title'),
      challenge: t('caseStudies.case3.challenge'),
      result: t('caseStudies.case3.result'),
      improvement: '40%',
    },
  ];

  return (
    <section className="section-padding bg-muted/30">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-light mb-4">
            {t('caseStudies.title')}
          </h2>
          <p className="text-silver-muted max-w-2xl mx-auto">
            {t('caseStudies.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {caseStudies.map((study, index) => (
            <Card
              key={index}
              className="p-8 bg-card border-border hover:border-accent-blue/50 transition-all group"
            >
              <study.icon className="h-12 w-12 text-accent-blue mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-semibold mb-4">{study.title}</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-silver-muted mb-2">{t('caseStudies.challengeLabel')}</p>
                  <p className="text-silver">{study.challenge}</p>
                </div>
                <div>
                  <p className="text-sm text-silver-muted mb-2">{t('caseStudies.resultLabel')}</p>
                  <p className="text-silver">{study.result}</p>
                </div>
                <div className="pt-4 border-t border-border">
                  <span className="text-3xl font-light text-accent-blue">{study.improvement}</span>
                  <p className="text-sm text-silver-muted">{t('caseStudies.improvement')}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
