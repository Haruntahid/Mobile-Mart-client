function MediaPartner() {
  const images = [
    "https://www.mobiledokan.co/wp-content/uploads/2018/10/Apple-120x120.jpg",
    "https://www.mobiledokan.co/wp-content/uploads/2018/10/BlackBerry-120x120.jpg",
    "https://www.mobiledokan.co/wp-content/uploads/2018/10/Google-120x120.jpg",
    "https://www.mobiledokan.co/wp-content/uploads/2018/11/OnePlus-120x120.jpg",
    "https://www.mobiledokan.co/wp-content/uploads/2018/10/Samsung-120x120.jpg",
    "https://www.mobiledokan.co/wp-content/uploads/2018/10/Sony-120x120.jpg",
    "https://www.mobiledokan.co/wp-content/uploads/2018/10/Oppo-120x120.jpg",
    "https://www.mobiledokan.co/wp-content/uploads/2018/10/Vivo-120x120.jpg",
    "https://www.mobiledokan.co/wp-content/uploads/2018/10/Motorola-120x120.jpg",
    "https://www.mobiledokan.co/wp-content/uploads/2018/10/Microsoft-120x120.jpg",
    "https://www.mobiledokan.co/wp-content/uploads/2021/08/Xiaomi-120x120.png",
    "https://www.mobiledokan.co/wp-content/uploads/2018/10/Symphony-120x120.jpg",
  ];

  return (
    <>
      <p className="text-2xl lg:text-4xl font-bold text-center mt-6 lg:mt-10 mb-4 lg:mb-8">
        Phone Partners
      </p>
      <div className="relative overflow-hidden h-32">
        <div className="marquee">
          <div className="marquee-inner">
            {images.map((src, index) => (
              <img
                key={index}
                src={src}
                alt={`Partner ${index + 1}`}
                className="w-32 h-32 mx-4"
              />
            ))}
            {/* Duplicate the images to ensure seamless scrolling */}
            {images.map((src, index) => (
              <img
                key={index + images.length}
                src={src}
                alt={`Partner ${index + images.length + 1}`}
                className="w-32 h-32 mx-4"
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default MediaPartner;
