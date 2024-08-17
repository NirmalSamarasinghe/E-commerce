import React from "react";
import { FaShoppingBag } from "react-icons/fa";
import banner from '/public/banner1.png';

const Banner = () => {
  return (
    <div style={{ backgroundColor: '#1e28320d' }} className="xl:px-28 px-2">
      <div className="py-16 flex flex-col md:flex-row-reverse justify-between items-center gap-10">
        {/* img */}
        <div className="md:w-1/2">
          <img src={banner} alt="banner" className="w-full h-auto max-w-md shadow-lg" />
        </div>

        <div className="md:w-1/2">
          <h1 className="text-5xl font-light mb-5">Collection</h1>
          <p className="text-lg mb-7">
            You can shop many different collections from various brands here.
          </p>
          <button className="bg-Black hover:bg-orange-500 px-4 py-2 text-white font-semibold rounded-sm flex items-center gap-2">
            <FaShoppingBag className="inline-flex" /> Shop Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
