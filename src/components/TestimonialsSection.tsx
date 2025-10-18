import { useLanguage } from '@/contexts/LanguageContext';
import { Quote, Star } from 'lucide-react';
import { Card } from '@/components/ui/card';

export const TestimonialsSection = () => {
  const { t } = useLanguage();

  const testimonials = [
    {
      name: t('testimonials.client1.name'),
      company: t('testimonials.client1.company'),
      text: t('testimonials.client1.text'),
      rating: 5,
    },
    {
      name: t('testimonials.client2.name'),
      company: t('testimonials.client2.company'),
      text: t('testimonials.client2.text'),
      rating: 5,
    },
    {
      name: t('testimonials.client3.name'),
      company: t('testimonials.client3.company'),
      text: t('testimonials.client3.text'),
      rating: 5,
    },
  ];

  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-light mb-4">
            {t('testimonials.title')}
          </h2>
          <p className="text-silver-muted max-w-2xl mx-auto">
            {t('testimonials.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="p-8 bg-card border-border hover:border-accent-blue/50 transition-all"
            >
              <Quote className="h-8 w-8 text-accent-blue mb-4" />
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-accent-blue text-accent-blue" />
                ))}
              </div>
              <p className="text-silver mb-6 italic">"{testimonial.text}"</p>
              <div className="border-t border-border pt-4">
                <p className="font-semibold">{testimonial.name}</p>
                <p className="text-silver-muted text-sm">{testimonial.company}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
