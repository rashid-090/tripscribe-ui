import React from 'react';
import { FiShield, FiCamera, FiHome, FiPlay } from 'react-icons/fi';

const ExperienceSection = () => {
  return (
    <section className="w-11/12 mx-auto py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        
        {/* === LEFT CONTENT === */}
        <div className="space-y-8">
          {/* Heading */}
          <div className="space-y-4">
            <h2 className="text-4xl md:text-4xl xl:text-5xl font-messiri leading-tight text-gray-900">
              Experience The <br /> New Adventure
            </h2>
            <p className="text-gray-500 leading-relaxed max-w-lg">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            </p>
          </div>

          {/* Features List */}
          <div className="space-y-6">
            <FeatureItem 
              icon={<FiShield size={24} />} 
              title="Safe Traveling" 
              desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been"
            />
            <FeatureItem 
              icon={<FiCamera size={24} />} 
              title="Affordable Price" 
              desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been"
            />
            <FeatureItem 
              icon={<FiHome size={24} />} 
              title="Comfort Accommodation" 
              desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been"
            />
          </div>
        </div>

        {/* === RIGHT IMAGERY === */}
        <div className="relative">
          {/* Main Large Image */}
          <div className="rounded-[2.5rem] overflow-hidden shadow-2xl h-[300px] lg:h-[600px] w-full">
            <img 
              src="https://images.unsplash.com/photo-1512100356356-de1b84283e18?q=80&w=1975&auto=format&fit=crop" 
              alt="Nature Landscape" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

// --- Subcomponents ---

const FeatureItem = ({ icon, title, desc }) => (
  <div className="flex items-start gap-4">
    {/* Icon Circle */}
    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-black text-white flex items-center justify-center mt-1">
      {icon}
    </div>
    {/* Text */}
    <div>
      <h3 className="text-2xl font-messiri text-gray-900 mb-1">
        {title}
      </h3>
      <p className=" text-gray-500 leading-relaxed ">
        {desc}
      </p>
    </div>
  </div>
);


export default ExperienceSection;