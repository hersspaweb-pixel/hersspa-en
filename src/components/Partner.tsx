'use client';

import React, { useRef, useEffect, useState } from 'react';
import data from '@/data/data.json';
import Image from 'next/image';

const Partner = () => {
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
    <section id="partner" className="py-16 bg-gray-50 scroll-mt-60">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-amber-800 mb-6 max-w-4xl mx-auto leading-tight">
            {data.partners.title}
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto"></div>
        </div>

        {/* Partner Cards */}
        <div ref={sectionRef} className="grid lg:grid-cols-3 gap-8 mb-12">
          {data.partners.items.map((partner, index) => (
            <div
              key={partner.id}
              className={`bg-white rounded-3xl p-6 border-2 border-[#5c8c30] shadow-lg hover:shadow-2xl transition-all duration-500 ${
                isVisible ? 'animate-slide-in-right' : 'opacity-0'
              }`}
              style={{ animationDelay: isVisible ? `${index * 0.2}s` : '0s' }}
            >
              {/* Partner Image - Circular */}
              <div className="flex justify-center mb-6">
                <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-[#5c8c30] shadow-lg">
                  <Image
                    src={partner.image}
                    alt={partner.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Partner Content */}
              <div className="text-center space-y-4">
                <h3 className="text-lg font-bold text-gray-800 leading-tight">
                  {partner.title}
                </h3>

                <p className="text-[#5c8c30] font-medium text-sm leading-relaxed">
                  {partner.subtitle}
                </p>

                {/* Additional description for partner 2 */}
                {partner.description && (
                  <p className="text-[#5c8c30] text-sm leading-relaxed">
                    {partner.description}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center">
          <button className="bg-gradient-to-r from-amber-500 to-orange-500 cursor-pointer text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
            {data.partners.buttonText}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Partner;
