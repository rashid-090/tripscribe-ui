import React, { useState, useEffect } from "react";
import {
  FiMenu,
  FiArrowRight,
  FiFacebook,
  FiTwitter,
  FiInstagram,
  FiClock,
  FiAlertTriangle,
} from "react-icons/fi";

const Banner = () => {
  // Background images array
  const images = [
    "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2070&auto=format&fit=crop", // Mountains
    "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2070&auto=format&fit=crop", // Hills
    "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?q=80&w=2070&auto=format&fit=crop", // Valley
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Cycle through images every 6 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative h-screen w-full overflow-hidden bg-gray-900 text-white font-sans">
      {/* --- BACKGROUND LAYER (Ken Burns Effect) --- */}
      <div className="absolute inset-0 z-0">
        {images.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-[1500ms] ease-in-out ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={img}
              alt={`Slide ${index}`}
              className={`h-full w-full object-cover transform transition-transform duration-[10000ms] ease-linear ${
                index === currentIndex ? "scale-125" : "scale-100"
              }`}
            />
            {/* Dark Overlay for text readability */}
            <div className="absolute inset-0 bg-black/30" />
          </div>
        ))}
      </div>

      {/* --- CONTENT LAYER --- */}
      <div className="relative  z-10 flex h-full flex-col justify-between w-11/12 mx-auto py-6  md:py-8">
        {/* 2. Main Hero Content */}
        <div className="h-full">
         
            {/* Left Content Area */}
            <div className="md:col-span-8 h-full flex flex-col justify-center space-y-8">
              {/* Pill Badge */}
              <div>
                <span className="inline-block font-Quicksand rounded-full border border-white/20 bg-white/10 px-6 py-2 text-sm backdrop-blur-sm">
                  Feel The Experience
                </span>
              </div>

              {/* Main Headline */}
              <h1 className="font-messiri text-5xl md:text-7xl leading-tight">
                Explore The <br />
                Majestic Asia <br />
                Landscape Now
              </h1>

              {/* CTA Button */}
              <div>
                <button className="group flex items-center gap-3 rounded-full bg-white px-8 py-4 text-black transition hover:bg-gray-200">
                  <span className="text-xs tracking-widest">
                    GET STARTED
                  </span>
                  <FiArrowRight
                    size={15}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </button>
              </div>
            </div>

        </div>

        {/* socials */}

        <div className="flex flex-col gap-5 absolute right-0 top-1/2 -translate-y-1/2 py-40">
          <div className="border border-white/20 rounded-full bg-white/5 px-2 py-2 backdrop-blur-sm w-12 h-12 grid place-items-center">
              <a href="#"><FiFacebook/></a>
          </div>
          <div className="border border-white/20 rounded-full bg-white/5 px-2 py-2 backdrop-blur-sm w-12 h-12 grid place-items-center">
              <a href="#"><FiInstagram/></a>
          </div>
          <div className="border border-white/20 rounded-full bg-white/5 px-2 py-2 backdrop-blur-sm w-12 h-12 grid place-items-center">
              <a href="#"><FiTwitter/></a>
          </div>
        </div>


      </div>
    </div>
  );
};

// --- Subcomponents ---

const SocialButton = ({ icon }) => (
  <button className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white backdrop-blur-sm transition hover:bg-white hover:text-black">
    {icon}
  </button>
);

const InfoBlurb = ({ icon, text }) => (
  <div className="flex items-center gap-4 max-w-xs">
    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white/10 backdrop-blur-md">
      {icon}
    </div>
    <p className="text-xs text-gray-300 leading-relaxed">{text}</p>
  </div>
);

export default Banner;
