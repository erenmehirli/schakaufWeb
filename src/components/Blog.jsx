import React from 'react';
import Image from "../assets/images/cicek4.jpg";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

const Blog = () => {
  return (
    <div className="p-6 w-full bg-white min-h-screen ">
        <div className='border-b-4'>
      <div className="text-center text-3xl font-serif font-extralight mb-8 ">
        Blog Posts </div>
      </div>

      <div className="flex flex-col md:flex-row md gap-8 px-14 py-10">
        {/* 1. Box */}
        <div className=" border-gray-500 gap-5 shadow-xl flex flex-col items-center p-6 rounded-lg  transition-transform duration-300 ease-in-out transform w-full md:w-1/3 border">
          <img src={Image} alt="Blog Post" className="w-full h-48 object-cover mb-4 rounded-md hover:scale-105 " />
          <span className="text-black mb-2 text-sm">August 6, 2024</span>
          <h1 className="text-black text-xl font-extralight mb-4 text-center">Let Your Venus Shine Brightly and Boldly!</h1>
          <button className=" text-black py-2 px-6 rounded  transition-colors duration-300 hover:scale-105">
            Read More <NavigateNextIcon/>
          </button>
        </div>
        {/* 2. Box */}
        <div className="border border-gray-500 gap-5 shadow-xl flex flex-col items-center p-6 rounded-lg  transition-transform duration-300 ease-in-out transform w-full md:w-1/3">
          <img src={Image} alt="Blog Post" className="w-full h-48 object-cover mb-4 rounded-md hover:scale-105 " />
          <span className="text-black mb-2 text-sm">July 20, 2024</span>
          <h1 className="text-black text-xl mb-4 text-center font-extralight">3 Timeless Essentials Every Woman Should Have in Her Wardrobe</h1>
          <button className=" text-black py-2 px-6 rounded transition-colors duration-300 hover:scale-105">
            Read More <NavigateNextIcon/>
          </button>
        </div>
        {/* 3. Box */}
        <div className="border border-gray-500 gap-5 flex flex-col items-center p-6 rounded-lg shadow-xl transition-transform duration-300 ease-in-out transform  w-full md:w-1/3">
          <img src={Image} alt="Blog Post" className="w-full h-48 object-cover mb-4 rounded-md hover:scale-105 " />
          <span className="text-black mb-2 text-sm">July 16, 2024</span>
          <h1 className="text-black text-xl font-extralight mb-4 text-center ">What Makes Mapale Lingerie Stand Out?</h1>
          <button className=" text-black py-2 px-6 rounded transition-colors duration-300 hover:scale-105">
            Read More
            <NavigateNextIcon/>
          </button>
        </div>
      </div>
      <button className=" text-black p-6 w-full text-center rounded transition-colors duration-300 hover:scale-105">
            See More
            <NavigateNextIcon/>
          </button>
    </div>
  );
};

export default Blog;
