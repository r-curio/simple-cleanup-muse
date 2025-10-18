import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Send } from 'lucide-react';

export const ContactSection = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      return;
    }

    toast({
      title: t('contact.success'),
      duration: 5000,
    });

    setFormData({
      name: '',
      company: '',
      phone: '',
      email: '',
      message: '',
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section className="section-padding" id="contact">
      <div className="container-custom max-w-2xl">
        <h2 className="text-4xl md:text-5xl font-light text-center mb-16">
          {t('contact.title')}
        </h2>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <Input
              name="name"
              placeholder={t('contact.name')}
              value={formData.name}
              onChange={handleChange}
              required
              className="bg-card border-border focus:border-silver transition-colors"
            />
            <Input
              name="company"
              placeholder={t('contact.company')}
              value={formData.company}
              onChange={handleChange}
              className="bg-card border-border focus:border-silver transition-colors"
            />
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <Input
              name="phone"
              type="tel"
              placeholder={t('contact.phone')}
              value={formData.phone}
              onChange={handleChange}
              className="bg-card border-border focus:border-silver transition-colors"
            />
            <Input
              name="email"
              type="email"
              placeholder={t('contact.email')}
              value={formData.email}
              onChange={handleChange}
              required
              className="bg-card border-border focus:border-silver transition-colors"
            />
          </div>
          
          <Textarea
            name="message"
            placeholder={t('contact.message')}
            value={formData.message}
            onChange={handleChange}
            required
            rows={6}
            className="bg-card border-border focus:border-silver transition-colors resize-none"
          />
          
          <Button
            type="submit"
            size="lg"
            className="w-full bg-foreground text-background hover:bg-foreground/90 transition-all duration-300 group"
          >
            {t('contact.submit')}
            <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </form>
      </div>
    </section>
  );
};
