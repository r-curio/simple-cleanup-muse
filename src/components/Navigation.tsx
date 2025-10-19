import { useLanguage } from '@/contexts/LanguageContext';
import { LanguageToggle } from './LanguageToggle';
import { Star } from 'lucide-react';

export const Navigation = () => {
  const { t } = useLanguage();

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container-custom">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-2xl font-light tracking-tight hover:text-silver transition-colors flex items-center gap-2"
          >
            <Star className="w-5 h-5 text-foreground" strokeLinejoin="round" strokeLinecap="round" />
            Simple.
          </button>
          
          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection('services')}
              className="text-silver-muted hover:text-foreground transition-colors"
            >
              {t('nav.services')}
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-silver-muted hover:text-foreground transition-colors"
            >
              {t('nav.about')}
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-silver-muted hover:text-foreground transition-colors"
            >
              {t('nav.contact')}
            </button>
          </div>
          
          {/* Language Toggle */}
          <LanguageToggle />
        </div>
      </div>
    </nav>
  );
};
