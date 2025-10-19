import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { ArrowRight, Star } from 'lucide-react';

export const Hero = () => {
  const { t, language } = useLanguage();

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center section-padding">
      <div className="container-custom text-center">
        <div className="inline-block mb-6 px-4 py-2 rounded-full bg-accent-blue/10 text-accent-blue text-sm font-medium animate-fade-in text-center">
          <div className="flex gap-1 justify-center mb-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-accent-blue" />
            ))}
          </div>
          {language === 'fr' ? (
            <>
              5 étoiles sur Google<br />
              Avis vérifiés
            </>
          ) : (
            <>
              5 Stars on Google<br />
              Verified Reviews
            </>
          )}
        </div>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-light tracking-tight mb-8 animate-fade-in">
          {language === 'fr' ? (
            <>Nettoyage commercial <span className="text-accent-blue">simplifié</span>.</>
          ) : (
            <>Commercial cleaning, <span className="text-accent-blue">simplified</span>.</>
          )}
        </h1>
        <p className="text-lg md:text-xl text-silver max-w-3xl mx-auto mb-12 animate-fade-in-delay leading-relaxed">
          {t('hero.subheadline')}
        </p>
        <Button
          onClick={scrollToContact}
          size="lg"
          className="bg-foreground text-background hover:bg-foreground/90 transition-all duration-300 text-base px-8 py-6 rounded-full group animate-slide-up"
        >
          {t('hero.cta')}
          <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
        </Button>
      </div>
    </section>
  );
};
