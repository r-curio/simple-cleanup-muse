import { useLanguage } from '@/contexts/LanguageContext';
import galleryOffice1 from '@/assets/gallery-office-1.jpg';
import galleryTeam from '@/assets/gallery-team.webp';
import galleryCarpet from '@/assets/gallery-carpet.webp';
import galleryWindows from '@/assets/gallery-windows.webp';
import galleryBathroom from '@/assets/gallery-bathroom.jpg';
import gallerySurface from '@/assets/gallery-surface.png';
import galleryFloor from '@/assets/gallery-floor.webp';
import galleryEntrance from '@/assets/gallery-entrance.jpg';
import galleryOffice2 from '@/assets/gallery-office-2.webp';

export const GallerySection = () => {
  const { t } = useLanguage();

  const images = [
    { src: galleryOffice2, alt: 'Office desk cleaning' },
    { src: galleryOffice1, alt: 'Office floor cleaning' },
    { src: galleryTeam, alt: 'Professional cleaning team' },
    { src: galleryCarpet, alt: 'Carpet cleaning service' },
    { src: galleryWindows, alt: 'Window cleaning exterior' },
    { src: galleryBathroom, alt: 'Bathroom sanitation' },
    { src: gallerySurface, alt: 'Surface disinfection' },
    { src: galleryFloor, alt: 'Floor maintenance' },
    { src: galleryEntrance, alt: 'Commercial entrance cleaning' },
  ];

  return (
    <section className="section-padding bg-muted/20">
      <div className="container-custom">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {t('gallery.title')}
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {t('gallery.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 animate-fade-in">
          {images.map((image, index) => (
            <div
              key={index}
              className="group relative aspect-square overflow-hidden rounded-lg bg-card hover-scale"
            >
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
