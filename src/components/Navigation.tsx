import { useLanguage } from '@/contexts/LanguageContext';
import { LanguageToggle } from './LanguageToggle';
import { Sparkle, Menu } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';

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
            <Sparkle className="w-5 h-5 fill-foreground text-foreground" />
            Simple.
          </button>
          
          {/* Desktop Navigation Links */}
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
          
          {/* Mobile & Desktop Right Side */}
          <div className="flex items-center gap-4">
            <LanguageToggle />
            
            {/* Mobile Menu */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <nav className="flex flex-col gap-6 mt-8">
                  <button
                    onClick={() => {
                      scrollToSection('services');
                      document.querySelector('[data-state="open"]')?.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape' }));
                    }}
                    className="text-lg text-silver-muted hover:text-foreground transition-colors text-left"
                  >
                    {t('nav.services')}
                  </button>
                  <button
                    onClick={() => {
                      scrollToSection('about');
                      document.querySelector('[data-state="open"]')?.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape' }));
                    }}
                    className="text-lg text-silver-muted hover:text-foreground transition-colors text-left"
                  >
                    {t('nav.about')}
                  </button>
                  <button
                    onClick={() => {
                      scrollToSection('contact');
                      document.querySelector('[data-state="open"]')?.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape' }));
                    }}
                    className="text-lg text-silver-muted hover:text-foreground transition-colors text-left"
                  >
                    {t('nav.contact')}
                  </button>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};
