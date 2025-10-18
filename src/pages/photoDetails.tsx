import { useParams, Link } from "react-router-dom";
import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { properties } from "../components/data/properties";
import { ChevronLeft, ChevronRight } from "lucide-react";

const PhotoDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const property = properties.find((p) => p.slug === slug);

  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [lightbox, setLightbox] = useState<{ sectionIndex: number; imageIndex: number } | null>(null);

  if (!property) {
    return <div className="text-center text-red-500 mt-10">Property not found</div>;
  }

  const groupedImages = property.photoSections?.length
    ? property.photoSections
    : [{ title: "Photos", images: property.images || [] }];

  const scrollToSection = (index: number) => {
    const section = sectionRefs.current[index];
    section?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const openLightbox = (sectionIndex: number, imageIndex: number) => setLightbox({ sectionIndex, imageIndex });
  const closeLightbox = () => setLightbox(null);

  const showPrev = () => {
    if (!lightbox) return;
    const { sectionIndex, imageIndex } = lightbox;
    const allImages = groupedImages.flatMap((s) => s.images);
    const currentGlobalIndex =
      groupedImages.slice(0, sectionIndex).reduce((acc, s) => acc + s.images.length, 0) + imageIndex;
    const prevGlobalIndex = (currentGlobalIndex - 1 + allImages.length) % allImages.length;

    let count = 0;
    for (let i = 0; i < groupedImages.length; i++) {
      const len = groupedImages[i].images.length;
      if (prevGlobalIndex < count + len) return setLightbox({ sectionIndex: i, imageIndex: prevGlobalIndex - count });
      count += len;
    }
  };

  const showNext = () => {
    if (!lightbox) return;
    const { sectionIndex, imageIndex } = lightbox;
    const allImages = groupedImages.flatMap((s) => s.images);
    const currentGlobalIndex =
      groupedImages.slice(0, sectionIndex).reduce((acc, s) => acc + s.images.length, 0) + imageIndex;
    const nextGlobalIndex = (currentGlobalIndex + 1) % allImages.length;

    let count = 0;
    for (let i = 0; i < groupedImages.length; i++) {
      const len = groupedImages[i].images.length;
      if (nextGlobalIndex < count + len) return setLightbox({ sectionIndex: i, imageIndex: nextGlobalIndex - count });
      count += len;
    }
  };

  return (
    <div className="max-w-6xl mx-auto mt-50 px-4 sm:px-6 lg:px-8">
      {/* ======= Back Button ======= */}
      <div className="flex items-center gap-2 mb-6">
        <Link to={`/property/${slug}`} className="flex items-center gap-1 text-gray-700 hover:text-black transition">
          <ChevronLeft className="w-5 h-5" />
          
        </Link>
      </div>

      {/* ======= Photo Tour Heading + Thumbnails ======= */}
      <div className="mb-10 items-center gap-4">
        <h1 className="text-xl md:text-2xl font-semibold mb-5">Photo tour</h1>
        <div className="flex gap-2 flex-wrap">
          {groupedImages.map((section, index) => (
            <div
              key={section.title}
              className="cursor-pointer w-20 h-20 flex-shrink-0"
              onClick={() => scrollToSection(index)}
            >
              <div className="w-full h-full rounded-lg overflow-hidden mb-1">
                <img
                  src={section.images[0]?.url || "/placeholder.svg"}
                  alt={section.title}
                  className="w-full h-full object-cover hover:opacity-90 transition"
                />
              </div>
              <p className="text-xs font-medium text-gray-900 truncate">{section.title}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ======= Vertical Sections ======= */}
      {groupedImages.map((section, sectionIndex) => (
        <div
          key={sectionIndex}
          ref={(el) => { sectionRefs.current[sectionIndex] = el; }}
          className="mb-16 grid grid-cols-1 md:grid-cols-4 gap-8"
        >
          {/* Left: Section Title */}
          <div className="md:col-span-1 sticky top-28">
            <h2 className="text-xl md:text-2xl font-semibold text-gray-900">{section.title}</h2>
          </div>

          {/* Right: Images */}
          <div className="md:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-4">
            {section.images.map((img, i) => (
              <div
                key={i}
                className="overflow-hidden rounded-2xl h-60 cursor-pointer"
                onClick={() => openLightbox(sectionIndex, i)}
              >
                <img
                  src={img.url}
                  alt={img.label}
                  className="w-full h-full object-cover hover:opacity-90 transition"
                />
              </div>
            ))}
          </div>
        </div>
      ))}

      {/* ======= Lightbox ======= */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <button onClick={closeLightbox} className="absolute top-6 right-6 text-white text-lg font-semibold p-2 hover:underline">
              ✕
            </button>
            <button onClick={showPrev} className="absolute left-6 text-white hover:text-gray-300">
              <ChevronLeft className="w-10 h-10" />
            </button>
            <button onClick={showNext} className="absolute right-6 text-white hover:text-gray-300">
              <ChevronRight className="w-10 h-10" />
            </button>

            <motion.img
              key={groupedImages[lightbox.sectionIndex].images[lightbox.imageIndex].url}
              src={groupedImages[lightbox.sectionIndex].images[lightbox.imageIndex].url}
              alt={groupedImages[lightbox.sectionIndex].images[lightbox.imageIndex].label}
              className="max-h-[80vh] max-w-[90vw] object-contain rounded-lg shadow-lg"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default PhotoDetail;
