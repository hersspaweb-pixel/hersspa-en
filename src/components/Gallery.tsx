'use client';

import React, { useRef, useEffect, useState } from 'react';
import data from '@/data/data.json';
import Image from 'next/image';

const Gallery = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.2,
        rootMargin: '50px',
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="gallery" className="py-16 bg-gray-50 scroll-mt-60">
      <div className="container mx-auto px-4 max-w-[1200px]">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-amber-800 mb-4">
            {data.gallery.title}
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto"></div>
        </div>

        <div ref={sectionRef} className="space-y-12">
          {/* Row 1: First Large Image */}
          <div
            className={`${isVisible ? 'animate-slide-in-right' : 'opacity-0'}`}
            style={{ animationDelay: '0.1s' }}
          >
            <div className="relative h-64 lg:h-80 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group">
              <Image
                src={data.gallery.images.large[0]}
                alt="Her S spa community activities"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          {/* Row 2: Second Large Image */}
          <div
            className={`${isVisible ? 'animate-slide-in-right' : 'opacity-0'}`}
            style={{ animationDelay: '0.3s' }}
          >
            <div className="relative h-64 lg:h-80 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group">
              <Image
                src={data.gallery.images.large[1]}
                alt="Her S spa team activities"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          {/* Row 3: Photo Grid */}
          <div
            className={`${isVisible ? 'animate-slide-in-right' : 'opacity-0'}`}
            style={{ animationDelay: '0.5s' }}
          >
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
              {data.gallery.images.grid.map((image, index) => (
                <div
                  key={index}
                  className="relative h-32 lg:h-40 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group"
                >
                  <Image
                    src={image}
                    alt={`Community activity ${index + 1}`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
