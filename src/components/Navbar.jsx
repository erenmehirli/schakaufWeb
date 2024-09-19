import React, { useState } from 'react';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(null);

  const handleMouseEnter = (menu) => {
    setDropdownOpen(menu);
  };

  const handleMouseLeave = () => {
    setDropdownOpen(null);
  };

  const LegalDropdownOpened = () => (
    <div className="absolute pl-3 py-1 flex flex-col gap-3 w-48 bg-white rounded-lg shadow-lg z-10 transition-all duration-300 ease-in-out opacity-100 transform scale-100 origin-top">
      <a href="#">Alt Başlık 1</a>
      <a href="#">Alt Başlık 2</a>
      <a href="#">Alt Başlık 3</a>
      <a href="#">Alt Başlık 4</a>
    </div>
  );

  return (
    <div className="w-full">
      {/* Üst Bant */}
      <div className="bg-black text-white text-sm p-2 text-center">
        Free Shipping on Orders Over $75
      </div>

      {/* Ana Navbar */}
      <nav className="bg-white border-b border-gray-200 w-full">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Sol Menü - Logo */}
            <div className="flex items-center">
              <a href="#" className="text-2xl font-semibold">
                Schakauf
              </a>
            </div>

            {/* Arama Çubuğu */}
            <div className="flex-grow mx-4 pl-60">
              <div className="relative">
                <input
                  type="text"
                  className="block w-2/3 px-4 py-2 bg-gray-200 text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-white dark:bg-gray-100 dark:text-black"
                  placeholder="Search..."
                />
                <button
                  style={{ right: '255px' }}
                  className="absolute top-0 h-full px-4 bg-black text-white rounded-r-lg"
                >
                  <SearchOutlinedIcon />
                </button>
              </div>
            </div>

            {/* Sağ Menü - Kullanıcı ve Sepet */}
            <div className="flex items-center space-x-4">
              <a href="#" className="text-gray-700 hover:text-black">
                <PersonOutlinedIcon className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-700 hover:text-black">
                <ShoppingCartOutlinedIcon className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* İkinci Menü */}
      <nav className="bg-gray-50 dark:bg-gray-100 w-full">
        <div className="max-w-screen-xl px-4 py-3 mx-auto shadow-lg">
          <div className="relative flex items-center">
            <ul className="flex flex-row font-medium gap-6 space-x-8 pl-20 text-sm">
              <li>
                <a
                  href="#"
                  className="text-gray-900 dark:text-black font-semibold hover:underline"
                >
                  New
                </a>
              </li>

              {/* Bras */}
              <li
                className="relative"
                onMouseEnter={() => handleMouseEnter('bras')}
                onMouseLeave={handleMouseLeave}
              >
                <a
                  href="#"
                  className="text-gray-900 dark:text-black font-semibold hover:underline flex items-center"
                >
                  Bras
                  <KeyboardArrowDownOutlinedIcon
                    className={`transition-transform duration-300 ${
                      dropdownOpen === 'bras' ? 'rotate-180' : ''
                    }`}
                  />
                </a>
                {dropdownOpen === 'bras' && <LegalDropdownOpened />}
              </li>

              {/* Panties */}
              <li
                className="relative"
                onMouseEnter={() => handleMouseEnter('panties')}
                onMouseLeave={handleMouseLeave}
              >
                <a
                  href="#"
                  className="text-gray-900 dark:text-black font-semibold hover:underline flex items-center"
                >
                  Panties
                  <KeyboardArrowDownOutlinedIcon
                    className={`transition-transform duration-300 ${
                      dropdownOpen === 'panties' ? 'rotate-180' : ''
                    }`}
                  />
                </a>
                {dropdownOpen === 'panties' && <LegalDropdownOpened />}
              </li>

              {/* Lounge & Sleep */}
              <li
                className="relative"
                onMouseEnter={() => handleMouseEnter('lounge')}
                onMouseLeave={handleMouseLeave}
              >
                <a
                  href="#"
                  className="text-gray-900 dark:text-black font-semibold hover:underline flex items-center"
                >
                  Lounge&Sleep
                  <KeyboardArrowDownOutlinedIcon
                    className={`transition-transform duration-300 ${
                      dropdownOpen === 'lounge' ? 'rotate-180' : ''
                    }`}
                  />
                </a>
                {dropdownOpen === 'lounge' && <LegalDropdownOpened />}
              </li>

              <li>
                <a
                  href="/sayfa"
                  className="text-gray-900 dark:text-black font-semibold hover:underline"
                >
                  Shop by Size
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-900 dark:text-black font-semibold hover:underline"
                >
                  Giveaway
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
