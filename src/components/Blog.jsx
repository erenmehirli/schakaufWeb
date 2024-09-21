import React from 'react';
import Image from "../assets/images/cicek4.jpg";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';


const Blog = () => {
  return (
    <div className="p-6 w-full bg-white min-h-screen">
      <div className='border-b-2 border-gray-800	'>
        <div className="text-center text-3xl font-serif font-extralight mb-8">
          Blog Posts
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-8 px-14 py-10">
        {/* 1. Box */}
        <div className="border border-gray-900 shadow-xl flex flex-col items-center p-6 rounded-lg transition-transform duration-300 ease-in-out transform w-full md:w-1/3 hover:scale-105">
          <img src={Image} alt="Blog Post" className="w-full h-48 object-cover mb-4 rounded-md" />
          <span className="text-black mb-2 text-sm">August 6, 2024</span>
          <h1 className="text-black text-xl font-extralight mb-4 text-center">Let Your Venus Shine Brightly and Boldly!</h1>
          <button className="text-black py-2 px-6 rounded transition-colors">
            Read More <NavigateNextIcon />
          </button>
        </div>
        {/* 2. Box */}
        <div className="border border-gray-500 shadow-xl flex flex-col items-center p-6 rounded-lg transition-transform duration-300 ease-in-out transform w-full md:w-1/3 hover:scale-105">
          <img src={Image} alt="Blog Post" className="w-full h-48 object-cover mb-4 rounded-md" />
          <span className="text-black mb-2 text-sm">July 20, 2024</span>
          <h1 className="text-black text-xl font-extralight mb-4 text-center">3 Timeless Essentials Every Woman Should Have in Her Wardrobe</h1>
          <button className="text-black py-2 px-6 rounded transition-colors">
            Read More <NavigateNextIcon />
          </button>
        </div>
        {/* 3. Box */}
        <div className="border border-gray-500 shadow-xl flex flex-col items-center p-6 rounded-lg transition-transform duration-300 ease-in-out transform w-full md:w-1/3 hover:scale-105">
          <img src={Image} alt="Blog Post" className="w-full h-48 object-cover mb-4 rounded-md" />
          <span className="text-black mb-2 text-sm">July 16, 2024</span>
          <h1 className="text-black text-xl font-extralight mb-4 text-center">What Makes Mapale Lingerie Stand Out?</h1>
          <button className="text-black py-2 px-6 rounded transition-colors">
            Read More <NavigateNextIcon />
          </button>
        </div>
      </div>

      <button className="text-black p-6 w-full text-center rounded transition-colors ">
        See More <NavigateNextIcon />
      </button>
    </div>
  );
};

export default Blog;
