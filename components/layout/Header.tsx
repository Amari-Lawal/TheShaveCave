"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { SITE_CONFIG } from "@/lib/constants";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/#services" },
    { name: "Gallery", href: "/#gallery" },
    { name: "Our Team", href: "/#team" },
    { name: "Contact", href: "/#contact" },
  ];

  return (
    <header
      className={cn(
        "top-0 left-0 right-0 z-50 transition-all duration-300",
"bg-[#2a2c32] shadow-md py-4"
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <img className="w-16" src={SITE_CONFIG.ogImage}></img>

        </Link>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-white/90 hover:text-white text-sm uppercase tracking-wider font-medium transition-colors"
            >
              {item.name}
            </Link>
          ))}
          <Button
            asChild
            className="bg-[#a3826b] hover:bg-amber-800bg-amber-800 text-white rounded-none px-6 rounded"
          >
            <Link href="/#booking">Book Now</Link>
          </Button>
        </nav>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className="text-white p-2"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#2a2c32]/95 absolute top-1/8 left-0 right-0 pt-2 pb-6 px-4 z-30">
          <div className="flex flex-col space-y-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="text-white/90 hover:text-white text-sm uppercase tracking-wider font-medium py-2 border-b border-white/10"
              >
                {item.name}
              </Link>
            ))}
            <Button
              asChild
              className="bg-[#797c7d] hover:bg-amber-800 text-white rounded-none mt-4"
            >
              <Link href="/#booking" onClick={() => setIsMenuOpen(false)}>
                Book Now
              </Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}