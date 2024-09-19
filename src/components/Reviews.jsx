import React, { useRef, useState, useEffect } from "react";
import TuneOutlinedIcon from "@mui/icons-material/TuneOutlined";

const reviews = [
  {
    id: 1,
    name: "Eren",
    rating: 3,
    comment:
      "Absolutely love the lingerie! The quality is exceptional and the fit is perfect.",
    date: "2024-09-01",
  },
  {
    id: 1,
    name: "Ahmet",
    rating: 1,
    comment:
      "Absolutely love the lingerie! The quality is exceptional and the fit is perfect.",
    date: "2024-09-01",
  },
  {
    id: 1,
    name: "Ayşe",
    rating: 2,
    comment:
      "Absolutely love the lingerie! The quality is exceptional and the fit is perfect.",
    date: "2024-09-01",
  },
  {
    id: 1,
    name: "Eren",
    rating: 2,
    comment:
      "Absolutely love the lingerie! The quality is exceptional and the fit is perfect.",
    date: "2024-09-01",
  },
  {
    id: 1,
    name: "Eren",
    rating: 2,
    comment:
      "Absolutely love the lingerie! The quality is exceptional and the fit is perfect.",
    date: "2024-09-01",
  },
  {
    id: 1,
    name: "Eren",
    rating: 5,
    comment:
      "Absolutely love the lingerie! The quality is exceptional and the fit is perfect.",
    date: "2024-09-01",
  },
  {
    id: 1,
    name: "Eren",
    rating: 5,
    comment:
      "Absolutely love the lingerie! The quality is exceptional and the fit is perfect.",
    date: "2024-09-01",
  },
  {
    id: 1,
    name: "Eren",
    rating: 5,
    comment:
      "Absolutely love the lingerie! The quality is exceptional and the fit is perfect.",
    date: "2024-09-01",
  },
  {
    id: 1,
    name: "Eren",
    rating: 4,
    comment:
      "Absolutely love the lingerie! The quality is exceptional and the fit is perfect.",
    date: "2024-09-01",
  },
  {
    id: 1,
    name: "Eren",
    rating: 4,
    comment:
      "Absolutely love the lingerie! The quality is exceptional and the fit is perfect.",
    date: "2024-09-01",
  },
  {
    id: 1,
    name: "Eren",
    rating: 2,
    comment:
      "Absolutely love the lingerie! The quality is exceptional and the fit is perfect.",
    date: "2024-09-01",
  },
  {
    id: 1,
    name: "Eren",
    rating: 1,
    comment:
      "Absolutely love the lingerie! The quality is exceptional and the fit is perfect.",
    date: "2024-09-01",
  },
  {
    id: 1,
    name: "Eren",
    rating: 4,
    comment:
      "Absolutely love the lingerie! The quality is exceptional and the fit is perfect.",
    date: "2024-09-01",
  },
  {
    id: 1,
    name: "Eren",
    rating: 2,
    comment:
      "Absolutely love the lingerie! The quality is exceptional and the fit is perfect.",
    date: "2024-09-01",
  },
  {
    id: 1,
    name: "Eren",
    rating: 1,
    comment:
      "Absolutely love the lingerie! The quality is exceptional and the fit is perfect.",
    date: "2024-09-01",
  },
  {
    id: 1,
    name: "Eren",
    rating: 5,
    comment:
      "Absolutely love the lingerie! The quality is exceptional and the fit is perfect.",
    date: "2024-09-01",
  },
  {
    id: 1,
    name: "Eren",
    rating: 3,
    comment:
      "Absolutely love the lingerie! The quality is exceptional and the fit is perfect.",
    date: "2024-09-01",
  },
  {
    id: 1,
    name: "Eren",
    rating: 4,
    comment:
      "Absolutely love the lingerie! The quality is exceptional and the fit is perfect.",
    date: "2024-09-01",
  },
  {
    id: 1,
    name: "Eren",
    rating: 1,
    comment:
      "Absolutely love the lingerie! The quality is exceptional and the fit is perfect.",
    date: "2024-09-01",
  },
  {
    id: 1,
    name: "Eren",
    rating: 5,
    comment:
      "Absolutely love the lingerie! The quality is exceptional and the fit is perfect.",
    date: "2024-09-01",
  },
  {
    id: 1,
    name: "Eren",
    rating: 2,
    comment:
      "Absolutely love the lingerie! The quality is exceptional and the fit is perfect.",
    date: "2024-09-01",
  },
  {
    id: 13,
    name: "Tolga",
    rating: 4,
    comment: "Good value for the money.",
    date: "2024-09-23",
  },
];

const formatDate = (dateString) => {
  const options = { year: "numeric", month: "long", day: "numeric" };
  return new Date(dateString).toLocaleDateString(undefined, options);
};

// Calculate the number of people for each star rating
const getRatingCounts = () => {
  const counts = { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 };
  reviews.forEach((review) => {
    counts[review.rating] += 1;
  });
  return counts;
};

// Calculate average rating
const calculateAverageRating = () => {
  const totalRating = reviews.reduce((sum, review) => sum + review.rating, 0);
  return (totalRating / reviews.length).toFixed(1);
};

const Review = ({ review }) => (
  <div className="flex-none border border-gray-200 p-4 rounded-lg shadow-sm mb-4 mx-2 w-64">
    <div className="flex items-center mb-2">
      <h3 className="text-lg font-semibold">
        {review.name}
        <span className="ml-2 text-green-500">✅</span>
      </h3>
    </div>
    <div className="text-yellow-500 mb-2">
      {"★".repeat(review.rating)}
      {"☆".repeat(5 - review.rating)}
    </div>
    <p className="mb-2">{review.comment}</p>
    <span className="text-sm text-gray-600">{formatDate(review.date)}</span>
  </div>
);

const Reviews = () => {
  const scrollContainer = useRef(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isFilteringOpen, setİsFilteringOpen] = useState(false);
  const dropdownRef = useRef(null);
  const [isArrowRight, setIsArrowRight] = useState(true);
  const [selectedFilter, setSelectedFilter] = useState("all");

  const scrollLeft = () => {
    if (scrollContainer.current) {
      scrollContainer.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollContainer.current) {
      scrollContainer.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

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

  const filteredReviews = reviews.filter((review) => {
    if (selectedFilter === "highest") {
      return review.rating >= 3;
    } else if (selectedFilter === "lowest") {
      return review.rating <= 2;
    } else {
      return true; // 'all' or other filter
    }
  });

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

        <h2 className="text-2xl font-bold text-center flex-1">Reviews</h2>

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

      <button
        onClick={scrollLeft}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-300 hover:bg-gray-400 text-white font-bold py-2 px-4 rounded-full"
      >
        ←
      </button>

      <button
        onClick={scrollRight}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-300 hover:bg-gray-400 text-white font-bold py-2 px-4 rounded-full"
      >
        →
      </button>

      <div
        ref={scrollContainer}
        className="flex space-x-4 overflow-x-auto"
        style={{ scrollBehavior: "smooth" }}
      >
        {filteredReviews.map((review) => (
          <Review key={review.id} review={review} />
        ))}
      </div>
    </div>
  );
};

export default Reviews;
