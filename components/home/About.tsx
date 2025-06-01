import Image from "next/image";
import { SITE_CONFIG } from "@/lib/constants";

export default function About() {
  return (
    <section className="py-20 bg-zinc-900" id="about">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative h-[500px] md:h-[600px] order-2 md:order-1">
            <div className="absolute top-0 left-0 w-3/4 h-3/4 z-10">
              <div className="relative w-full h-full">
                <Image 
                  src="https://images.pexels.com/photos/1319461/pexels-photo-1319461.jpeg"
                  alt="Barber shop interior"
                  layout="fill"
                  objectFit="cover"
                  className="object-center"
                />
              </div>
            </div>
            <div className="absolute bottom-0 right-0 w-3/4 h-3/4 border-8 border-amber-600">
              <div className="relative w-full h-full -translate-x-8 -translate-y-8">
                <Image 
                  src="https://images.pexels.com/photos/1570807/pexels-photo-1570807.jpeg"
                  alt="Barber cutting hair"
                  layout="fill"
                  objectFit="cover"
                  className="object-center"
                />
              </div>
            </div>
          </div>
          
          <div className="order-1 md:order-2">
            <h2 className="text-sm font-medium tracking-wider text-amber-500 uppercase mb-2">About Our Shop</h2>
            <h3 className="text-4xl font-serif text-white mb-6">A Cut Above The Rest</h3>
            
            <div className="w-20 h-1 bg-[#a3826b] mb-8"></div>
            
            <p className="text-white/80 mb-6">
              Since 2010, {SITE_CONFIG.name} has been redefining men's grooming with our commitment to quality, style, and the perfect customer experience. What started as a small neighborhood shop has grown into a destination for those who appreciate the art of barbering.
            </p>
            
            <p className="text-white/80 mb-8">
              Our team of skilled barbers combines traditional techniques with modern styles to give you a look that's both timeless and contemporary. We believe that a great haircut isn't just about appearance—it's about confidence.
            </p>
            
            <div className="grid grid-cols-2 gap-8 mb-8">
              <div>
                <div className="text-4xl font-serif text-amber-500 mb-2">15+</div>
                <p className="text-white/80">Years Experience</p>
              </div>
              <div>
                <div className="text-4xl font-serif text-amber-500 mb-2">5K+</div>
                <p className="text-white/80">Happy Clients</p>
              </div>
              <div>
                <div className="text-4xl font-serif text-amber-500 mb-2">8</div>
                <p className="text-white/80">Expert Barbers</p>
              </div>
              <div>
                <div className="text-4xl font-serif text-amber-500 mb-2">3</div>
                <p className="text-white/80">Shop Locations</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}