import React from "react";
import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import {
  FaInstagram,
  FaFacebook,
  FaTwitter,
  FaYoutube,
  FaLinkedin,
} from "react-icons/fa";

let SocailsLink = [
  {
    icon: <FaInstagram />,
    links: `#`,
  },
  {
    icon: <FaFacebook />,
    links: `#`,
  },
  {
    icon: <FaTwitter />,
    links: `#`,
  },
  {
    icon: <FaYoutube />,
    links: `#`,
  },
  {
    icon: <FaLinkedin />,
    links: `#`,
  },
];

const Contact = () => {
  return (
    <section className="w-full bg-white">
      <div className="relative w-full h-[65vh] overflow-hidden">
        {/* --- Background Image --- */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1504730655501-24c39ac53f0e?q=80&w=2070&auto=format&fit=crop"
            alt="Traveler looking at ancient temples"
            className="w-full h-full object-cover"
          />
          {/* Dark Overlay for Text Readability */}
          <div className="absolute inset-0 bg-black/40" />
        </div>

        {/* --- Content Container --- */}
        <div className="relative z-10 w-11/12 mx-auto h-full  flex flex-col justify-center">
          {/* Breadcrumb / Tag */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="w-fit pt-40"
          >
            <div className="inline-flex uppercase items-center gap-3 px-5 py-2 rounded-full bg-white/15 backdrop-blur-sm border border-white/20 text-white text-xs tracking-wider transition-colors hover:bg-white/30 cursor-pointer">
              <span>Home</span>
              <div className="w-[1px] h-3 bg-gray-300"></div>
              <span>Contact</span>
            </div>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-8 text-4xl md:text-6xl font-messiri font-medium text-white leading-[1.1] max-w-4xl"
          >
           Contact Us & Get<br/> Special Promo
          </motion.h1>
        </div>
      </div>
      {/* --- Top Text Section --- */}
      <div className="w-10/12 mx-auto py-16">
        <div className="flex flex-col md:flex-row justify-start items-start xl:items-end gap-5 md:gap-20">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-messiri font-medium text-gray-900 shrink-0"
          >
            Get Closer With Us
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-500 text-base leading-relaxed"
          >
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
          </motion.p>
        </div>
      </div>

      {/* --- Map & Form Section --- */}
      <div className="w-[95%] xl:w-10/12 pb-16 mx-auto relative flex items-center justify-center">
        {/* --- Contact Card --- */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative z-10 w-full  bg-[#0A0500] rounded-[30px] p-8 md:p-12 lg:p-16 overflow-hidden shadow-2xl"
        >
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
            {/* Left Column: Contact Info */}
            <div className="flex-1 lg:border-r border-white/10 lg:pr-12 flex flex-col justify-between">
              <div className="space-y-6">
                {/* Address */}
                <div>
                  <h4 className="text-xs tracking-widest text-white/60 uppercase font-sans mb-3">
                    Office Address
                  </h4>
                  <p className="text-xl md:text-2xl text-white font-messiri leading-snug">
                    Jl. Desa Sawangan No. 11,
                    <br /> Nusa Dua, Bali
                  </p>
                </div>

                {/* Phone */}
                <div>
                  <h4 className="text-xs tracking-widest text-white/60 uppercase font-sans mb-3">
                    Office Phone Number
                  </h4>
                  <p className="text-xl md:text-2xl text-white font-messiri">
                    (+822) 2344 5678 1291
                  </p>
                </div>

                {/* Email */}
                <div>
                  <h4 className="text-xs tracking-widest text-white/60 uppercase font-sans mb-3">
                    Email Address
                  </h4>
                  <p className="text-xl md:text-2xl text-white font-messiri">
                    matour@mail.com
                  </p>
                </div>
              </div>

              {/* Social Media */}
              <div className="mt-12 lg:mt-auto pt-8">
                <h4 className="text-xl md:text-2xl text-white font-messiri mb-6">
                  Follow Our Social Media
                </h4>
                <div className="flex gap-4">
                  {SocailsLink.map((dt, i) => (
                    <a
                      key={i}
                      href={dt.links}
                      className="bg-white text-black w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-200 transition-transform hover:-translate-y-1 duration-300"
                    >
                      {/* We clone the element to enforce a specific size if needed, 
                            or rely on parent text-size */}
                      <span className="text-lg">{dt.icon}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Form */}
            <div className="flex-[1.3]">
              <form className="space-y-8">
                

                {/* Name & Email Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-xs tracking-widest text-white/60 uppercase font-sans">
                      Name
                    </label>
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white placeholder:text-white/30 focus:outline-none focus:border-white/30 transition-colors"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-xs tracking-widest text-white/60 uppercase font-sans">
                      Email Address
                    </label>
                    <div className="relative">
                      <input
                        type="email"
                        placeholder="Your Email Address"
                        className="w-full bg-white/5 border border-white/10 rounded-xl p-4 pr-12 text-white placeholder:text-white/30 focus:outline-none focus:border-white/30 transition-colors"
                      />
                      <div className="absolute right-4 top-1/2 -translate-y-1/2 bg-teal-500/20 p-1 rounded">
                        <Mail size={16} className="text-gray-400" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs tracking-widest text-white/60 uppercase font-sans mb-4">
                    Comments / Questions
                  </label>
                  <textarea
                    rows="5"
                    placeholder="Your Message Here"
                    className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white placeholder:text-white/30 focus:outline-none focus:border-white/30 transition-colors resize-none"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-white hover:bg-white/95 border border-white/10 text-black cursor-pointer font-semibold text-sm tracking-wider uppercase py-4 xl:py-5 rounded-xl transition-transform active:scale-[0.99] mt-4"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </motion.div>
      </div>

      {/* map */}
      <div className="-mt-40">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125218.54684727624!2d75.72841397028876!3d11.255555506928122!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba65938563d4747%3A0x32150641ca32ecab!2sKozhikode%2C%20Kerala!5e0!3m2!1sen!2sin!4v1769166183289!5m2!1sen!2sin"
          width="100%"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          className="h-[60vh] grayscale hover:grayscale-0 duration-300"
        ></iframe>
      </div>
    </section>
  );
};

export default Contact;
