import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import useAxios from "../hooks/useAxios";
import { FaSearch, FaTimes } from "react-icons/fa";
import useAuth from "../hooks/useAuth";

function AllProduct() {
  const axiosSecure = useAxios();
  const { loading: authLoading } = useAuth();

  const itemPerPage = 9;
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState("");
  const [searchText, setSearchText] = useState("");
  const [sort, setSort] = useState("");
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(1000); // Default price range

  // Fetch Brands and Categories
  const { data: brandCategoryData, isLoading: brandCategoryLoading } = useQuery(
    {
      queryKey: ["brandsCategories"],
      queryFn: async () => {
        const { data } = await axiosSecure("/brands");
        return data;
      },
    }
  );

  // Fetch Mobiles
  const {
    data: mobileData,
    isLoading: mobileLoading,
    isFetching: mobileFetching,
  } = useQuery({
    queryKey: [
      "mobiles",
      currentPage,
      itemPerPage,
      search,
      sort,
      selectedBrands,
      selectedCategories,
      minPrice,
      maxPrice,
    ],
    queryFn: async () => {
      const { data } = await axiosSecure(
        `/mobiles?page=${
          currentPage - 1
        }&size=${itemPerPage}&search=${search}&sort=${sort}&brands=${selectedBrands.join(
          ","
        )}&categories=${selectedCategories.join(
          ","
        )}&minPrice=${minPrice}&maxPrice=${maxPrice}`
      );
      return data;
    },
  });

  const count = mobileData?.totalCount || 0;
  const mobiles = mobileData?.mobile || [];
  const numberOfPages = Math.ceil(count / itemPerPage);
  const pages =
    isNaN(numberOfPages) || numberOfPages < 1
      ? []
      : [...Array(numberOfPages).keys()].map((ele) => ele + 1);

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

  if (authLoading || brandCategoryLoading || mobileLoading)
    return (
      <div className="flex justify-center items-center h-[100vh]">
        <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-[#28231D]"></div>
      </div>
    );

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
                {brandCategoryData?.brands?.map((brand, index) => (
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
                {brandCategoryData?.category?.map((category, index) => (
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
              {mobileFetching && (
                <div className="flex justify-center items-center h-[80vh]">
                  <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-[#28231D]"></div>
                </div>
              )}
              {!mobileFetching && mobiles.length === 0 && (
                <div className="text-center mt-20">
                  <h2 className="text-2xl font-semibold text-gray-500">
                    No Mobiles Found
                  </h2>
                </div>
              )}
              <div className="grid grid-cols-3 gap-10">
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
            {/* Pagination */}
            <div className="flex justify-center mt-10">
              <div className="inline-flex">
                <button
                  className="bg-gray-300 text-gray-800 py-2 px-4 rounded-l hover:bg-gray-400"
                  onClick={() => handlePaginationButton(currentPage - 1)}
                  disabled={currentPage === 1}
                >
                  Prev
                </button>
                {pages.map((page) => (
                  <button
                    key={page}
                    className={`${
                      page === currentPage
                        ? "bg-gray-800 text-white"
                        : "bg-gray-300 text-gray-800"
                    } py-2 px-4 hover:bg-gray-400`}
                    onClick={() => handlePaginationButton(page)}
                  >
                    {page}
                  </button>
                ))}
                <button
                  className="bg-gray-300 text-gray-800 py-2 px-4 rounded-r hover:bg-gray-400"
                  onClick={() => handlePaginationButton(currentPage + 1)}
                  disabled={currentPage === numberOfPages}
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AllProduct;
