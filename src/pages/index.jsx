import React from "react";
import {
  About,
  Banner,
  Blog,
  Country,
  Destination,
  Faq,
  FinePlace,
  Testimonisal,
} from "../components";
import { FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";

const index = () => {
  return (
    <div>
      <Banner />
      <Destination />
      <About />
      <div className="bg-black text-white py-20">
        <div className="w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-4xl md:text-4xl xl:text-5xl font-messiri">
              Discover A Mesmerizing
              <br /> Nature Landscape &<br /> Stunning Culture
            </h2>
          </div>
          <div className="flex flex-col gap-5">
            <p>
              {" "}
              Nature Landscape & Stunning Culture Lorem ipsum dolor sit amet,
              consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
              Aenean massa. Cum sociis natoque penatibus et magnis dis
              parturient montes.
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
      </div>
        <Country />
        <Testimonisal />
        <FinePlace />
        <Faq />
        <Blog/>
    </div>
  );
};

export default index;
