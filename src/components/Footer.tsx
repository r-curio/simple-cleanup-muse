import { useLanguage } from '@/contexts/LanguageContext';
import { MapPin, Mail, Phone } from 'lucide-react';

export const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border section-padding bg-card">
      <div className="container-custom">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-light mb-4">Simple</h3>
            <p className="text-silver-muted italic">
              {t('footer.tagline')}
            </p>
          </div>
          
          {/* Location */}
          <div>
            <div className="flex items-start gap-3 mb-4">
              <MapPin className="h-5 w-5 text-silver mt-1" />
              <div>
                <p className="text-silver">{t('footer.location')}</p>
              </div>
            </div>
          </div>
          
          {/* Contact */}
          <div>
            <div className="flex items-center gap-3 mb-3">
              <Mail className="h-5 w-5 text-silver" />
              <a href="mailto:info@ssimple.ca" className="text-silver hover:text-foreground transition-colors">
                info@ssimple.ca
              </a>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="h-5 w-5 text-silver" />
              <a href="tel:+15142376303" className="text-silver hover:text-foreground transition-colors">
                (514) 237-6303
              </a>
            </div>
          </div>
        </div>
        
        {/* Bottom */}
        <div className="pt-8 border-t border-border text-center">
          <p className="text-silver-muted text-sm">
            © {currentYear} Simple Cleaning. {t('footer.rights')}
          </p>
        </div>
      </div>
    </footer>
  );
};
