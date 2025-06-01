import Link from "next/link";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import { SERVICES } from "@/lib/constants";

export default function Services() {
  return (
    <section className="py-20 bg-zinc-100" id="services">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-xl mx-auto mb-16">
          <h2 className="text-sm font-medium tracking-wider text-amber-600 uppercase mb-2">Our Services</h2>
          <h3 className="text-4xl font-serif text-zinc-900 mb-4">Premium Grooming Services</h3>
          <div className="w-20 h-1 bg-[#a3826b] mx-auto mb-6"></div>
          <p className="text-zinc-600">
            We offer a range of premium services to keep you looking your best. From classic cuts to hot towel shaves, our experienced barbers have you covered.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service) => (
            <div 
              key={service.id}
              className="group bg-white shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  layout="fill"
                  objectFit="cover"
                  className="group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-[#2a2c32]/20 group-hover:bg-[#2a2c32]/40 transition-colors duration-300"></div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h4 className="text-xl font-serif text-zinc-900">{service.title}</h4>
                  <span className="text-lg font-medium text-amber-600">{service.price}</span>
                </div>
                <p className="text-zinc-600 mb-4">{service.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-zinc-500">Duration: {service.duration}</span>
                  <Link 
                    href="/#booking" 
                    className="flex items-center text-amber-600 hover:text-amber-700 font-medium transition-colors"
                  >
                    Book Now <ChevronRight className="h-4 w-4 ml-1" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}