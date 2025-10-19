import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Send } from 'lucide-react';
import { z } from 'zod';

// Update this with your WhatsApp number (format: country code + number, no spaces or special characters)
// Example: "12345678901" for +1 (234) 567-8901
const WHATSAPP_NUMBER = "15145724535";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100, "Name must be less than 100 characters"),
  company: z.string().trim().max(100, "Company must be less than 100 characters").optional(),
  phone: z.string().trim().max(20, "Phone must be less than 20 characters").optional(),
  email: z.string().trim().email("Invalid email address").max(255, "Email must be less than 255 characters"),
  message: z.string().trim().min(1, "Message is required").max(1000, "Message must be less than 1000 characters"),
});

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
    
    // Validate form data
    try {
      contactSchema.parse(formData);
    } catch (error) {
      if (error instanceof z.ZodError) {
        toast({
          title: "Validation Error",
          description: error.errors[0].message,
          variant: "destructive",
        });
      }
      return;
    }

    // Format message for WhatsApp
    const message = `*New Contact Form Submission*\n\n` +
      `*Name:* ${formData.name}\n` +
      (formData.company ? `*Company:* ${formData.company}\n` : '') +
      (formData.phone ? `*Phone:* ${formData.phone}\n` : '') +
      `*Email:* ${formData.email}\n\n` +
      `*Message:*\n${formData.message}`;

    // Open WhatsApp with pre-filled message
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');

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
