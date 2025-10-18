import { useLanguage } from '@/contexts/LanguageContext';
import { Building2, ShoppingBag, Calendar, Sparkles } from 'lucide-react';

const services = [
  {
    icon: Building2,
    titleKey: 'services.offices',
    descKey: 'services.offices.desc',
  },
  {
    icon: ShoppingBag,
    titleKey: 'services.commercial',
    descKey: 'services.commercial.desc',
  },
  {
    icon: Calendar,
    titleKey: 'services.events',
    descKey: 'services.events.desc',
  },
  {
    icon: Sparkles,
    titleKey: 'services.specialized',
    descKey: 'services.specialized.desc',
  },
];

export const ServicesSection = () => {
  const { t } = useLanguage();

  return (
    <section className="section-padding" id="services">
      <div className="container-custom">
        <h2 className="text-4xl md:text-5xl font-light text-center mb-20">
          {t('services.title')}
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group p-8 border border-border rounded-2xl hover:border-silver-muted transition-all duration-300 hover:bg-card"
              >
                <Icon className="h-10 w-10 mb-6 text-silver group-hover:text-foreground transition-colors" />
                <h3 className="text-xl font-medium mb-3">
                  {t(service.titleKey)}
                </h3>
                <p className="text-silver-muted leading-relaxed">
                  {t(service.descKey)}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
