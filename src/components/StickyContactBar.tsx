import { useEffect, useState } from 'react';

export const StickyContactBar = ({
  sectionRef,
}: {
  sectionRef: React.RefObject<HTMLDivElement | null>;
}) => {
  const [isSticky, setIsSticky] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const sectionBottom = rect.bottom;

        // If section has scrolled past the viewport, make it fixed
        if (sectionBottom <= 0) {
          setIsSticky(false);
        } else {
          setIsSticky(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sectionRef]);

  return (
    <div
      className={`${
        isSticky ? 'sticky' : 'fixed'
      } bottom-0 left-0 right-0 z-50 bg-[#5c8c30] text-white py-3 px-4 shadow-lg`}
    >
      <div className="mx-auto flex items-center justify-between max-w-[1200px]">
        <div className="flex items-center space-x-4">
          <span className="text-lg font-medium">Relax with HerSspa!</span>
        </div>
        <button className="bg-white text-[#5c8c30] px-6 py-2 cursor-pointer rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300 flex items-center space-x-2">
          <span className="text-orange-500">❤️</span>
          <span>Contact</span>
        </button>
      </div>
    </div>
  );
};
