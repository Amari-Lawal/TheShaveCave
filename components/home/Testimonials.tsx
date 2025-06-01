"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { TESTIMONIALS } from "@/lib/constants";

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  const testimonialCount = TESTIMONIALS.length;

  useEffect(() => {
    if (!autoplay) return;
    
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonialCount);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [autoplay, testimonialCount]);

  const next = () => {
    setAutoplay(false);
    setCurrent((prev) => (prev + 1) % testimonialCount);
  };
  
  const prev = () => {
    setAutoplay(false);
    setCurrent((prev) => (prev - 1 + testimonialCount) % testimonialCount);
  };

  return (
    <section className="py-20 bg-zinc-900" id="testimonials">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-xl mx-auto mb-16">
          <h2 className="text-sm font-medium tracking-wider text-amber-500 uppercase mb-2">Testimonials</h2>
          <h3 className="text-4xl font-serif text-white mb-4">What Our Clients Say</h3>
          <div className="w-20 h-1 bg-[#a3826b] mx-auto mb-6"></div>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden py-12">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="text-center px-4"
              >
                <div className="flex justify-center mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className="h-6 w-6 text-amber-500" 
                      fill={i < TESTIMONIALS[current].rating ? "currentColor" : "none"}
                    />
                  ))}
                </div>
                <blockquote className="text-xl md:text-2xl text-white/90 font-light italic mb-8">
                  "{TESTIMONIALS[current].comment}"
                </blockquote>
                <p className="text-amber-500 font-medium">{TESTIMONIALS[current].name}</p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation buttons */}
          <button
            onClick={prev}
            className="absolute top-1/2 -translate-y-1/2 left-0 md:-left-12 bg-[#a3826b] hover:bg-amber-800 text-white p-2 rounded-full transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            onClick={next}
            className="absolute top-1/2 -translate-y-1/2 right-0 md:-right-12 bg-[#a3826b] hover:bg-amber-800 text-white p-2 rounded-full transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          {/* Indicators */}
          <div className="flex justify-center space-x-2 mt-8">
            {TESTIMONIALS.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setAutoplay(false);
                  setCurrent(index);
                }}
                className={`w-3 h-3 rounded-full transition-colors ${
                  current === index ? "bg-[#a3826b]" : "bg-white/30"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}