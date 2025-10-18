import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';

export const LanguageToggle = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex gap-2 items-center">
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setLanguage('fr')}
        className={`text-sm transition-colors ${
          language === 'fr' ? 'text-foreground font-medium' : 'text-silver-muted hover:text-silver'
        }`}
      >
        FR
      </Button>
      <span className="text-silver-muted">|</span>
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setLanguage('en')}
        className={`text-sm transition-colors ${
          language === 'en' ? 'text-foreground font-medium' : 'text-silver-muted hover:text-silver'
        }`}
      >
        EN
      </Button>
    </div>
  );
};
