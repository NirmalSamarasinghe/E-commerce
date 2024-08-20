import React from 'react';
import { Link } from 'react-router-dom';

const companylogs = [
  { id: 1, img: '/public/brand1.png' },
  { id: 2, img: '/public/brand2.png' },
  { id: 3, img: '/public/brand3.png' },
  { id: 4, img: '/public/brand4.png' },
  { id: 5, img: '/public/brand5.png' },
];

const Category = () => {
  return (
    <div className="max-w-screen-2xl mx-auto container xl:px-28 px-4 py-28">
      {/* brandsLogos */}
      <div className='flex items-center justify-around flex-wrap gap-4 py-5'>
        {companylogs.map(({ id, img }) => (
          <img key={id} src={img} alt={`Brand ${id}`} />
        ))}
      </div>
      
      {/* category grid */}
      <div className='mt-8 flex flex-col md:flex-row items-center gap-4'>
        <p className='font-semibold uppercase md:-rotate-90 text-center bg-black text-white md:p-1.5 p-2 rounded-sm inline-flex'>
          Explore new and popular styles
        </p>
        <div className='w-full md:w-1/2'>
          <Link to='/'>
            <img src="/image1.png" alt="" className="w-full mb-4 hover:scale-105 transition-all duration-200" />
          </Link>
        </div>
        <div className='w-full md:w-1/2'>
          <div className='grid grid-cols-2 gap-2'>
            <Link to='/'>
              <img src="/image2.png" alt="" className="w-full hover:scale-105 transition-all duration-200" />
            </Link>
            <Link to='/'>
              <img src="/image3.png" alt="" className="w-full hover:scale-105 transition-all duration-200" />
            </Link>
            <Link to='/'>
              <img src="/image4.png" alt="" className="w-full hover:scale-105 transition-all duration-200" />
            </Link>
            <Link to='/'>
              <img src="/image5.png" alt="" className="w-full hover:scale-105 transition-all duration-200" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
 