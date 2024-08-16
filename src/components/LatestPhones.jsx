function LatestPhones() {
  const mobiles = [
    {
      id: 1,
      name: "Samsung Galaxy S23",
      image:
        "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-s23-ultra-5g.jpg",
      brand: "Samsung",
      price: "999",
      description:
        "Flagship phone with an amazing display and top-notch camera quality.",
    },
    {
      id: 2,
      name: "Apple iPhone 14 Pro",
      image: "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-14-pro.jpg",
      brand: "Apple",
      price: "1199",
      description:
        "The latest iPhone with advanced camera features and A16 Bionic chip.",
    },
    {
      id: 3,
      name: "Google Pixel 9 Pro",
      image: "https://fdn2.gsmarena.com/vv/bigpic/google-pixel-9-pro-.jpg",
      brand: "Google",
      price: "899",
      description:
        "Known for its excellent camera and smooth Android experience.",
    },
    {
      id: 4,
      name: "OnePlus 12",
      image: "https://fdn2.gsmarena.com/vv/bigpic/oneplus-12.jpg",
      brand: "OnePlus",
      price: "699",
      description:
        "A high-performance phone with fast charging and fluid display.",
    },
  ];

  return (
    <>
      <div className="container mx-auto mt-8 lg:mt-10">
        <p className="text-2xl lg:text-4xl font-bold text-center">
          Latest Phones
        </p>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mt-4 lg:mt-8 px-3 lg:px-0">
          {mobiles.map((mobile) => (
            <div
              key={mobile.id}
              className="border p-4 flex flex-col lg:flex-row items-center gap-5 rounded-md shadow-xl"
            >
              <div className="w-full">
                <img src={mobile.image} alt={mobile.name} />
              </div>
              <div>
                <h2 className="lg:text-xl font-semibold">{mobile.name}</h2>
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
      ;
    </>
  );
}

export default LatestPhones;
