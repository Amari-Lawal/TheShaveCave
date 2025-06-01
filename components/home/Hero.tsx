"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { SITE_CONFIG } from "@/lib/constants";
export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background image with overlay */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('${SITE_CONFIG.backgroundImage}')`,
        }}
      >
        <div className="absolute inset-0 bg-[#2a2c32]/60" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-6">
            Expert Haircuts & <span className="text-amber-500">Premium Grooming</span>
          </h1>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            Experience the art of traditional barbering with modern techniques at Elite Cuts. 
            Where style meets precision for the distinguished gentleman.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Button
              asChild
              size="lg"
              className="bg-[#a3826b] hover:bg-amber-800 text-white px-8 py-6 rounded-none text-base rounded"
            >
              <Link href="/#booking">Book Appointment</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="bg-[#2a2c32] border-white text-white hover:bg-white/10 px-8 py-6 rounded-none text-base rounded"
            >
              <Link href="/#services">View Services</Link>
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-1.5 h-3 bg-white rounded-full mt-2"
          />
        </div>
      </motion.div>
    </section>
  );
}