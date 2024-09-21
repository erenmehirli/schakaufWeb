import React, { useState, useEffect } from 'react';
import TuneOutlinedIcon from '@mui/icons-material/TuneOutlined';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import resim1 from "../assets/images/cicek1.jpg";
import resim2 from "../assets/images/cicek2.jpg";
import resim3 from "../assets/images/cicek3.jpg";
import resim4 from "../assets/images/cicek4.jpg";

// Sabit inceleme verileri (bu veriler API'den gelebilir)
const reviews = [
  {
    id: 1,
    name: 'Clara',
    rating: 3,
    comment: 'Good quality, but a bit pricey for what you get.',
    date: '2024-09-01',
  },
  {
    id: 2,
    name: 'Alexis',
    rating: 1,
    comment: 'Not satisfied with the quality. It could have been much better.',
    date: '2024-09-02',
  },
  // Diğer incelemeler...
];

// Ürün detaylarını almak için örnek API çağrısı
const fetchProductDetails = async () => {
  return {
    name: 'Product Name',
    price: 49.99,
    description: 'This is a brief description of the product.',
    images: [
      resim1,
      resim2,
      resim3,
      resim4,
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    details: 'Here are the detailed information about the product.',
  };
};

// İnceleme bileşeni
const Review = ({ review }) => (
  <div className="flex-none border border-gray-200 p-4 rounded-lg shadow-sm mb-4 w-64">
    <div className="flex items-center mb-2">
      <h3 className="text-lg font-semibold">
        {review.name}
        <span className="ml-2 text-black">
          <CheckBoxIcon />
        </span>
      </h3>
    </div>
    <div className="text-black mb-2">
      {'★'.repeat(review.rating)}
      {'☆'.repeat(5 - review.rating)}
    </div>
    <p className="mb-2">{review.comment}</p>
    <span className="text-sm text-gray-600">
      {new Date(review.date).toLocaleDateString('tr-TR', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })}
    </span>
  </div>
);

const ProductDetailsWithReviews = () => {
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [isFilteringOpen, setIsFilteringOpen] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [activeTab, setActiveTab] = useState('details'); // Yeni state: 'details' veya 'reviews'

  useEffect(() => {
    const fetchProduct = async () => {
      const productDetails = await fetchProductDetails();
      setProduct(productDetails);
    };

    fetchProduct();
  }, []);

  const handleQuantityChange = (amount) => {
    if (quantity + amount > 0) {
      setQuantity(quantity + amount);
    }
  };

  const handleFilterChange = (filter) => {
    setSelectedFilter(filter);
  };

  const filteredReviews = reviews.filter((review) => {
    if (selectedFilter === 'highest') {
      return review.rating >= 3;
    } else if (selectedFilter === 'lowest') {
      return review.rating <= 2;
    } else {
      return true;
    }
  });

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % product.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? product.images.length - 1 : prevIndex - 1
    );
  };

  if (!product) return <div>Loading...</div>;

  return (
    <div className="max-w-7xl mx-auto p-6">
      {/* Ürün Detayları */}
      <div className="gap-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="relative flex flex-col space-y-4">
            <div className="relative">
              {/* Prev Butonu */}
              <button
                onClick={prevImage}
                className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700"
              >
                <ArrowBackIosIcon />
              </button>

              {/* Mevcut resim */}
              <img
                src={product.images[currentImageIndex]}
                alt={product.name}
                className="w-full h-auto rounded-lg"
              />

              {/* Next Butonu */}
              <button
                onClick={nextImage}
                className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700"
              >
                <ArrowForwardIosIcon />
              </button>
            </div>

            {/* Küçük resimler */}
            <div className="grid grid-cols-4 gap-2">
              {product.images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Thumbnail ${index + 1}`}
                  className={`w-full h-auto border rounded-lg cursor-pointer ${
                    index === currentImageIndex ? 'border-blue-500' : ''
                  }`}
                  onClick={() => setCurrentImageIndex(index)}
                />
              ))}
            </div>
          </div>

          <div className="flex flex-col space-y-6">
            <div>
              <h1 className="text-3xl font-bold">{product.name}</h1>
              <p className="text-2xl text-gray-700">${product.price}</p>
            </div>

            <p className="text-gray-600">{product.description}</p>

            <div>
              <h3 className="text-lg font-semibold mb-2">Size</h3>
              <div className="flex space-x-4">
                {product.sizes.map((size, index) => (
                  <button
                    key={index}
                    className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-200"
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <h3 className="text-lg font-semibold">Quantity</h3>
              <div className="flex items-center border border-gray-300 rounded-lg">
                <button
                  className="px-3 py-2 hover:bg-gray-200"
                  onClick={() => handleQuantityChange(-1)}
                >
                  -
                </button>
                <span className="px-4">{quantity}</span>
                <button
                  className="px-3 py-2 hover:bg-gray-200"
                  onClick={() => handleQuantityChange(1)}
                >
                  +
                </button>
              </div>
            </div>

            <div>
              <button className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />

      {/* Tab Menüsü */}
      <div className="border-t-4 p-6 mt-12">
        <div className="flex items-center justify-start mb-6 space-x-4">
          <button
            onClick={() => setActiveTab('details')}
            className={`px-4 py-2 font-semibold ${
              activeTab === 'details' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600'
            }`}
          >
            Product Details
          </button>
          <button
            onClick={() => setActiveTab('reviews')}
            className={`px-4 py-2 font-semibold ${
              activeTab === 'reviews' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600'
            }`}
          >
            Reviews
          </button>
        </div>

        {/* İçerik */}
        {activeTab === 'details' && (
          <div>
            <h3 className="text-xl font-bold mb-4">Product Details</h3>
            <p className="text-gray-700">{product.details}</p>
          </div>
        )}

        {activeTab === 'reviews' && (
          <div>
            {/* Filtreleme Butonları */}
            {isFilteringOpen && (
              <div className="flex items-center mb-4">
                <button
                  onClick={() => handleFilterChange('highest')}
                  className="bg-gray-300 hover:bg-gray-400 text-black font-bold py-2 px-4 rounded-full mx-2"
                >
                  Highest Rating
                </button>
                <button
                  onClick={() => handleFilterChange('lowest')}
                  className="bg-gray-300 hover:bg-gray-400 text-black font-bold py-2 px-4 rounded-full"
                >
                  Lowest Rating
                </button>
              </div>
            )}
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold">
                {reviews.length} Reviews
              </h3>
              <button
                onClick={() => setIsFilteringOpen(!isFilteringOpen)}
                className="flex items-center text-gray-600 hover:text-black"
              >
                <TuneOutlinedIcon />
                <span className="ml-1">Filter</span>
              </button>
            </div>

            {/* İncelemeleri görüntüleme */}
            <div className="flex flex-wrap justify-start gap-4">
              {filteredReviews.map((review) => (
                <Review key={review.id} review={review} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetailsWithReviews;
