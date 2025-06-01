"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const galleryImages = [
  {
    id: 1,
    src: "https://images.pexels.com/photos/1805600/pexels-photo-1805600.jpeg",
    alt: "Classic men's haircut"
  },
  {
    id: 2,
    src: "https://images.pexels.com/photos/1319461/pexels-photo-1319461.jpeg",
    alt: "Beard trim"
  },
  {
    id: 3,
    src: "https://images.pexels.com/photos/1570807/pexels-photo-1570807.jpeg",
    alt: "Haircut and beard grooming"
  },
  {
    id: 4,
    src: "https://images.pexels.com/photos/1684822/pexels-photo-1684822.jpeg",
    alt: "Modern fade haircut"
  },
  {
    id: 5,
    src: "https://images.pexels.com/photos/1682004/pexels-photo-1682004.jpeg",
    alt: "Barber shop atmosphere"
  },
  {
    id: 6,
    src: "https://images.pexels.com/photos/1813272/pexels-photo-1813272.jpeg",
    alt: "Premium grooming service"
  }
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const openModal = (id: number) => {
    setSelectedImage(id);
    // Prevent body scrolling when modal is open
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setSelectedImage(null);
    // Restore body scrolling
    document.body.style.overflow = "auto";
  };

  return (
    <section className="py-20 bg-zinc-800" id="gallery">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-xl mx-auto mb-16">
          <h2 className="text-sm font-medium tracking-wider text-amber-500 uppercase mb-2">Our Gallery</h2>
          <h3 className="text-4xl font-serif text-white mb-4">Showcase Of Our Work</h3>
          <div className="w-20 h-1 bg-[#a3826b] mx-auto mb-6"></div>
          <p className="text-white/80">
            Browse our gallery of haircuts and styles that demonstrate our expertise and attention to detail.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {galleryImages.map((image) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: image.id * 0.1 }}
              className="relative aspect-square overflow-hidden cursor-pointer"
              onClick={() => openModal(image.id)}
            >
              <Image
                src={image.src}
                alt={image.alt}
                layout="fill"
                objectFit="cover"
                className="hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-[#2a2c32]/0 hover:bg-[#2a2c32]/40 transition-colors duration-300 flex items-center justify-center opacity-0 hover:opacity-100">
                <span className="text-white border border-white px-4 py-2">View</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal */}
        <AnimatePresence>
          {selectedImage !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-[#2a2c32]/90 flex items-center justify-center p-4"
              onClick={closeModal}
            >
              <button
                className="absolute top-4 right-4 text-white hover:text-amber-500"
                onClick={closeModal}
              >
                <X className="h-8 w-8" />
              </button>
              
              <motion.div
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.9 }}
                onClick={(e) => e.stopPropagation()}
                className="relative max-w-4xl w-full h-auto max-h-[80vh]"
              >
                <Image
                  src={galleryImages.find(img => img.id === selectedImage)?.src || ""}
                  alt={galleryImages.find(img => img.id === selectedImage)?.alt || ""}
                  width={1200}
                  height={800}
                  layout="responsive"
                  objectFit="contain"
                  className="max-h-[80vh]"
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}