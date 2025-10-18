import { useLanguage } from '@/contexts/LanguageContext';
import gallerySchoolHallway from '@/assets/gallery-school-hallway.webp';
import galleryClassroom from '@/assets/gallery-classroom.jpg';
import galleryHospital from '@/assets/gallery-hospital.png';
import galleryKitchen from '@/assets/gallery-kitchen.jpg';
import galleryOfficeFloor from '@/assets/gallery-office-floor.jpg';
import galleryCleaningTeam from '@/assets/gallery-cleaning-team.webp';
import galleryCarpetMachine from '@/assets/gallery-carpet-machine.webp';
import galleryOfficeDesk from '@/assets/gallery-office-desk.webp';
import galleryBathroom from '@/assets/gallery-bathroom-clean.jpg';
import galleryOfficeVacuum from '@/assets/gallery-office-vacuum.png';

export const GallerySection = () => {
  const { t } = useLanguage();

  const images = [
    { src: galleryOfficeDesk, alt: 'Office desk cleaning' },
    { src: gallerySchoolHallway, alt: 'School hallway floor cleaning' },
    { src: galleryClassroom, alt: 'Classroom desk sanitization' },
    { src: galleryHospital, alt: 'Medical facility cleaning' },
    { src: galleryKitchen, alt: 'Restaurant kitchen cleaning' },
    { src: galleryOfficeFloor, alt: 'Office floor maintenance' },
    { src: galleryCleaningTeam, alt: 'Professional cleaning team' },
    { src: galleryCarpetMachine, alt: 'Carpet deep cleaning' },
    { src: galleryBathroom, alt: 'Bathroom sanitization' },
    { src: galleryOfficeVacuum, alt: 'Office carpet vacuuming' },
  ];

  return (
    <section className="section-padding bg-muted/20">
      <div className="container-custom">
        <div className="text-center mb-12 animate-fade-in">
          <div className="inline-block mb-6 px-4 py-2 rounded-full bg-accent-blue/10 text-accent-blue text-sm font-medium">
            {t('gallery.badge')}
          </div>
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
