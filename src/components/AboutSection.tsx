import { useLanguage } from '@/contexts/LanguageContext';

export const AboutSection = () => {
  const { t } = useLanguage();

  return (
    <section className="section-padding bg-muted/30" id="about">
      <div className="container-custom max-w-4xl text-center">
        <h2 className="text-4xl md:text-5xl font-light mb-8">
          {t('about.title')}
        </h2>
        <p className="text-xl text-silver leading-relaxed">
          {t('about.text')}
        </p>
      </div>
    </section>
  );
};
