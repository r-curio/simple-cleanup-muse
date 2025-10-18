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
    'trust.official': 'La confiance de clients d\'envergure',
    'trust.subtitle': 'Des clients d\'envergure nous font confiance pour la qualité, la constance et la discrétion.',
    'trust.years': 'Années d\'expérience',
    'trust.clients': 'Clients satisfaits',
    'trust.satisfaction': 'Taux de satisfaction',
    
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
    
    // FAQ
    'faq.title': 'Questions Fréquentes',
    'faq.q1': 'À quelle fréquence recommandez-vous le nettoyage commercial?',
    'faq.a1': 'Cela dépend de votre type d\'entreprise et de l\'achalandage. La plupart des bureaux optent pour un nettoyage quotidien ou hebdomadaire, tandis que les commerces de détail préfèrent souvent un service quotidien.',
    'faq.q2': 'Utilisez-vous des produits écologiques?',
    'faq.a2': 'Oui, nous offrons des options de nettoyage écologiques avec des produits certifiés respectueux de l\'environnement. Nous pouvons adapter nos méthodes selon vos préférences.',
    'faq.q3': 'Êtes-vous assurés et cautionnés?',
    'faq.a3': 'Absolument. Nous sommes entièrement assurés et cautionnés pour votre tranquillité d\'esprit et la protection de vos locaux.',
    'faq.q4': 'Puis-je personnaliser mon plan de nettoyage?',
    'faq.a4': 'Certainement! Nous créons des plans de nettoyage sur mesure adaptés à vos besoins spécifiques, votre budget et votre horaire.',
    'faq.q5': 'Comment obtenez-vous une soumission?',
    'faq.a5': 'Contactez-nous via le formulaire ci-dessus, par téléphone ou courriel. Nous planifierons une évaluation gratuite de vos locaux pour vous fournir une soumission détaillée.',
    'faq.q6': 'Offrez-vous des services d\'urgence?',
    'faq.a6': 'Oui, nous offrons des services de nettoyage d\'urgence pour les situations imprévues comme les dégâts, les préparations d\'événements de dernière minute, etc.',
    
    // Certifications
    'certifications.title': 'Certifications & Affiliations',
    'certifications.subtitle': 'Reconnus par les plus grandes associations de l\'industrie du nettoyage',
    'certifications.issa': 'Association Internationale de l\'Industrie du Nettoyage',
    'certifications.bscai': 'Association des Entrepreneurs en Entretien des Bâtiments',
    'certifications.cnesst': 'Commission des Normes, de l\'Équité, de la Santé et de la Sécurité du Travail',
    'certifications.cpeep': 'Comité Paritaire de l\'Entretien d\'Édifices Publics',
    
    // Testimonials
    'testimonials.title': 'Ce que disent nos clients',
    'testimonials.subtitle': 'Des retours authentiques de clients satisfaits',
    'testimonials.client1.name': 'Marie Dubois',
    'testimonials.client1.company': 'Directrice, Tech Solutions Inc.',
    'testimonials.client1.text': 'Service impeccable depuis 3 ans. L\'équipe est professionnelle, ponctuelle et nos bureaux n\'ont jamais été aussi propres.',
    'testimonials.client2.name': 'Jean Tremblay',
    'testimonials.client2.company': 'Propriétaire, Boutique Élégance',
    'testimonials.client2.text': 'Simple Service a transformé l\'entretien de notre commerce. Le système de gestion numérique nous garde toujours informés.',
    'testimonials.client3.name': 'Sophie Martin',
    'testimonials.client3.company': 'Gestionnaire d\'Événements',
    'testimonials.client3.text': 'Ils ont sauvé notre gala! Service d\'urgence rapide et efficace. Je les recommande sans hésitation.',
    
    // Case Studies
    'caseStudies.title': 'Études de Cas',
    'caseStudies.subtitle': 'Résultats concrets pour nos clients',
    'caseStudies.challengeLabel': 'Défi',
    'caseStudies.resultLabel': 'Résultat',
    'caseStudies.improvement': 'Amélioration',
    'caseStudies.case1.title': 'Tour de Bureaux - Centre-Ville',
    'caseStudies.case1.challenge': 'Immeuble de 15 étages nécessitant un nettoyage quotidien avec des standards élevés',
    'caseStudies.case1.result': 'Système de gestion numérique assurant la qualité constante et réduction des plaintes',
    'caseStudies.case2.title': 'Centre Commercial',
    'caseStudies.case2.challenge': 'Coordination de nettoyage pour 50+ boutiques avec horaires variables',
    'caseStudies.case2.result': 'Planification optimisée et satisfaction client maximale',
    'caseStudies.case3.title': 'Campus Corporatif',
    'caseStudies.case3.challenge': 'Transition vers des produits écologiques sans compromettre la qualité',
    'caseStudies.case3.result': 'Certification verte obtenue avec réduction des coûts d\'approvisionnement',
    
    // Gallery
    'gallery.badge': 'Entreprise de nettoyage la mieux notée au Canada',
    'gallery.title': 'Notre Travail en Action',
    'gallery.subtitle': 'Découvrez notre expertise à travers nos réalisations',
    
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
    'trust.official': 'Trusted by major clients',
    'trust.subtitle': 'Major clients trust us for quality, consistency and discretion.',
    'trust.years': 'Years of experience',
    'trust.clients': 'Satisfied clients',
    'trust.satisfaction': 'Satisfaction rate',
    
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
    
    // FAQ
    'faq.title': 'Frequently Asked Questions',
    'faq.q1': 'How often do you recommend commercial cleaning?',
    'faq.a1': 'It depends on your business type and foot traffic. Most offices opt for daily or weekly cleaning, while retail spaces often prefer daily service.',
    'faq.q2': 'Do you use eco-friendly products?',
    'faq.a2': 'Yes, we offer green cleaning options with certified environmentally-friendly products. We can tailor our methods to your preferences.',
    'faq.q3': 'Are you insured and bonded?',
    'faq.a3': 'Absolutely. We are fully insured and bonded for your peace of mind and the protection of your premises.',
    'faq.q4': 'Can I customize my cleaning plan?',
    'faq.a4': 'Certainly! We create custom cleaning plans tailored to your specific needs, budget, and schedule.',
    'faq.q5': 'How do I get a quote?',
    'faq.a5': 'Contact us via the form above, by phone, or email. We\'ll schedule a free assessment of your premises to provide you with a detailed quote.',
    'faq.q6': 'Do you offer emergency services?',
    'faq.a6': 'Yes, we offer emergency cleaning services for unexpected situations like spills, last-minute event preparations, etc.',
    
    // Certifications
    'certifications.title': 'Certifications & Affiliations',
    'certifications.subtitle': 'Recognized by the industry\'s leading cleaning associations',
    'certifications.issa': 'International Sanitary Supply Association',
    'certifications.bscai': 'Building Service Contractors Association International',
    'certifications.cnesst': 'Quebec Workers\' Compensation Board',
    'certifications.cpeep': 'Joint Committee for Public Building Maintenance',
    
    // Testimonials
    'testimonials.title': 'What Our Clients Say',
    'testimonials.subtitle': 'Authentic feedback from satisfied clients',
    'testimonials.client1.name': 'Marie Dubois',
    'testimonials.client1.company': 'Director, Tech Solutions Inc.',
    'testimonials.client1.text': 'Impeccable service for 3 years. The team is professional, punctual and our offices have never been cleaner.',
    'testimonials.client2.name': 'Jean Tremblay',
    'testimonials.client2.company': 'Owner, Boutique Élégance',
    'testimonials.client2.text': 'Simple Service transformed our store\'s maintenance. The digital management system keeps us always informed.',
    'testimonials.client3.name': 'Sophie Martin',
    'testimonials.client3.company': 'Event Manager',
    'testimonials.client3.text': 'They saved our gala! Fast and efficient emergency service. I recommend them without hesitation.',
    
    // Case Studies
    'caseStudies.title': 'Case Studies',
    'caseStudies.subtitle': 'Real results for our clients',
    'caseStudies.challengeLabel': 'Challenge',
    'caseStudies.resultLabel': 'Result',
    'caseStudies.improvement': 'Improvement',
    'caseStudies.case1.title': 'Downtown Office Tower',
    'caseStudies.case1.challenge': '15-story building requiring daily cleaning with high standards',
    'caseStudies.case1.result': 'Digital management system ensuring consistent quality and reduced complaints',
    'caseStudies.case2.title': 'Shopping Center',
    'caseStudies.case2.challenge': 'Coordinating cleaning for 50+ stores with variable schedules',
    'caseStudies.case2.result': 'Optimized scheduling and maximum client satisfaction',
    'caseStudies.case3.title': 'Corporate Campus',
    'caseStudies.case3.challenge': 'Transition to eco-friendly products without compromising quality',
    'caseStudies.case3.result': 'Green certification achieved with reduced supply costs',
    
    // Gallery
    'gallery.badge': 'Top-rated cleaning company in Canada',
    'gallery.title': 'Our Work in Action',
    'gallery.subtitle': 'See our expertise through our completed projects',
    
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
