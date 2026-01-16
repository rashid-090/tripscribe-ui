import React from "react";
import { motion } from "framer-motion";
import { IoMdHome } from "react-icons/io";
import { Link } from "react-router-dom";


const NotFoundGlass = () => {
  return (
    <div className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-black">
      
      {/* --- BACKGROUND BLOBS (Crucial for Glass Effect) --- */}
      <div className="absolute inset-0 w-full h-full">
        <motion.div
          animate={{
            x: [-100, 100, -100],
            y: [-100, 100, -100],
            rotate: [0, 180, 360],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-0 left-0 h-[500px] w-[500px] rounded-full bg-gray-600/60 blur-[100px]"
        />
        <motion.div
          animate={{
            x: [100, -100, 100],
            y: [100, -100, 100],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-0 right-0 h-[600px] w-[600px] rounded-full bg-gray-600/50 blur-[120px]"
        />
        <motion.div
          animate={{
            scale: [1, 1.5, 1],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gray-600/40 blur-[90px]"
        />
      </div>

      {/* --- GLASS CARD CONTAINER --- */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 mx-4 w-full max-w-lg overflow-hidden rounded-3xl border border-white/20 bg-white/10 p-10 shadow-2xl backdrop-blur-xl"
      >
        {/* Shine/Reflection Effect Overlay */}
        <div className="absolute -left-10 -top-10 h-64 w-64 rounded-full bg-white/20 blur-3xl pointer-events-none" />
        <div className="absolute -right-10 -bottom-10 h-64 w-64 rounded-full bg-gray-500/20 blur-3xl pointer-events-none" />

        <div className="relative z-20 flex flex-col items-center text-center">
          
          {/* 404 Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="relative"
          >
            <h1 className="text-[10rem] font-bold leading-none tracking-tighter text-white/20 select-none">
              404
            </h1>
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <span className="text-6xl font-black font-messiri text-white drop-shadow-lg">
                Oops!
              </span>
            </motion.div>
          </motion.div>

          {/* Description */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-6 space-y-2"
          >
            <h2 className="text-2xl font-messiri font-bold text-white">Page Not Found</h2>
            <p className="text-base text-slate-200/80">
              The page you're looking for doesn't exist.
            </p>
          </motion.div>

          {/* Glass Button */}
          <Link to={'/'}>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.2)" }}
            whileTap={{ scale: 0.95 }}
            className="mt-8 group relative flex items-center gap-2 overflow-hidden rounded-full border border-white/20 bg-white/10 px-8 py-3 text-sm  text-white shadow-lg backdrop-blur-md transition-colors hover:border-white/40"
          >
            {/* Button Shine Animation */}
            <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:animate-shimmer" />
            
            <span>Return Home</span>
           <IoMdHome/>
          </motion.div>
          </Link>
        </div>
      </motion.div>

      {/* Tailwind Config Recommendation for Shimmer Animation */}
      <style>{`
        @keyframes shimmer {
          100% { transform: translateX(100%); }
        }
        .animate-shimmer {
          animation: shimmer 1.5s infinite;
        }
      `}</style>
    </div>
  );
};

export default NotFoundGlass;