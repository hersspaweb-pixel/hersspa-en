import React from 'react';
import data from '@/data/data.json';

const About = () => {
  return (
    <section id="about" className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h2 className="text-4xl lg:text-5xl font-bold text-amber-800 leading-tight">
                {data.about.title}
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-amber-500 to-orange-500"></div>
            </div>

            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-lg">{data.about.content_1}</p>
              <p>{data.about.content_2}</p>
              <div className="pt-4">
                <button className="cursor-pointer bg-gradient-to-r from-amber-500 to-orange-500 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                  See more
                </button>
              </div>
            </div>
          </div>

          {/* Right side - YouTube Video */}
          <div className="relative">
            <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl bg-white p-2 relative z-10">
              <iframe
                className="w-full h-full rounded-xl"
                src="https://www.youtube.com/embed/WiuiPoXxr-E?si=Il25egy2Eu0y5Azs"
                title="Her S spa Introduction Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-8 -right-8 w-20 h-20 bg-gradient-to-br from-amber-400 to-orange-400 rounded-full opacity-20 z-0"></div>
            <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-gradient-to-br from-orange-400 to-red-400 rounded-full opacity-20 z-0"></div>
          </div>
        </div>
      </div>
      <div></div>
    </section>
  );
};

export default About;
