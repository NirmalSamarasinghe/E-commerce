import React, { useState } from "react";
import { FaSearch, FaShoppingBag, FaBars, FaUser, FaTimes } from "react-icons/fa";
import logo from "/logo.png";

const NavBar = () => {
  // State to handle menu visibility
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to toggle menu visibility
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Menu items
  const navItem = [
    { title: "Jewelry & Accessories", Path: "/" },
    { title: "Clothing & Shoes", Path: "/" },
    { title: "Home & Living", Path: "/" },
    { title: "Wedding & Party", Path: "/" },
    { title: "Toys & Entertainment", Path: "/" },
    { title: "Art & Collection", Path: "/" },
    { title: "Craft Supplies & Tools", Path: "/" },
  ];

  return (
    <header className="max-w-screen-2xl xl:px-28 px-4">
      <nav className="flex justify-between items-center container md:py-2 pt-4 pb-3">
        <FaSearch className="text-Black w-6 h-6 cursor-pointer hidden md:block" />
        {/* <a href="/"><img src={logo} alt='logo' /></a> */}

        <div className="text-lg text-Black sm:flex items-center gap-4 hidden">
          <a href="/" className="flex items-center gap-2">
            <FaUser />
            Account
          </a>
          <a href="/" className="flex items-center gap-2">
            <FaShoppingBag />
            Shopping
          </a>
        </div>

        {/* Navbar for small devices */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isMenuOpen ? (
              <FaTimes className="w-5 h-5 text-Black" />
            ) : (
              <FaBars className="w-5 h-5 text-Black" />
            )}
          </button>
        </div>
      </nav>
      <hr />

      {/* Category for larger screens */}
      <div className="pt-4">
        <ul className="lg:flex items-center justify-between text-Black hidden">
          {navItem.map((item, index) => (
            <li key={index} className="hover:text-orange-500 my-3 cursor-pointer">
              <a href={item.Path}>{item.title}</a>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden ${isMenuOpen ? "" : "hidden"} bg-Black text-white px-4 py-2 rounded`}>
        <ul>
          {navItem.map((item, index) => (
            <li key={index} className="hover:text-orange-500 my-3 cursor-pointer">
              <a href={item.Path}>{item.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default NavBar;
