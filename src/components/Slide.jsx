import welcome1 from "../assets/images/deneme.jpg";
import welcome2 from "../assets/images/deneme1.jpg";
import welcome3 from "../assets/images/deneme2.jpg";
import img4 from "../assets/images/deneme3.jpg";
import { useState, useEffect } from "react";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

const preloadSrcList = [welcome1, welcome2, welcome3, img4];

function preloadImage(src) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = img.onabort = () => reject(src);
    img.src = src;
  });
}

const Slider = () => {
  const [curr, setCurr] = useState(0);

  const slides = [
    <img alt="slide" key={0} src={welcome1} className="w-full h-auto object-cover" />,
    <img alt="slide" key={1} src={welcome2} className="w-full h-auto object-cover" />,
    <img alt="slide" key={2} src={welcome3} className="w-full h-auto object-cover" />,
    <img alt="slide" key={3} src={img4} className="w-full h-auto object-cover" />,
  ];

  useEffect(() => {
    let isCancelled = false;

    async function effect() {
      try {
        if (isCancelled) return;

        await Promise.all(preloadSrcList.map(preloadImage));

        if (isCancelled) return;
      } catch (error) {
        console.error('Image preload error:', error);
      }
    }

    effect();

    const interval = setInterval(() => {
      next();
    }, 4500);

    return () => {
      isCancelled = true;
      clearInterval(interval);
    };
  }, []);

  const prev = () => {
    setCurr((prevCurr) => (prevCurr === 0 ? slides.length - 1 : prevCurr - 1));
  };

  const next = () => {
    setCurr((prevCurr) => (prevCurr === slides.length - 1 ? 0 : prevCurr + 1));
  };

  return (
    <div style={{ width: '1000px' }}  className="relative overflow-hidden left-32">
      <div
        className="flex transition-transform ease-out duration-1000"
        style={{ transform: `translateX(-${curr * 100}%)` }}
      >
        {slides}
      </div>
      <div className="absolute inset-0 flex items-center justify-between p-4">
        <button
          aria-label="sliderLeftButton"
          onClick={prev}
          className="bg-transparent border-none p-2 rounded-full cursor-pointer text-white hover:bg-black/80 transition"
        >
          <ArrowBackIosNewIcon fontSize="large" className="fill-slate-900" />
        </button>
        <button
          aria-label="sliderRightButton"
          onClick={next}
          className="bg-transparent border-none p-2 rounded-full cursor-pointer text-white hover:bg-black/80 transition"
        >
          <ArrowForwardIosIcon fontSize="large" className="fill-slate-900" />
        </button>
      </div>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-4">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`relative w-6 h-1 bg-gray-500 rounded-full cursor-pointer transition-transform duration-300 ${index === curr ? 'bg-white w-10' : ''}`}
            onClick={() => setCurr(index)}
          >
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;