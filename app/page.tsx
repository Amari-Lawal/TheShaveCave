import React from "react";
import dynamic from "next/dynamic";
import { Metadata } from "next";
import { SITE_CONFIG } from "@/lib/constants";

// Layout components
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

// Home page sections
import Hero from "@/components/home/Hero";
import About from "@/components/home/About";
import Services from "@/components/home/Services";
import Team from "@/components/home/Team";
import Testimonials from "@/components/home/Testimonials";
import Contact from "@/components/home/Contact";
import Faq from "@/components/home/Faq";
import Booking from "@/components/home/Booking";
// Dynamic import for components with client-side functionality
const Gallery = dynamic(() => import("@/components/home/Gallery"), { ssr: false });


export const metadata: Metadata = {
  title: `${SITE_CONFIG.name} | Premium Barbershop Experience`,
  icons: {
    icon: "/favicon.ico", // Path to favicon in /public
  },
  description: SITE_CONFIG.description,
  keywords: "barbershop, haircut, beard trim, hot towel shave, men's grooming, barber, fade, haircut styles",
  authors: [{ name: SITE_CONFIG.name }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_CONFIG.url,
    title: `${SITE_CONFIG.name} | Premium Barbershop Experience`,
    description: SITE_CONFIG.description,
    images: [
      {
        url: SITE_CONFIG.ogImage,
        width: 1200,
        height: 630,
        alt: SITE_CONFIG.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_CONFIG.name} | Premium Barbershop Experience`,
    description: SITE_CONFIG.description,
    images: [SITE_CONFIG.ogImage],
  },
};

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Gallery />
        <Team />
        <Testimonials />
        <Booking/>

        <Faq />
        <Contact />
      </main>
      <Footer />
    </>
  );
}