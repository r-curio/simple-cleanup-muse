import { lazy, Suspense } from 'react';
import { LanguageProvider } from '@/contexts/LanguageContext';
import { Navigation } from '@/components/Navigation';
import { Hero } from '@/components/Hero';
import { TrustSection } from '@/components/TrustSection';

// Lazy load heavy components for better performance
const CertificationsSection = lazy(() => import('@/components/CertificationsSection').then(m => ({ default: m.CertificationsSection })));
const ServicesSection = lazy(() => import('@/components/ServicesSection').then(m => ({ default: m.ServicesSection })));
const TestimonialsSection = lazy(() => import('@/components/TestimonialsSection').then(m => ({ default: m.TestimonialsSection })));
const CaseStudiesSection = lazy(() => import('@/components/CaseStudiesSection').then(m => ({ default: m.CaseStudiesSection })));
const GallerySection = lazy(() => import('@/components/GallerySection').then(m => ({ default: m.GallerySection })));
const AboutSection = lazy(() => import('@/components/AboutSection').then(m => ({ default: m.AboutSection })));
const FAQSection = lazy(() => import('@/components/FAQSection').then(m => ({ default: m.FAQSection })));
const ContactSection = lazy(() => import('@/components/ContactSection').then(m => ({ default: m.ContactSection })));
const Footer = lazy(() => import('@/components/Footer').then(m => ({ default: m.Footer })));

const Index = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen">
        <Navigation />
        <main>
          <Hero />
          <TrustSection />
          <Suspense fallback={<div className="section-padding" />}>
            <CertificationsSection />
            <ServicesSection />
            <TestimonialsSection />
            <CaseStudiesSection />
            <GallerySection />
            <AboutSection />
            <FAQSection />
            <ContactSection />
          </Suspense>
        </main>
        <Suspense fallback={null}>
          <Footer />
        </Suspense>
      </div>
    </LanguageProvider>
  );
};

export default Index;
