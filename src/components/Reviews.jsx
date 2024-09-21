import React, { useState, useEffect, useRef } from "react";
import TuneOutlinedIcon from "@mui/icons-material/TuneOutlined";
import CheckBoxIcon from "@mui/icons-material/CheckBox";

const reviews = [
  {
    id: 1,
    name: "Clara",
    rating: 3,
    comment:
      "Good quality, but a bit pricey for what you get.",
    date: "2024-09-01",
  },
  {
    id: 2,
    name: "Alexis",
    rating: 1,
    comment: "Not satisfied with the quality. It could have been much better.",
    date: "2024-09-02",
  },
  {
    id: 3,
    name: "Mia",
    rating: 2,
    comment: "The fit wasn't great, but the material was okay.",
    date: "2024-09-03",
  },
  {
    id: 4,
    name: "Natalia",
    rating: 5,
    comment: "Loved it! Definitely will buy again.",
    date: "2024-09-04",
  },
  {
    id: 5,
    name: "Anna",
    rating: 4,
    comment: "Good quality, but a bit pricey for what you get.",
    date: "2024-09-05",
  },
  {
    id: 6,
    name: "Tanya",
    rating: 3,
    comment: "It's okay, not bad but not great either.",
    date: "2024-09-06",
  },
];

const formatDate = (dateString) => {
  const options = { year: "numeric", month: "long", day: "numeric" };
  return new Date(dateString).toLocaleDateString(undefined, options);
};

const getRatingCounts = () => {
  const counts = { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 };
  reviews.forEach((review) => {
    counts[review.rating] += 1;
  });
  return counts;
};

const calculateAverageRating = () => {
  const totalRating = reviews.reduce((sum, review) => sum + review.rating, 0);
  return (totalRating / reviews.length).toFixed(1);
};

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
      {"★".repeat(review.rating)}
      {"☆".repeat(5 - review.rating)}
    </div>
    <p className="mb-2">{review.comment}</p>
    <span className="text-sm text-gray-600">{formatDate(review.date)}</span>
  </div>
);

const Reviews = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isFilteringOpen, setİsFilteringOpen] = useState(false);
  const dropdownRef = useRef(null);
  const [isArrowRight, setIsArrowRight] = useState(true);
  const [selectedFilter, setSelectedFilter] = useState("all");

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
    setIsArrowRight(!isArrowRight);
  };

  const ratingCounts = getRatingCounts();
  const totalReviews = reviews.length;
  const averageRating = calculateAverageRating();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
        setIsArrowRight(true); // Rotate icon back to right
      }
    };

    if (isDropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isDropdownOpen]);

  const handleFilterChange = (filter) => {
    setSelectedFilter(filter);
  };

  const filteredReviews = reviews
    .filter((review) => {
      if (selectedFilter === "highest") {
        return review.rating >= 3;
      } else if (selectedFilter === "lowest") {
        return review.rating <= 2;
      } else {
        return true; // 'all' or other filter
      }
    })
    .slice(-4); // Only show the last 5 reviews

  return (
    <div className="relative max-w-full mx-auto p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="relative flex items-center">
          <div className="text-lg font-bold text-gray-700 flex items-center">
            <span
              onClick={toggleDropdown}
              className="cursor-pointer flex items-center"
            >
              {totalReviews} Reviews
              <button
                className={`ml-2 transform transition-transform ${
                  isArrowRight ? "rotate-90" : "-rotate-90"
                }`}
                onClick={toggleDropdown}
              >
                →
              </button>
            </span>
          </div>

          {isDropdownOpen && (
            <div
              ref={dropdownRef}
              className="absolute mt-2 bg-white border border-gray-300 rounded-lg shadow-lg p-4 w-48"
              style={{ top: "100%", left: 0 }}
            >
              <div className="mb-4 text-center">
                <span className="text-2xl text-yellow-500">
                  {"★".repeat(Math.round(averageRating))}
                </span>
                <p className="text-sm text-gray-600">
                  Average Rating: {averageRating}
                </p>
              </div>
              {[5, 4, 3, 2, 1].map((star) => (
                <div key={star} className="flex items-center mb-2">
                  <span className="w-10 text-sm text-yellow-500">
                    {"★".repeat(star)}
                    {"☆".repeat(5 - star)}
                  </span>
                  <div className="flex-1 h-4 bg-gray-200 rounded-full overflow-hidden ml-2">
                    <div
                      className="h-full bg-green-500"
                      style={{
                        width: `${(ratingCounts[star] / totalReviews) * 100}%`,
                      }}
                    ></div>
                  </div>
                  <span className="ml-2 text-sm">{ratingCounts[star]}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        <h2 className="text-2xl font-bold text-center flex-1">Latest Reviews</h2>

        {isFilteringOpen == true ? (
          <div className="relative flex items-center">
            <button
              onClick={() => handleFilterChange("highest")}
              className="bg-gray-300 hover:bg-gray-400 text-white font-bold py-2 px-4 rounded-full mx-2"
            >
              Highest Rating
            </button>
            <button
              onClick={() => handleFilterChange("lowest")}
              className="bg-gray-300 hover:bg-gray-400 text-white font-bold py-2 px-4 rounded-full"
            >
              Lowest Rating
            </button>
          </div>
        ) : null}
        <button
          onClick={() => {
            setİsFilteringOpen(!isFilteringOpen);
          }}
        >
          <TuneOutlinedIcon />
        </button>
      </div>

      {/* Kutuları yanyana dizen flex container ve gap-4 ile boşluk ekliyoruz */}
      <div className="flex flex-wrap justify-start gap-4">
        {filteredReviews.map((review) => (
          <Review key={review.id} review={review} />
        ))}
      </div>
    </div>
  );
};

export default Reviews;
