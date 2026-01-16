import React from 'react';
import { FiArrowUpRight } from 'react-icons/fi';

const destinations = [
  {
    id: 1,
    title: 'Kelingking Beach',
    location: 'Nusa Penida, Bali',
    imageUrl: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2070&auto=format&fit=crop',
    className: 'md:col-span-1 md:row-span-2', // Tall card on the left
  },
  {
    id: 2,
    title: 'Grand Palace',
    location: 'Bangkok, Thailand',
    imageUrl: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2070&auto=format&fit=crop',
    className: 'md:col-span-1', // Top-right card 1
  },
  {
    id: 3,
    title: 'Cappadocia',
    location: 'Turkey',
    imageUrl: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2070&auto=format&fit=crop',
    className: 'md:col-span-1', // Top-right card 2
  },
  {
    id: 4,
    title: 'Padar Island',
    location: 'East Nusa Tenggara',
    imageUrl: 'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?q=80&w=2070&auto=format&fit=crop',
    className: 'md:col-span-2', // Bottom-right wide card
  },
];

const DestinationCard = ({ title, location, imageUrl, className }) => {
  return (
    <div className={`relative rounded-3xl overflow-hidden group ${className}`}>
      {/* Image with hover zoom effect */}
      <img
        src={imageUrl}
        alt={title}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-90"></div>
      
      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-6 flex justify-between items-end text-white">
        <div>
          <h3 className="text-xl font-semibold mb-1 font-messiri tracking-wide">{title}</h3>
          <p className="text-sm text-gray-300">{location}</p>
        </div>
        {/* Arrow Icon */}
        <div className="w-10 h-10 rounded-full border border-white/50 flex items-center justify-center text-white transition-colors duration-300 hover:bg-white/20 cursor-pointer">
          <FiArrowUpRight size={20} />
        </div>
      </div>
    </div>
  );
};

const DestinationGallery = () => {
  return (
    <div className="w-11/12  mx-auto py-20">
      {/* CSS Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[400px]">
        {destinations.map((dest) => (
          <DestinationCard
            key={dest.id}
            title={dest.title}
            location={dest.location}
            imageUrl={dest.imageUrl}
            className={dest.className}
          />
        ))}
      </div>
    </div>
  );
};

export default DestinationGallery;