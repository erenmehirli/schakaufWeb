import React, { useState } from "react";
import flower from "../assets/images/cicek1.jpg";
import flower2 from "../assets/images/cicek2.jpg";
import flower3 from "../assets/images/cicek3.jpg";
import flower4 from "../assets/images/cicek4.jpg";
import flower5 from "../assets/images/cicek5.jpg";
import flower6 from "../assets/images/cicek6.jpg";
import flower7 from "../assets/images/cicek7.jpg";
import flower8 from "../assets/images/cicek8.jpg";
import flower9 from "../assets/images/cicek9.jpg";
import flower10 from "../assets/images/cicek10.jpg";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

const allImages = [
  flower,
  flower2,
  flower3,
  flower4,
  flower5,
  flower6,
  flower7,
  flower8,
  flower9,
  flower10,
];
const ITEMS_PER_PAGE = 5;

const NewProducts = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const handleNext = () => {
    setCurrentPage((prevPage) => {
      const nextPage = prevPage + 1;
      if (nextPage >= Math.ceil(allImages.length / ITEMS_PER_PAGE)) {
        return prevPage;
      }
      return nextPage;
    });
  };

  const handlePrev = () => {
    setCurrentPage((prevPage) => {
      const updatedPage = prevPage - 1;
      if (updatedPage < 0) {
        return prevPage;
      }
      return updatedPage;
    });
  };

  const currentItems = allImages.slice(
    currentPage * ITEMS_PER_PAGE,
    (currentPage + 1) * ITEMS_PER_PAGE
  );

  return (
    <div className="w-full text-center pt-0">
      <div className="border-b-2 p-4">
        <h2 className="text-3xl font-serif mb-4">New Arrivals</h2>
      </div>
      <br />
      <br />

      <div className="flex flex-row items-center justify-center">
        {/* Button Arrow */}
        <button
  onClick={handlePrev}
  className={`text-black border border-s-fuchsia-200 rounded-full hover:shadow-2xl transition duration-300 ease-in-out 
  ${currentPage === 0 ? 'opacity-50 cursor-not-allowed' : 'opacity-100'}`}
  disabled={currentPage === 0}
  style={{ width: '50px', height: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
>
  <ArrowBackIosNewIcon/>
</button>




        <div className="relative overflow-hidden w-full max-w-full">
          <div
            className="flex flex-row gap-4 px-1 py-10 transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${currentPage * 100}%)` }}
          >
            {allImages.map((image, index) => (
              <div
                key={index}
                className="border-2 shadow-xl min-w-[19%] h-[28rem] flex flex-col justify-between group relative transition-transform ease-out duration-500 hover:shadow-2xl rounded-lg w-full md:w-1/5 md:flex-row"

              >
                {/* Resim */}
                <div className="p-4">
                  <img
                    src={image}
                    alt={`flower${index}`}
                    className="w-full h-48 object-cover"
                  />
                  {/* İçerik */}
                  <div className="p-4 flex flex-col justify-center items-start text-start">
                    <span className="text-2xl font-light">$ 49.00</span>
                    <br />
                    <a href="#" className="block text-black">
                      Sheer Mesh Stretch Bodysuit Blush The Mesh Bare
                    </a>
                    <br />
                    <div className="bottom-0 left-0 w-full flex flex-row justify-center items-center opacity-0 group-hover:opacity-100 group-hover:translate-y-5 transition-all duration-300 ease-in-out text-lg">
                      <button className="border border-black text-black bg-white px-0 py-2 m-1 text-sm">
                        Quick Shop
                      </button>
                      <button className="border border-white text-white bg-black px-0 py-2 m-1 text-sm">
                        Choose Options
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>


        {/* Button Arrow */}
        <button
  onClick={handleNext}
  className={`text-blackborder border-s-fuchsia-200 rounded-full hover:shadow-2xl transition duration-300 ease-in-out 
  ${currentPage >= Math.ceil(allImages.length / ITEMS_PER_PAGE) - 1 ? 'opacity-50 cursor-not-allowed' : 'opacity-100'}`}
  disabled={currentPage >= Math.ceil(allImages.length / ITEMS_PER_PAGE) - 1}
  style={{ width: '50px', height: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
>
  <ArrowForwardIosIcon/>
</button>

      </div>
    </div>
  );
};

export default NewProducts; 