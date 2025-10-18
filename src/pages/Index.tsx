import { LanguageProvider } from '@/contexts/LanguageContext';
import { Navigation } from '@/components/Navigation';
import { Hero } from '@/components/Hero';
import { TrustSection } from '@/components/TrustSection';
import { CertificationsSection } from '@/components/CertificationsSection';
import { ServicesSection } from '@/components/ServicesSection';
import { TestimonialsSection } from '@/components/TestimonialsSection';
import { CaseStudiesSection } from '@/components/CaseStudiesSection';
import { GallerySection } from '@/components/GallerySection';
import { AboutSection } from '@/components/AboutSection';
import { FAQSection } from '@/components/FAQSection';
import { ContactSection } from '@/components/ContactSection';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen">
        <Navigation />
        <main>
          <Hero />
          <TrustSection />
          <CertificationsSection />
          <ServicesSection />
          <TestimonialsSection />
          <CaseStudiesSection />
          <GallerySection />
          <AboutSection />
          <FAQSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default Index;
