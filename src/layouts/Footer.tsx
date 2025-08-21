import { GlobeIcon, MailIcon, PhoneIcon } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative bg-cover bg-center bg-black/50 bg-blend-overlay bg-no-repeat pb-28 text-white py-16 bg-[url('/footer.jpg')]">
      <div className="container mx-auto px-4 max-w-[1200px]">
        {/* Stats Section */}
        <div className="flex justify-center gap-32 mb-16">
          <div className="text-center">
            <div className="text-6xl font-bold mb-2">5+</div>
            <div className="text-xl">Client satisfaction rate</div>
          </div>
          <div className="text-center">
            <div className="text-6xl font-bold mb-2">200+</div>
            <div className="text-xl">Branches</div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex gap-12 items-start justify-between">
          {/* Left Side - Contact Info */}
          <div className="space-y-8">
            {/* Brand */}
            <div>
              <h3 className="text-2xl font-bold text-amber-400 mb-6">
                HER S SPA
              </h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <span className="text-amber-400">
                    <PhoneIcon className="w-4 h-4" />
                  </span>
                  <span>Hotline:</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-amber-400">
                    <MailIcon className="w-4 h-4" />
                  </span>
                  <span>Email: hersspa.mus@gmail.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-amber-400">
                    <GlobeIcon className="w-4 h-4" />
                  </span>
                  <span>Website: http://Hersspa.com</span>
                </div>
              </div>
            </div>

            {/* Customer Service */}
            <div>
              <h4 className="text-xl font-bold text-amber-400 mb-4">
                CUSTOMER SERVICE
              </h4>
              <div className="space-y-2">
                <div>Opening hour</div>
                <div>Opening daily</div>
                <div>Last appointment before 1 DAY</div>
              </div>
            </div>
          </div>

          {/* Right Side - Map */}
          <iframe
            src="https://www.google.com/maps/d/embed?mid=1AkiiRrBk1z6WNHZ5m74kdC-bYYEbBeQ&ehbc=2E312F"
            width="640"
            height="480"
          ></iframe>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
