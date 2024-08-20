import React, { useState, useEffect } from "react";
import { FaFilter } from "react-icons/fa";
import Cards from "../../components/Cards";

const Product = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All Product");
  const [sortType, setSortType] = useState("default");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/products.json");
        const data = await response.json();
        setProducts(data);
        setFilteredProducts(data);
      } catch (e) {
        console.error("Error fetching products", e);
      }
    };
    fetchData();
  }, []);

  const filterByCategory = (category) => {
    setSelectedCategory(category);
    const filtered =
      category === "All Product"
        ? products
        : products.filter((product) => product.category === category);
    setFilteredProducts(filtered);
  };

  const handleSort = (sortType) => {
    let sortedProducts = [...filteredProducts];
    switch (sortType) {
      case "A-Z":
        sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "Z-A":
        sortedProducts.sort((a, b) => b.name.localeCompare(a.name));
        break;
      case "low-to-high":
        sortedProducts.sort((a, b) => a.price - b.price);
        break;
      case "high-to-low":
        sortedProducts.sort((a, b) => b.price - a.price);
        break;
      default:
        sortedProducts = [...products];
    }
    setFilteredProducts(sortedProducts);
    setSortType(sortType);
  };

  return (
    <div className="max-w-screen-2xl container mx-auto xl:px-28 px-4 mb-12">
      <h2 className="text-3xl font-semibold capitalize text-center my-8">
        Or Subscribe to the Newsletter
      </h2>

      <div>
        {/* Product cards */}
        <div className="flex flex-col md:flex-row flex-wrap md:justify-between items-center space-y-3 mb-8">
          {/* All buttons */}
          <div className="flex flex-row justify-start md:items-center md:gap-8 gap-4 flex-wrap">
            <button onClick={() => filterByCategory("All Product")}>
              All Product
            </button>
            <button onClick={() => filterByCategory("Clothing")}>
              Clothing
            </button>
            <button onClick={() => filterByCategory("Hoodies")}>
              Hoodies
            </button>
            <button onClick={() => filterByCategory("Bag")}>Bag</button>
          </div>
          {/* Filter button */}
          <div className="flex justify-end mb-4 rounded-sm">
            <div className="bg-black p-2">
              <FaFilter className="text-white h-4 w-4" />
            </div>
            <div>
              <select
                className="bg-black text-white px-2 py-1 rounded-sm"
                onChange={(e) => handleSort(e.target.value)}
                value={sortType}
              >
                <option value="default">Default</option>
                <option value="A-Z">A-Z</option>
                <option value="Z-A">Z-A</option>
                <option value="low-to-high">Low to High</option>
                <option value="high-to-low">High to Low</option>
              </select>
            </div>
          </div>
        </div>
        <Cards filterItems={filteredProducts} />
      </div>
    </div>
  );
};

export default Product;
