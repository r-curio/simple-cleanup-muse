import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'fr' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  fr: {
    // Navigation
    'nav.services': 'Services',
    'nav.about': 'À propos',
    'nav.contact': 'Contact',
    
    // Hero
    'hero.headline': 'Nettoyage commercial simplifié.',
    'hero.subheadline': 'Simple Service — Entreprise canadienne de nettoyage professionnel pour bureaux, commerces et événements.',
    'hero.cta': 'Demandez une soumission gratuite',
    
    // Trust
    'trust.official': 'Fournisseur officiel du Grand Prix de Montréal',
    'trust.subtitle': 'Des clients d\'envergure nous font confiance pour la qualité, la constance et la discrétion.',
    
    // Services
    'services.title': 'Nos Services',
    'services.offices': 'Bureaux',
    'services.offices.desc': 'Nettoyage professionnel quotidien, hebdomadaire ou mensuel pour espaces corporatifs.',
    'services.commercial': 'Commerces',
    'services.commercial.desc': 'Entretien régulier pour commerces de détail, restaurants et espaces publics.',
    'services.events': 'Événements',
    'services.events.desc': 'Préparation et nettoyage post-événement pour conférences, galas et salons.',
    'services.specialized': 'Entretien Spécialisé',
    'services.specialized.desc': 'Nettoyage en profondeur, désinfection et entretien de surfaces délicates.',
    
    // About
    'about.title': 'Notre promesse est simple.',
    'about.text': 'Nous offrons un service fiable, transparent et sans tracas — avec un système de gestion numérique qui assure constance et qualité à chaque visite.',
    
    // Contact
    'contact.title': 'Obtenez votre estimation gratuite',
    'contact.name': 'Nom',
    'contact.company': 'Entreprise',
    'contact.phone': 'Téléphone',
    'contact.email': 'Courriel',
    'contact.message': 'Message',
    'contact.submit': 'Envoyer',
    'contact.success': 'Message envoyé avec succès! Nous vous contacterons bientôt.',
    
    // Footer
    'footer.tagline': 'Simple. Propre. Professionnel.',
    'footer.location': 'Montréal, Québec',
    'footer.rights': 'Tous droits réservés.',
  },
  en: {
    // Navigation
    'nav.services': 'Services',
    'nav.about': 'About',
    'nav.contact': 'Contact',
    
    // Hero
    'hero.headline': 'Commercial cleaning, simplified.',
    'hero.subheadline': 'Simple Service — Canadian professional cleaning company for offices, businesses and events.',
    'hero.cta': 'Get a free quote',
    
    // Trust
    'trust.official': 'Official supplier of the Montreal Grand Prix',
    'trust.subtitle': 'Major clients trust us for quality, consistency and discretion.',
    
    // Services
    'services.title': 'Our Services',
    'services.offices': 'Offices',
    'services.offices.desc': 'Professional daily, weekly or monthly cleaning for corporate spaces.',
    'services.commercial': 'Commercial',
    'services.commercial.desc': 'Regular maintenance for retail stores, restaurants and public spaces.',
    'services.events': 'Events',
    'services.events.desc': 'Pre and post-event cleaning for conferences, galas and exhibitions.',
    'services.specialized': 'Specialized Maintenance',
    'services.specialized.desc': 'Deep cleaning, disinfection and maintenance of delicate surfaces.',
    
    // About
    'about.title': 'Our promise is simple.',
    'about.text': 'We offer reliable, transparent and hassle-free service — with a digital management system that ensures consistency and quality at every visit.',
    
    // Contact
    'contact.title': 'Get your free estimate',
    'contact.name': 'Name',
    'contact.company': 'Company',
    'contact.phone': 'Phone',
    'contact.email': 'Email',
    'contact.message': 'Message',
    'contact.submit': 'Submit',
    'contact.success': 'Message sent successfully! We will contact you soon.',
    
    // Footer
    'footer.tagline': 'Simple. Clean. Professional.',
    'footer.location': 'Montreal, Quebec',
    'footer.rights': 'All rights reserved.',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('fr');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.fr] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
