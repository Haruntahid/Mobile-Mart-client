import { useEffect, useState } from "react";
import useAxios from "../hooks/useAxios";
import { FaSearch, FaTimes } from "react-icons/fa";

function AllProduct() {
  const axiosSecure = useAxios();

  const [count, setCount] = useState(0);
  const itemPerPage = 6;
  const [currentPage, setCurrentPage] = useState(1);
  const [mobiles, setMobiles] = useState([]);
  const [search, setSearch] = useState("");
  const [searchText, setSearchText] = useState("");

  const numberOfPages = Math.ceil(count / itemPerPage);

  const pages =
    isNaN(numberOfPages) || numberOfPages < 1
      ? []
      : [...Array(numberOfPages).keys()].map((ele) => ele + 1);

  useEffect(() => {
    const getData = async () => {
      const { data } = await axiosSecure(
        `/mobiles?page=${currentPage - 1}&size=${itemPerPage}&search=${search}`
      );
      setMobiles(data.mobile);
      setCount(data.totalCount);
    };
    getData();
  }, [currentPage, itemPerPage, search, axiosSecure]);

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

  return (
    <>
      <div className="container mx-auto">
        {/* search */}
        <div className="grid grid-cols-12 gap-4 mt-10">
          <div className="col-span-3 bg-[#28231D]">
            <form onSubmit={handleSearch}>
              <div className="flex p-1 justify-center overflow-hidded rounded-lg my-8 relative">
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
                  className="btn rounded-2xl bg-[#28231D]  hover:bg-inherit border rounded-l-none text-white hover:bg-txt-color"
                  type="submit"
                >
                  <FaSearch />
                </button>
              </div>
            </form>
          </div>

          {/* mobile boxes */}
          <div className="col-span-9">
            <div className="grid grid-cols-3 gap-4">
              {mobiles.map((mobile) => (
                <div key={mobile.id} className="border p-4 rounded-md">
                  <img src={mobile.image} alt={mobile.name} />
                  <h2>{mobile.name}</h2>
                  <p>Brand: {mobile.brand}</p>
                  <p>Price: ${mobile.price}</p>
                  {/* Other mobile details */}
                </div>
              ))}
            </div>

            {/* Pagination Controls */}
            <div className="flex justify-center items-center mt-20">
              <button
                disabled={currentPage === 1}
                className="btn bg-blue-500 text-white hover:bg-blue-700"
                onClick={() => handlePaginationButton(currentPage - 1)}
              >
                Prev
              </button>
              {pages.map((page) => (
                <button
                  onClick={() => setCurrentPage(page)}
                  className={
                    currentPage === page
                      ? "btn bg-green-500 text-white mx-4"
                      : "btn bg-gray-300 text-black mx-4"
                  }
                  key={page}
                >
                  {page}
                </button>
              ))}
              <button
                className="btn bg-blue-500 text-white hover:bg-blue-700"
                disabled={currentPage === numberOfPages}
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

// import { useEffect, useState } from "react";
// import useAxios from "../hooks/useAxios";

// function AllProduct() {
//   const axiosSecure = useAxios();

//   const [count, setCount] = useState(0);
//   const itemPerPage = 6;
//   const [currentPage, setCurrentPage] = useState(1);
//   const [mobiles, setMobiles] = useState([]);
//   const numberOfPages = Math.ceil(count / itemPerPage);
//   const pages = [...Array(numberOfPages).keys()].map((ele) => ele + 1);
//   const [search, setSearch] = useState("");
//   const [searchText, setSearchText] = useState("");

//   useEffect(() => {
//     const getData = async () => {
//       const { data } = await axiosSecure(
//         `/mobiles?page=${currentPage - 1}&size=${itemPerPage}&search=${search}`
//       );
//       console.log(data);
//       setMobiles(data.mobile);
//       setCount(data.totalCount);
//     };
//     getData();
//   }, [currentPage, itemPerPage, search, axiosSecure]);

//   const handlePaginationButton = (value) => {
//     console.log(value);
//     setCurrentPage(value);
//   };

//   const handleSearch = (e) => {
//     e.preventDefault();
//     const text = e.target.search.value;
//     setSearch(text);
//   };

//   return (
//     <>
//       <div className="container mx-auto">
//         {/* search */}
//         <div>
//           <form onSubmit={handleSearch}>
//             <div className="flex p-1 justify-center overflow-hidded rounded-lg my-8">
//               <input
//                 type="text"
//                 placeholder="Search Here..."
//                 onChange={(e) => setSearchText(e.target.value)}
//                 value={searchText}
//                 name="search"
//                 className="border-2 border-r-0 focus:outline-none w-1/5 px-3 rounded-2xl rounded-r-none"
//               />
//               <input
//                 className="btn rounded-2xl bg-btn-color hover:bg-inherit border rounded-l-none border-btn-color text-white hover:bg-txt-color"
//                 type="submit"
//                 value="Search"
//               />
//             </div>
//           </form>
//         </div>

//         <div className="grid grid-cols-3 gap-4">
//           {mobiles.map((mobile) => (
//             <div key={mobile.id} className="border p-4">
//               <h2>{mobile.name}</h2>
//               <p>Brand: {mobile.brand}</p>
//               <p>Price: ${mobile.price}</p>
//               {/* Other mobile details */}
//             </div>
//           ))}
//         </div>

//         {/* Pagination Controls */}
//         {/* page */}
//         <div className="flex justify-center items-center mt-20">
//           <button
//             disabled={currentPage === 1}
//             className="btn bg-btn-color text-white"
//             onClick={() => handlePaginationButton(currentPage - 1)}
//           >
//             Prev
//           </button>
//           {pages.map((page) => (
//             <button
//               onClick={() => setCurrentPage(page)}
//               className={currentPage === page ? "btn btn-success mx-4" : "mx-4"}
//               key={page}
//             >
//               {page}
//             </button>
//           ))}
//           <button
//             className="btn bg-btn-color text-white"
//             disabled={currentPage === numberOfPages}
//             onClick={() => handlePaginationButton(currentPage + 1)}
//           >
//             Next
//           </button>
//         </div>
//       </div>
//     </>
//   );
// }

// export default AllProduct;

// import { useState, useEffect } from "react";
// import useAxios from "../hooks/useAxios";

// function AllProduct() {
//   const axiosSecure = useAxios();
//   const [products, setProducts] = useState([]);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [filters, setFilters] = useState({
//     brand: "",
//     category: "",
//     minPrice: "",
//     maxPrice: "",
//   });
//   const [sort, setSort] = useState("");

//   useEffect(() => {
//     fetchProducts();
//   }, [searchTerm, filters, sort]);

//   const fetchProducts = () => {
//     axiosSecure.get("/mobiles").then((res) => {
//       let data = res.data;

//       // Filtering by search term
//       if (searchTerm) {
//         data = data.filter((product) =>
//           product.name.toLowerCase().includes(searchTerm.toLowerCase())
//         );
//       }

//       // Filtering by brand, category, and price range
//       if (filters.brand) {
//         data = data.filter((product) =>
//           product.brand.toLowerCase().includes(filters.brand.toLowerCase())
//         );
//       }

//       if (filters.category) {
//         data = data.filter((product) =>
//           product.category
//             .toLowerCase()
//             .includes(filters.category.toLowerCase())
//         );
//       }

//       if (filters.minPrice) {
//         data = data.filter(
//           (product) => product.price >= parseFloat(filters.minPrice)
//         );
//       }

//       if (filters.maxPrice) {
//         data = data.filter(
//           (product) => product.price <= parseFloat(filters.maxPrice)
//         );
//       }

//       // Sorting by price or date added
//       if (sort === "priceLowToHigh") {
//         data = data.sort((a, b) => a.price - b.price);
//       } else if (sort === "priceHighToLow") {
//         data = data.sort((a, b) => b.price - a.price);
//       } else if (sort === "newestFirst") {
//         data = data.sort(
//           (a, b) => new Date(b.dateAdded) - new Date(a.dateAdded)
//         );
//       }

//       setProducts(data);
//     });
//   };

//   return (
//     <div>
//       <h1>All Products</h1>
//       <div>
//         {/* Search Bar */}
//         <input
//           type="text"
//           placeholder="Search by product name"
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//         />

//         {/* Filters */}
//         <div>
//           <select
//             value={filters.brand}
//             onChange={(e) => setFilters({ ...filters, brand: e.target.value })}
//           >
//             <option value="">All Brands</option>
//             <option value="Apple">Apple</option>
//             <option value="Samsung">Samsung</option>
//             <option value="Xiaomi">Xiaomi</option>
//             {/* Add more brands as options */}
//           </select>

//           <select
//             value={filters.category}
//             onChange={(e) =>
//               setFilters({ ...filters, category: e.target.value })
//             }
//           >
//             <option value="">All Categories</option>
//             <option value="Smartphone">Smartphone</option>
//             {/* Add more categories as options */}
//           </select>

//           <input
//             type="number"
//             placeholder="Min Price"
//             value={filters.minPrice}
//             onChange={(e) =>
//               setFilters({ ...filters, minPrice: e.target.value })
//             }
//           />
//           <input
//             type="number"
//             placeholder="Max Price"
//             value={filters.maxPrice}
//             onChange={(e) =>
//               setFilters({ ...filters, maxPrice: e.target.value })
//             }
//           />
//         </div>

//         {/* Sorting */}
//         <select value={sort} onChange={(e) => setSort(e.target.value)}>
//           <option value="">Sort By</option>
//           <option value="priceLowToHigh">Price: Low to High</option>
//           <option value="priceHighToLow">Price: High to Low</option>
//           <option value="newestFirst">Date Added: Newest First</option>
//         </select>
//       </div>

//       {/* Display Products */}
//       <div>
//         {products.map((product) => (
//           <div key={product.id}>
//             <img src={product.image} alt={product.name} />
//             <h2>{product.name}</h2>
//             <p>{product.description}</p>
//             <p>${product.price}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default AllProduct;
