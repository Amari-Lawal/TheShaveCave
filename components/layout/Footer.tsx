import Link from "next/link";
import { Instagram, Facebook, Twitter, MapPin, Phone, Mail, Clock } from "lucide-react";
import { SITE_CONFIG, BUSINESS_HOURS, LOCATION } from "@/lib/constants";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white/80">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* About column */}
          <div>
            <h3 className="text-xl font-serif text-white mb-6">About Us</h3>
            <p className="mb-6">
              {SITE_CONFIG.description}
            </p>
            <div className="flex space-x-4">
              <a
                href={SITE_CONFIG.links.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-amber-500 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href={SITE_CONFIG.links.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-amber-500 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href={SITE_CONFIG.links.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-amber-500 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Hours column */}
          <div>
            <h3 className="text-xl font-serif text-white mb-6">Opening Hours</h3>
            <ul className="space-y-3">
              {BUSINESS_HOURS.map((item) => (
                <li key={item.day} className="flex justify-between">
                  <span>{item.day}</span>
                  <span>{item.hours}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact column */}
          <div>
            <h3 className="text-xl font-serif text-white mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 text-amber-500 shrink-0 mt-0.5" />
                <span>{LOCATION.address}</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-3 text-amber-500 shrink-0" />
                <span>{LOCATION.phone}</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-3 text-amber-500 shrink-0" />
                <span>{LOCATION.email}</span>
              </li>
            </ul>
          </div>

          {/* Quick links column */}
          <div>
            <h3 className="text-xl font-serif text-white mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="hover:text-amber-500 transition-colors">Home</Link>
              </li>
              <li>
                <Link href="/#services" className="hover:text-amber-500 transition-colors">Services</Link>
              </li>
              <li>
                <Link href="/#gallery" className="hover:text-amber-500 transition-colors">Gallery</Link>
              </li>
              <li>
                <Link href="/#team" className="hover:text-amber-500 transition-colors">Our Team</Link>
              </li>
              <li>
                <Link href="/#booking" className="hover:text-amber-500 transition-colors">Book Appointment</Link>
              </li>
              <li>
                <Link href="/#contact" className="hover:text-amber-500 transition-colors">Contact</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 text-center text-sm">
          <p>© {currentYear} {SITE_CONFIG.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}