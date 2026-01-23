import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';

// --- Data ---
const faqData = [
  {
    id: 1,
    question: "1. What to prepare trip to Asia",
    answer: "You should prepare your passport, visa, travel insurance, and pack appropriate clothing for the tropical climate. Don't forget universal power adapters and local currency."
  },
  {
    id: 2,
    question: "2. What document you need before go to asia",
    answer: "A valid passport with at least 6 months validity, a tourist visa (depending on your nationality), and flight tickets are the essentials."
  },
  {
    id: 3,
    question: "3. How to scheduling Asia trip itinerary",
    answer: "Start by picking a region (e.g., Southeast Asia), allocate 3-4 days per city, and book internal flights or trains in advance to save costs."
  },
  {
    id: 4,
    question: "4. 8 Website must read before your trip",
    answer: "Check out TripAdvisor, Lonely Planet, Agoda for booking, and local government tourism sites for the latest entry requirements."
  },
  {
    id: 5,
    question: "5. This is the best budget you need to prepare",
    answer: "Budget varies by country. For Southeast Asia, $50-100 USD per day is comfortable. For East Asia (Japan/Korea), budget $150-200 USD per day."
  },
  {
    id: 6,
    question: "6. This site give you the information about travel to Asia",
    answer: "Our website offers comprehensive guides, but you can also check WikiTravel and various travel blogs for specific hidden gems."
  }
];

// --- Individual Item (Stateless) ---
// Now accepts `isOpen` and `onClick` from parent
const FAQItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="border-b border-white/20">
      <button
        onClick={onClick}
        className="flex items-center justify-between w-full py-6 text-left focus:outline-none group"
      >
        <span className={`text-base xl:text-lg font-medium transition-colors ${isOpen ? "text-white" : "text-white/80 group-hover:text-white"}`}>
          {question}
        </span>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="ml-4 text-white"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            strokeWidth={2} 
            stroke="currentColor" 
            className="w-5 h-5"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
          </svg>
        </motion.span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-gray-400 text-sm xl:text-base leading-relaxed">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// --- Main Component (State Manager) ---
const FaqList = () => {
  // State checks which ID is currently open. null means all closed.
  const [openId, setOpenId] = useState(null);

  // Toggle logic: if clicking the one already open, close it (set null). 
  // Otherwise, open the new one.
  const handleToggle = (id) => {
    setOpenId(openId === id ? null : id);
  };

  const leftColumnData = faqData.slice(0, 3);
  const rightColumnData = faqData.slice(3, 6);

  return (
    <section className="bg-black min-h-screen py-16">
      <div className="w-11/12 mx-auto">
        
        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start mb-16 gap-8">
          <div className="lg:w-1/2">
            <h2 className="text-4xl md:text-4xl xl:text-5xl text-white font-messiri leading-tight">
              Enjoy Our Best Quality <br />
              Tour & Experience
            </h2>
          </div>
          <div className="lg:w-1/3 flex flex-col items-start space-y-6">
            <p className="text-gray-400 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus.
            </p>
             <Link
              to={"/"}
              className="w-fit group flex items-center gap-3 rounded-full bg-white px-8 py-4 text-black transition hover:bg-gray-300"
            >
              <span className="text-xs tracking-widest">GET STARTED</span>
              <FiArrowRight
                size={15}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
          </div>
        </div>

        {/* FAQ Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-4 mb-20">
          <div>
            {leftColumnData.map((item) => (
              <FAQItem 
                key={item.id} 
                {...item}
                // Pass true if this item's ID matches the state
                isOpen={openId === item.id}
                // Pass the toggle function
                onClick={() => handleToggle(item.id)}
              />
            ))}
          </div>

          <div>
            {rightColumnData.map((item) => (
              <FAQItem 
                key={item.id} 
                {...item}
                isOpen={openId === item.id}
                onClick={() => handleToggle(item.id)}
              />
            ))}
          </div>
        </div>

        {/* Video Section */}
        <div className="w-full relative h-[300px] xl:h-[600px] rounded-[3rem] overflow-hidden group">
          <div className="absolute inset-0 bg-black/20 z-10 pointer-events-none"></div>
          <video
            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
            autoPlay
            loop
            muted
            playsInline
            src="https://videos.pexels.com/video-files/2169880/2169880-uhd_2560_1440_30fps.mp4"
          />
          <div className="absolute inset-0 z-20 flex items-center justify-center">
            <button className="bg-white/10 backdrop-blur-md p-6 rounded-full border border-white/20 group-hover:bg-white/20 transition-all">
               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-white">
                  <path fillRule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z" clipRule="evenodd" />
                </svg>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default FaqList;