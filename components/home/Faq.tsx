"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { FAQ } from "@/lib/constants";

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-white" id="faq">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-xl mx-auto mb-16">
          <h2 className="text-sm font-medium tracking-wider text-amber-600 uppercase mb-2">FAQ</h2>
          <h3 className="text-4xl font-serif text-zinc-900 mb-4">Frequently Asked Questions</h3>
          <div className="w-20 h-1 bg-[#a3826b] mx-auto mb-6"></div>
          <p className="text-zinc-600">
            Find answers to common questions about our services, policies, and procedures.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {FAQ.map((item, index) => (
            <div key={index} className="mb-4">
              <button
                onClick={() => toggleFaq(index)}
                className={`w-full flex items-center justify-between p-6 text-left ${
                  openIndex === index 
                    ? "bg-[#a3826b] text-white"
                    : "bg-zinc-100 text-zinc-900 hover:bg-zinc-200"
                } transition-colors duration-300`}
              >
                <h4 className="text-lg font-medium">{item.question}</h4>
                {openIndex === index ? (
                  <ChevronUp className="h-5 w-5 flex-shrink-0" />
                ) : (
                  <ChevronDown className="h-5 w-5 flex-shrink-0" />
                )}
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 bg-zinc-50 border-t border-zinc-200">
                      <p className="text-zinc-700">{item.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}