import React from 'react';
import { FaInstagram, FaTwitter, FaFacebookF, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="w-full font-Quicksand">
      
      {/* ==================== 1. CTA SECTION (Top) ==================== */}
      <div className="relative w-full h-[400px] xl:h-[500px] flex items-center justify-center bg-gray-900">
        {/* Background Image */}
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=1776&auto=format&fit=crop')" 
          }}
        >
          {/* Dark Overlay for Text Readability */}
          <div className="absolute inset-0 bg-black/60" />
        </div>

        {/* Content */}
        <div className="relative z-10 px-6 text-center max-w-3xl mx-auto space-y-6">
          <h2 className="font-messiri text-4xl md:text-5xl lg:text-6xl font-serif text-white leading-tight">
            Get Closer With Us & <br /> Get Special Promo
          </h2>
          <p className="text-gray-300 text-sm md:text-base leading-relaxed max-w-xl mx-auto">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.
          </p>
          <button className="mt-4 bg-white text-black px-10 py-4 rounded-full text-xs font-medium tracking-widest hover:bg-gray-200 transition-colors uppercase">
            Contact Us
          </button>
        </div>
      </div>


      {/* ==================== 2. MAIN FOOTER (Bottom) ==================== */}
      <div className=" bg-[#0b0502] text-white pt-20 pb-8 ">
        
        {/* Grid Container */}
        <div className="w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-8 border-b border-white/10 pb-16">
          
          {/* Column 1: Brand & Address (Span 4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            <h3 className="text-4xl font-messiri tracking-wide text-white">tripscribe</h3>
            <div className="text-gray-400 text-sm leading-relaxed space-y-1">
              <p>Badung, Bali –</p>
              <p>Jl. Desa Sawangan, No. 11</p>
              <p>Nusa Dua, 81566</p>
            </div>
            {/* Social Icons */}
            <div className="flex items-center gap-6 pt-2">
              <SocialIcon icon={<FaInstagram size={18} />} />
              <SocialIcon icon={<FaTwitter size={18} />} />
              <SocialIcon icon={<FaFacebookF size={18} />} />
              <SocialIcon icon={<FaYoutube size={18} />} />
            </div>
          </div>

          {/* Column 2: Page Links (Span 2 cols) */}
          <div className="lg:col-span-2 space-y-6">
            <h4 className="text-2xl font-messiri text-white">Page</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <FooterLink text="About Us" />
              <FooterLink text="Services" />
              <FooterLink text="FAQ" />
              <FooterLink text="Contact Us" />
            </ul>
          </div>

          {/* Column 3: Important Links (Span 2 cols) */}
          <div className="lg:col-span-2 space-y-6">
            <h4 className="text-2xl font-messiri text-white">Important Link</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <FooterLink text="Privacy Policy" />
              <FooterLink text="Career" />
              <FooterLink text="Blog" />
              <FooterLink text="Term & Condition" />
            </ul>
          </div>

          {/* Column 4: Newsletter (Span 4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            <h4 className="text-2xl font-messiri text-white">Our Newsletter</h4>
            <p className="text-sm text-gray-400 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. ut elit tellus, luctus nec.
            </p>
            
            {/* Input Field with Button Inside */}
            <form className="relative mt-2">
              <input 
                type="email" 
                placeholder="Your Email Address" 
                className="w-full bg-transparent border border-white/20 rounded-full py-4 pl-6 pr-32 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-white/50 transition-colors"
              />
              <button 
                type="button"
                className="absolute top-1/2 -translate-y-1/2 right-1.5 bg-white text-black px-6 py-3.5 rounded-full text-[10px] tracking-widest hover:bg-gray-200 transition-colors uppercase"
              >
                subscribe
              </button>
            </form>
          </div>

        </div>

        {/* Footer Bottom (Copyright) */}
        <div className="w-11/12 mx-auto flex flex-col md:flex-row items-center justify-between text-xs text-gray-500 gap-4">
          <p>tripscribe</p>
          <p>Copyright © 2026. All rights reserved</p>
        </div>

      </div>
    </footer>
  );
};

// --- Subcomponents for cleaner code ---

const SocialIcon = ({ icon }) => (
  <a href="#" className="text-white hover:text-gray-300 transition-colors">
    {icon}
  </a>
);

const FooterLink = ({ text }) => (
  <li>
    <a href="#" className="hover:text-white transition-colors">
      {text}
    </a>
  </li>
);

export default Footer;