import React, { useState, useEffect } from "react";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import Checkbox from "@mui/material/Checkbox";
import Image1 from "../assets/images/cicek7.jpg";
import Image2 from "../assets/images/cicek10.jpg";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ImportExportIcon from "@mui/icons-material/ImportExport";

const NewCollections = () => {
  const [isClicked, setIsClicked] = useState(false);
 
  const [openButton, setOpenButton] = useState(null);
  const [selectedStyles, setSelectedStyles] = useState([]);
  const [likes, setLikes] = useState([]);
  const [currentPage, setCurrentPage] = useState(1); // Sayfa durumu
  const productsPerPage = 8; // Her sayfada gösterilecek ürün sayısı

  

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  const styleOptions = ["Style 1", "Style 2"];
  const filterOptions = ["Best Selling", "Sale", "Price, high to low", "Price, low to high"];
  const sizeOptions = ["Small", "Medium", "Large", "X-Large"];
  const colorOptions = ["Red", "Blue", "Black", "White"];

  const toggleButton = (buttonName) => {
    setOpenButton(openButton === buttonName ? null : buttonName);
  };

  const handleStyleChange = (option) => {
    setSelectedStyles((prev) =>
      prev.includes(option) ? prev.filter((item) => item !== option) : [...prev, option]
    );
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        !event.target.closest(".filter-button") &&
        !event.target.closest(".filter-menu")
      ) {
        setOpenButton(null);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const products = [
    { id: 1, name: "Sheer Mesh Balconette Bra Blush", price: 48.94 },
    { id: 2, name: "Sheer Mesh Embroidered Garter Belt Blush Enchant", price: 50.0 },
    { id: 3, name: "Sheer Mesh Embroidery Corset & Garter Straps Blush Enchant", price: 55.0 },
    { id: 4, name: "Sheer Mesh Underwire Bra Blush Lotus Rosewater", price: 45.0 },
    { id: 5, name: "Sheer Lace Trim High Leg Thong Blush Lotus Rosewater", price: 48.94 },
    { id: 6, name: "Sheer Mesh Lace Trim Slip Dress Blush Lotus Rosewater", price: 45.0 },
    { id: 7, name: "Sheer High Waist Thong Panty Blush Vine", price: 48.94 },
    { id: 8, name: "Sheer Stretch Cheeky Tanga Panty Blush The Lace Crema", price: 45.0 },
    { id: 9, name: "Sheer Stretch Cheeky Tanga Panty Blush The Lace Sky", price: 48.94 },
    { id: 10, name: "Sheer High Leg Thong Panty Blush The Mesh Cocoa", price: 45.0 },
    { id: 11, name: "Sheer Mesh Underwire Bra Blush Lotus Rosewater", price: 48.94 },
    { id: 12, name: "Sheer Mesh Underwire Bra Blush Lotus Rosewater", price: 48.94 },
    
  ];

  // Sayfa sayısını hesapla
  const totalPages = Math.ceil(products.length / productsPerPage);

  // Şu anki sayfada gösterilecek ürünleri ayıkla
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  const handlePageChange = (direction) => {
    if (direction === "next" && currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    } else if (direction === "prev" && currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (




    
    <div>

<div className="px-10 pt-10 text-base font-normal font-sans">
        <a href="#" className="hover:text-gray-500">
          Home
        </a>
        <NavigateNextIcon />
        <span>New Collection</span>
      </div>
      <br />
      <div className="px-10">
        <h3 className="font-thin font-serif text-4xl">New Collections</h3>
        <br />
        <p className="w-2/3">
          Looking for something new to add to your lingerie drawer? Then you've
          come to the perfect place as we stock new lingerie collections to fit
          any style and taste! Discover gorgeous intimates from beloved European
          brands with fast delivery and a wide range of sizes (already converted
          from EU to US sizing for your convenience). Make sure to check out
          some of our customer favorites including the sheer lingerie by{" "}
          <a href="#" className="font-bold">
            Gossard{" "}
          </a>
          , practical but elegant lace intimates by{" "}
          <a href="#" className="font-bold">
            Gorteks
          </a>
          , steamy and luxurious styles by{" "}
          <a href="#" className="font-bold">
            Axami
          </a>
          , and the strictly seductive pieces by{" "}
          <a href="#" className="font-bold">
            Noir Handmade
          </a>
          .
        </p>
      </div>

         
          
          
          
                  
                
      
      <br />

      <div className="flex flex-wrap px-9 gap-6 ">
        
        {/* Style Button */}
        <div className="relative">
          <button
            className="bg-white border border-gray-300 text-black py-3 hover:bg-gray-100 transition duration-300 px-10 ease-in-out filter-button shadow-md hover:shadow-lg rounded"
            onClick={() => toggleButton("style")}
          >
            Style{" "}
            {openButton === "style" ? (
              <KeyboardArrowUpIcon />
            ) : (
              <KeyboardArrowDownIcon />
            )}
          </button>
          {openButton === "style" && (
      <div className="absolute border bg-white border-gray-300 mt-1 w-96 max-h-60 overflow-y-auto filter-menu p-2 z-10 custom-scrollbar">
      <div className="flex flex-col gap-2">
        {styleOptions.map((option, index) => (
          <div key={index} className="flex items-center mb-2">
            <Checkbox
              checked={selectedStyles.includes(option)}
              onChange={() => handleStyleChange(option)}
              color="primary" />   {/* color primary */}
            <span className="ml-2">{option}</span>
          </div>
        ))}
      </div>
    </div>
    
       
          )}
        </div>

        {/* Size Button */}
        <div className="relative">
          <button
            className="bg-white border border-gray-300 text-black py-3 hover:bg-gray-100 transition duration-300 px-10 ease-in-out filter-button shadow-md hover:shadow-lg rounded"
            onClick={() => toggleButton("size")}
          >
            Size{" "}
            {openButton === "size" ? (
              <KeyboardArrowUpIcon />
            ) : (
              <KeyboardArrowDownIcon />
            )}
          </button>
          {openButton === "size" && (
            <div className="absolute border bg-white border-gray-300 mt-1 w-full max-h-60 overflow-y-auto filter-menu p-2 z-10">
              {sizeOptions.map((option, index) => (
                <div key={index} className="flex items-center mb-2">
                  <Checkbox
                    checked={selectedStyles.includes(option)}
                    onChange={() => handleStyleChange(option)}
                    color="primary"
                  />
                  <span className="ml-2">{option}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Color Button */}
        <div className="relative">
          <button
            className="bg-white border border-gray-300 text-black py-3 hover:bg-gray-100 transition duration-300 px-10 ease-in-out filter-button shadow-md hover:shadow-lg rounded"
            onClick={() => toggleButton("color")}
          >
            Color{" "}
            {openButton === "color" ? (
              <KeyboardArrowUpIcon />
            ) : (
              <KeyboardArrowDownIcon />
            )}
          </button>
          {openButton === "color" && (
            <div className="absolute border bg-white border-gray-300 mt-1 w-full max-h-60 overflow-y-auto filter-menu p-2 z-10">
              {colorOptions.map((option, index) => (
                <div key={index} className="flex items-center mb-2">
                  <Checkbox
                    checked={selectedStyles.includes(option)}
                    onChange={() => handleStyleChange(option)}
                    color="primary"
                  />
                  <span className="ml-2">{option}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Price Button */}
        <div className="relative">
          <button
            className="bg-white border border-gray-300 text-black py-3 hover:bg-gray-100 transition duration-300 px-10 ease-in-out filter-button shadow-md hover:shadow-lg rounded"
            onClick={() => toggleButton("price")}
          >
            Price{" "}
            {openButton === "price" ? (
              <KeyboardArrowUpIcon />
            ) : (
              <KeyboardArrowDownIcon />
            )}
          </button>
          {openButton === "price" && (
            <div className="absolute border bg-white border-gray-300 mt-1 w-full max-h-60 overflow-y-auto filter-menu p-2 z-10">
              <span>Price options will go here</span>
            </div>
          )}
        </div>
 {/* Sağdaki Buton olacak bu */}
 <div className="relative ml-auto ">
            
            <button
              className="bg-white border border-gray-300 text-black py-3 hover:bg-gray-100 transition duration-300 px-10 ease-in-out filter-button shadow-md hover:shadow-lg rounded"
              onClick={() => toggleButton("filter")}
            >
              Best Seller{" "}
              <ImportExportIcon style={{ color: 'orange' }} className="ml-6" />
            </button>
            {openButton === "filter" && (
              <div className="absolute border bg-white border-gray-300 mt-1 w-full max-h-60 overflow-y-auto filter-menu p-3 z-10 transition-all duration-300 ease-in-out transform translate-y-1 opacity-100 cursor-pointer">
                {filterOptions.map((option, index) => (
                  <div key={index} className="flex items-center mb-2 p-2 rounded hover:bg-gray-200 font-normal hover:text-orange-300 text-lg">
                    <span className="ml-2">{option}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
<div className="border-b-4 pt-6"></div>
<br />
      {/* Üst bölüm ve filtreler aynı kalabilir */}
      <div className="flex flex-wrap px-3">
        {/* Dinamik Ürün Sayısı */}
        <div className="flex items-center px-9">
          <p className="font-bold pr-2 py-5">{products.length}</p>
          <span className="font-normal">Products</span>
        </div>
      </div>
<br />

      {/* Ürün Listesi */}
      <div className="">
        <div className="py-1 px-10">
          <div  className="grid grid-cols-4 gap-5">
            {currentProducts.map((item, index) => (
              <div   onClick={() => window.location.href = '/product-details'}
              key={index} className="border border-gray-300 p-5 w-full hover:scale-105 transition-transform duration-300 ease-in-out transform cursor-pointer">
                <div className="relative">
                  <div className="relative ">
                    <img
                      src={Image1}
                      alt="img"
                      className="w-full py-3 hover:opacity-0 transition-opacity ease-in-out"
                    />
                    <img
                      src={Image2}
                      alt="hover img"
                      className="w-full py-3 absolute top-0 left-0 opacity-0 hover:opacity-100 transition-opacity ease-in-out "
                    />
                  </div>
                  <div className="relative ">
                    {likes.includes(item.id) ? (
                      <button
                        onClick={() => {
                          setLikes(likes.filter((id) => id !== item.id));
                        }}
                        className="absolute text-orange-600 right-1 w-3 transition-opacity duration-300"
                      >
                        <FavoriteIcon />
                      </button>
                    ) : (
                      <button
                        onClick={() => {
                          setLikes([...likes, item.id]);
                        }}
                        className="absolute text-gray-500 right-1 w-3 hover:text-orange-600 transition-opacity duration-300"
                      >
                        <FavoriteBorderIcon />
                      </button>
                    )}
                  </div>
                </div>
                <div className="py-4">
                  <p className="text-2xl font-normal font-sans">€ {item.price}</p>
                  <br />
                  <span>{item.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Sayfalama Butonları */}
      <div className="flex justify-center my-5">
        <button
          onClick={() => handlePageChange("prev")}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-gray-100 text-gray-800 rounded-full hover:bg-gray-200 disabled:bg-gray-300 disabled:cursor-not-allowed"
        >
          <NavigateBeforeIcon />
        </button>
        <p className="mx-4 text-lg">
          {currentPage} / {totalPages}
        </p>
        <button
          onClick={() => handlePageChange("next")}
          disabled={currentPage === totalPages}
          className="px-4 py-2 bg-gray-100 text-gray-800 rounded-full hover:bg-gray-200 disabled:bg-gray-300 disabled:cursor-not-allowed"
        >
          <NavigateNextIcon />
        </button>
      </div>
    </div>
  );
};

export default NewCollections;
