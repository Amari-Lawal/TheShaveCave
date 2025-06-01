import React from 'react';
import { SITE_CONFIG, BUSINESS_HOURS, LOCATION, SERVICES } from '@/lib/constants';

// JSON-LD data for local business
const createLocalBusinessSchema = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BarberShop",
    "name": SITE_CONFIG.name,
    "description": SITE_CONFIG.description,
    "url": SITE_CONFIG.url,
    "logo": SITE_CONFIG.ogImage,
    "image": SITE_CONFIG.ogImage,
    "telephone": LOCATION.phone,
    "email": LOCATION.email,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": LOCATION.address.split(',')[0],
      "addressLocality": LOCATION.address.split(',')[1],
      "addressRegion": LOCATION.address.split(',')[2].split(' ')[1],
      "postalCode": LOCATION.address.split(',')[2].split(' ')[2],
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "40.740763",
      "longitude": "-74.004255"
    },
    "openingHoursSpecification": BUSINESS_HOURS.map(day => ({
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": day.day,
      "opens": day.hours.split(' - ')[0],
      "closes": day.hours.split(' - ')[1]
    })),
    "priceRange": "$$",
    "servesCuisine": "None",
    "paymentAccepted": "Cash, Credit Card",
    "hasMap": LOCATION.mapUrl,
    "sameAs": [
      SITE_CONFIG.links.facebook,
      SITE_CONFIG.links.instagram,
      SITE_CONFIG.links.twitter
    ]
  };

  return schema;
};

// JSON-LD data for service offerings
const createServiceSchema = () => {
  const services = SERVICES.map(service => ({
    "@type": "Service",
    "name": service.title,
    "description": service.description,
    "provider": {
      "@type": "BarberShop",
      "name": SITE_CONFIG.name
    },
    "serviceType": "Barber Service",
    "offers": {
      "@type": "Offer",
      "price": service.price.replace('$', ''),
      "priceCurrency": "USD"
    },
    "estimatedCost": {
      "@type": "MonetaryAmount",
      "currency": "USD",
      "value": service.price.replace('$', '')
    }
  }));

  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": services.map((service, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": service
    }))
  };
};

export default function JsonLd() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(createLocalBusinessSchema()) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(createServiceSchema()) }}
      />
    </>
  );
}