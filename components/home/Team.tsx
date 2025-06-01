"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { TEAM } from "@/lib/constants";

export default function Team() {
  return (
    <section className="py-20 bg-white" id="team">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-xl mx-auto mb-16">
          <h2 className="text-sm font-medium tracking-wider text-amber-600 uppercase mb-2">Our Team</h2>
          <h3 className="text-4xl font-serif text-zinc-900 mb-4">Meet Our Expert Barbers</h3>
          <div className="w-20 h-1 bg-[#a3826b] mx-auto mb-6"></div>
          <p className="text-zinc-600">
            Our team of skilled professionals is passionate about their craft and dedicated to providing you with the best grooming experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {TEAM.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="relative h-80 mb-6 overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  layout="fill"
                  objectFit="cover"
                  className="group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-[#2a2c32]/0 group-hover:bg-[#2a2c32]/30 transition-colors duration-300"></div>
              </div>
              <h4 className="text-xl font-serif text-zinc-900 mb-1">{member.name}</h4>
              <p className="text-amber-600 font-medium mb-3">{member.role}</p>
              <p className="text-zinc-600">{member.bio}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}