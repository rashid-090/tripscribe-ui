import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin } from 'lucide-react';

// Data representing the cards in the image
const placesData = [
  {
    id: 1,
    title: "Phuket",
    location: "Thailand", // Fixed geography (Image said Myanmar, corrected to Thailand usually associated with Phuket, or kept as placeholder if you prefer)
    price: 40000,
    image: "https://images.unsplash.com/photo-1490806843957-31f4c9a91c65?q=80&w=800&auto=format&fit=crop", 
    category: "DESTINATION"
  },
  {
    id: 2,
    title: "Kelingking",
    location: "Indonesia",
    price: 2000,
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=800&auto=format&fit=crop",
    category: "DESTINATION"
  },
  {
    id: 3,
    title: "Mt. Bromo",
    location: "Indonesia",
    price: 3500,
    image: "https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?q=80&w=800&auto=format&fit=crop",
    category: "DESTINATION"
  },
  {
    id: 4,
    title: "Old Bagan",
    location: "Myanmar",
    price: 18000,
    image: "https://images.unsplash.com/photo-1490806843957-31f4c9a91c65?q=80&w=800&auto=format&fit=crop",
    category: "DESTINATION"
  },
  {
    id: 5,
    title: "Ubud",
    location: "Indonesia",
    price: 18000,
    image: "https://images.unsplash.com/photo-1490806843957-31f4c9a91c65?q=80&w=800&auto=format&fit=crop",
    category: "ACCOMODATION"
  },
  {
    id: 6,
    title: "Marina Bay",
    location: "Singapore",
    price: 24000,
    image: "https://images.unsplash.com/photo-1506318164473-2dfd3ede3623?q=80&w=800&auto=format&fit=crop",
    category: "ACTIVITY"
  },
  {
    id: 7,
    title: "Mt. Fuji",
    location: "Japan",
    price: 48000,
    image: "https://images.unsplash.com/photo-1490806843957-31f4c9a91c65?q=80&w=800&auto=format&fit=crop",
    category: "ACTIVITY"
  },
  {
    id: 8,
    title: "Padar Island",
    location: "Indonesia",
    price: 26000,
    image: "https://images.unsplash.com/photo-1490806843957-31f4c9a91c65?q=80&w=800&auto=format&fit=crop",
    category: "DESTINATION"
  }
];

const tabs = ["DESTINATION", "ACCOMODATION", "ACTIVITY"];

const FinePlace = () => {
  const [activeTab, setActiveTab] = useState("DESTINATION");

  // Since the image shows 8 cards regardless of tab, I'll filter for demo logic 
  // or show all if you want the exact static grid from the image.
  // Below: logic to show items (simulating content change for animation)
  // For exact visual match of the 8 cards in the image, we might display all, 
  // but to demonstrate the "Tab Animation" requested, I will shuffle/filter them slightly.
  
  // LOGIC: If 'Destination' is selected, show all (as per image usually default). 
  // If others, filter just to show animation working.
  const filteredPlaces = activeTab === "DESTINATION" 
    ? placesData 
    : placesData.filter(place => place.category === activeTab);

  return (
    <div className="w-full min-h-screen bg-white py-16 font-sans text-slate-800">
      <div className="w-11/12 mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-4xl xl:text-5xl font-messiri font-medium text-black mb-4 tracking-tight">
            Find Out The Best <br /> Travel Choice in Asia
          </h1>
          <p className="text-gray-500 font-Quicksand max-w-xl mx-auto text-sm md:text-base leading-relaxed">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-12">
          <div className="flex flex-col flex-wrap md:flex-nowrap md:flex-row w-full md:w-fit  items-center gap-1 border border-gray-500 rounded-2xl md:rounded-full p-1.5 bg-white shadow-sm">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`
                  relative w-full px-6 py-2.5 text-sm rounded-full transition-colors duration-300 z-10
                  ${activeTab === tab ? 'text-white' : 'text-gray-500 hover:text-gray-700'}
                `}
              >
                {activeTab === tab && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-black rounded-full -z-10"
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Grid Content */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          <AnimatePresence mode='popLayout'>
            {filteredPlaces.map((place) => (
              <motion.div
                key={place.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group relative h-[420px] rounded-[32px] overflow-hidden cursor-pointer shadow-sm"
              >
                {/* Background Image */}
                <img 
                  src={place.image} 
                  alt={place.title} 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90" />

                {/* Content */}
                <div className="absolute bottom-0 left-0 w-full p-6 flex justify-between items-end text-white">
                  
                  {/* Left Side: Title & Loc */}
                  <div className="flex flex-col gap-1">
                    <h3 className="text-2xl font-messiri tracking-wide">{place.title}</h3>
                    <div className="flex items-center gap-1.5 text-gray-300 text-sm">
                      <MapPin size={16} fill="currentColor" className="text-gray-300" />
                      <span className="font-Quicksand">{place.location}</span>
                    </div>
                  </div>

                  {/* Right Side: Price */}
                  <div className="flex flex-col items-end">
                    <span className="text-xs text-gray-300 font-Quicksand mb-1">Start From</span>
                    <span className="text-xl font-messiri font-medium">₹{place.price}</span>
                  </div>

                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty State if filter returns nothing */}
        {filteredPlaces.length === 0 && (
          <div className="text-center py-20 text-gray-400">
            No items found in this category.
          </div>
        )}

      </div>
    </div>
  )
}

export default FinePlace