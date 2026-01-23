import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  FiArrowRight,
  FiUser,
  FiMail,
  FiMessageSquare,
  FiSend,
} from "react-icons/fi";
import { IoMailUnreadOutline } from "react-icons/io5";
import { MdOutlineMarkChatUnread } from "react-icons/md";
import { PiUserCircleFill } from "react-icons/pi";




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
    <div className="relative  min-h-screen md:h-screen w-full overflow-hidden bg-gray-900 text-white font-sans">
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
      <div className="relative py-10 pt-40 md:pt-0 md:py-0 z-10 w-11/12 mx-auto h-full ">
        
        {/* LAYOUT FIX: Used Grid to separate Left (Text) and Right (Form) */}
        <div className="grid grid-cols-1 md:grid-cols-2 h-full items-center">
          
          {/* 1. Left Content Area */}
          <div className="flex flex-col justify-center space-y-8 pr-0 lg:pr-10">
            {/* Pill Badge */}
            <div>
              <span className="inline-block font-Quicksand font-medium rounded-full border border-white/20 bg-white/10 px-6 py-2 text-xs backdrop-blur-sm">
                Feel The Experience
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="font-messiri text-5xl xl:text-7xl leading-tight">
              Explore The <br />
              Majestic Asia <br />
              Landscape Now
            </h1>

            {/* CTA Button */}
            <div>
              <button className="group flex items-center gap-3 rounded-full bg-white px-8 py-4 text-black transition hover:bg-gray-200">
                <span className="text-xs tracking-widest">GET STARTED</span>
                <FiArrowRight
                  size={15}
                  className="transition-transform group-hover:translate-x-1"
                />
              </button>
            </div>
          </div>

          {/* 2. Right Side: Glass Contact Form */}
          {/* Added justify-end to push form to the far right edge within its grid column */}
          <div className="mt-10 md:mt-0 flex justify-center items-center h-full">
            <GlassContactForm />
          </div>
          
        </div>
      </div>
    </div>
  );
};

const GlassContactForm = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: .5, duration: 0.5 }}
      className="w-full max-w-md font-Quicksand p-8 xl:p-10 xl:py-16 rounded-3xl border border-white/20 bg-white/10 backdrop-blur-[6px] shadow-2xl relative overflow-hidden"
    >
      {/* Decorative gradient blob inside the glass card */}
      <div className="absolute -top-10 -right-10 w-32 h-32 bg-purple-500/30 rounded-full blur-3xl pointer-events-none"></div>

      <h3 className="text-4xl font-messiri mb-2 text-white">Get in Touch</h3>
      <p className="text-gray-200 mb-6">
        Fill out the form below to start your journey.
      </p>

      <form className="space-y-5">
        {/* Name Input */}
        <div className="relative group">
          <FiUser className="absolute left-0 top-3 text-gray-300 group-focus-within:text-white transition-colors text-lg" />
          <input
            type="text"
            placeholder="Your Name"
            className="w-full bg-transparent border-b border-white/20 py-3 pl-8 pr-4 text-sm text-white placeholder:text-gray-300 focus:outline-none focus:border-white transition-all"
          />
        </div>

        {/* Email Input */}
        <div className="relative group">
          <IoMailUnreadOutline className="absolute left-0 top-3 text-gray-300 group-focus-within:text-white transition-colors text-lg" />
          <input
            type="email"
            placeholder="Email Address"
            className="w-full bg-transparent border-b border-white/20 py-3 pl-8 pr-4 text-sm text-white placeholder:text-gray-300 focus:outline-none focus:border-white transition-all"
          />
        </div>

        {/* Message Input */}
        <div className="relative group">
          <MdOutlineMarkChatUnread className="absolute left-0 top-3 text-gray-300 group-focus-within:text-white transition-colors text-lg" />
          <textarea
            rows="3"
            placeholder="How can we help?"
            className="w-full bg-transparent border-b border-white/20 py-3 pl-8 pr-4 text-sm text-white placeholder:text-gray-300 focus:outline-none focus:border-white transition-all resize-none"
          ></textarea>
        </div>

        {/* Submit Button */}
        <button className="w-full text-sm mt-2 bg-white hover:bg-gray-100 text-black py-3 cursor-pointer rounded-lg transition-all transform active:scale-95 shadow-lg flex justify-center items-center gap-2">
          <span>Send Message</span>
          <FiSend />
        </button>
      </form>
    </motion.div>
  );
};

export default Banner;