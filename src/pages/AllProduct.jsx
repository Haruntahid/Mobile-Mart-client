import { useEffect, useState } from "react";
import useAxios from "../hooks/useAxios";
import { FaSearch, FaTimes } from "react-icons/fa";

function AllProduct() {
  const axiosSecure = useAxios();

  const [count, setCount] = useState(0);
  const itemPerPage = 9;
  const [currentPage, setCurrentPage] = useState(1);
  const [mobiles, setMobiles] = useState([]);
  const [search, setSearch] = useState("");
  const [searchText, setSearchText] = useState("");
  const [sort, setSort] = useState("");
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(1000); // Default price range
  const [brands, setBrands] = useState([]);
  const [categories, setCategories] = useState([]);

  const numberOfPages = Math.ceil(count / itemPerPage);

  const pages =
    isNaN(numberOfPages) || numberOfPages < 1
      ? []
      : [...Array(numberOfPages).keys()].map((ele) => ele + 1);

  useEffect(() => {
    const getData = async () => {
      const { data: unique } = await axiosSecure("/brands");
      setBrands(unique.brands);
      setCategories(unique.category);

      const { data } = await axiosSecure(
        `/mobiles?page=${
          currentPage - 1
        }&size=${itemPerPage}&search=${search}&sort=${sort}&brands=${selectedBrands.join(
          ","
        )}&categories=${selectedCategories.join(
          ","
        )}&minPrice=${minPrice}&maxPrice=${maxPrice}`
      );
      setMobiles(data.mobile);
      setCount(data.totalCount);
    };
    getData();
  }, [
    currentPage,
    itemPerPage,
    search,
    axiosSecure,
    sort,
    selectedBrands,
    selectedCategories,
    minPrice,
    maxPrice,
  ]);

  const handlePaginationButton = (value) => {
    setCurrentPage(value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    const text = e.target.search.value;
    setSearch(text);
  };

  const clearSearch = () => {
    setSearchText("");
    setSearch("");
  };

  const handleSortChange = (e) => {
    setSort(e.target.value);
  };

  const handleBrandChange = (brand) => {
    if (selectedBrands.includes(brand)) {
      setSelectedBrands(selectedBrands.filter((item) => item !== brand));
    } else {
      setSelectedBrands([...selectedBrands, brand]);
    }
  };

  const handleCategoryChange = (category) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(
        selectedCategories.filter((item) => item !== category)
      );
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };

  const handlePriceRangeChange = (min, max) => {
    setMinPrice(min);
    setMaxPrice(max);
  };

  const handleReset = () => {
    setSelectedBrands([]);
    setSelectedCategories([]);
    setMinPrice(0);
    setMaxPrice(1000);
    setSearch("");
    setSort("");
    setSearchText("");
  };

  return (
    <>
      <div className="container mx-auto">
        <div className="grid grid-cols-12 gap-10 mt-10">
          <div className="col-span-3">
            {/* Search */}
            <div className="bg-[#28231D] py-5 rounded-lg mb-3">
              <p className="text-center text-xl font-semibold text-white">
                Search
              </p>
              <form onSubmit={handleSearch}>
                <div className="flex p-1 justify-center overflow-hidden rounded-lg my-2 relative">
                  <input
                    type="text"
                    placeholder="Search Model Name.."
                    onChange={(e) => setSearchText(e.target.value)}
                    value={searchText}
                    name="search"
                    className="border-2 border-r-0 focus:outline-none px-3 rounded-2xl rounded-r-none"
                  />
                  {searchText && (
                    <button
                      type="button"
                      onClick={clearSearch}
                      className="absolute right-28 top-5 text-black"
                    >
                      <FaTimes />
                    </button>
                  )}
                  <button
                    className="btn rounded-2xl bg-[#28231D] hover:bg-inherit border rounded-l-none text-white hover:bg-txt-color"
                    type="submit"
                  >
                    <FaSearch />
                  </button>
                </div>
              </form>
            </div>
            {/* Brands Filter */}
            <div className="bg-[#28231D] py-4 px-10 rounded-lg text-white mb-3">
              <p className="text-center text-xl font-semibold">Mobile Brands</p>
              <ul className="mt-3">
                {brands.map((brand, index) => (
                  <li key={index} className="text-white py-[1px]">
                    <label>
                      <input
                        type="checkbox"
                        value={brand}
                        checked={selectedBrands.includes(brand)}
                        onChange={() => handleBrandChange(brand)}
                        className="mr-3"
                      />
                      {brand}
                    </label>
                  </li>
                ))}
              </ul>
            </div>
            {/* Categories Filter */}
            <div className="bg-[#28231D] py-4 px-10 rounded-lg text-white  mb-3">
              <p className="text-center text-xl font-semibold">Categories</p>
              <ul className="mt-3">
                {categories.map((category, index) => (
                  <li key={index} className="text-white py-[2px]">
                    <label>
                      <input
                        type="checkbox"
                        value={category}
                        checked={selectedCategories.includes(category)}
                        onChange={() => handleCategoryChange(category)}
                        className="mr-3"
                      />
                      {category}
                    </label>
                  </li>
                ))}
              </ul>
            </div>
            {/* Price Range Filter */}
            <div className="bg-[#28231D] py-4 rounded-lg text-white text-center mb-3">
              <p className="text-xl font-semibold mb-3">Price Range</p>
              <input
                type="range"
                min="0"
                max="1000"
                value={minPrice}
                onChange={(e) =>
                  handlePriceRangeChange(e.target.value, maxPrice)
                }
                className="mb-2"
              />
              <input
                type="range"
                min="0"
                max="1000"
                value={maxPrice}
                onChange={(e) =>
                  handlePriceRangeChange(minPrice, e.target.value)
                }
                className="mb-2"
              />
              <p className="text-white">
                Min {minPrice} - Max {maxPrice}
              </p>
            </div>
            {/* Reset Button */}
            <button
              className="btn bg-red-500 text-white mt-2 w-full py-2 rounded"
              onClick={handleReset}
            >
              Reset Filters
            </button>
          </div>

          {/* Mobile Boxes */}
          <div className="col-span-9">
            <div className="mb-5 flex justify-between shadow-lg py-4 px-3">
              <h4 className="text-xl">Phones</h4>
              <div>
                <label htmlFor="sort" className="mr-2">
                  Sort by:
                </label>
                <select
                  id="sort"
                  className="border rounded-md p-1"
                  value={sort}
                  onChange={handleSortChange}
                >
                  <option value="">Default</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                  <option value="date-desc">Date Added: Newest first</option>
                  <option value="date-asc">Date Added: Oldest first</option>
                </select>
              </div>
            </div>

            <div className="min-h-[600px]">
              <div className="grid grid-cols-3 gap-4">
                {mobiles.map((mobile) => (
                  <div
                    key={mobile.id}
                    className="border p-4 flex items-center gap-5 rounded-md"
                  >
                    <div className="w-full">
                      <img src={mobile.image} alt={mobile.name} />
                    </div>
                    <div>
                      <h2 className="text-xl font-semibold">{mobile.name}</h2>
                      <div className="divider my-1"></div>
                      <p className="text-[15px] text-black ">
                        Brand:{" "}
                        <span className="font-semibold text-gray-500">
                          {mobile.brand}
                        </span>
                      </p>
                      <p className="text-[15px] text-black ">
                        Price:{" "}
                        <span className="font-semibold  text-gray-500">
                          ${mobile.price}
                        </span>
                      </p>
                      <p className="text-xs text-black ">
                        Description:{" "}
                        <span className="font-semibold text-gray-500">
                          {mobile.description}
                        </span>
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Pagination Controls */}
            <div className="flex justify-center items-center mt-10">
              <button
                disabled={currentPage === 1}
                className="btn bg-[#28231D] text-white"
                onClick={() => handlePaginationButton(currentPage - 1)}
              >
                Prev
              </button>
              {pages.map((page) => (
                <button
                  onClick={() => setCurrentPage(page)}
                  className={
                    currentPage === page
                      ? "btn bg-[#28231D] text-white mx-2"
                      : "btn bg-gray-300 text-black mx-2"
                  }
                  key={page}
                >
                  {page}
                </button>
              ))}
              <button
                className="btn bg-[#28231D] text-white"
                disabled={currentPage === pages.length}
                onClick={() => handlePaginationButton(currentPage + 1)}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AllProduct;
