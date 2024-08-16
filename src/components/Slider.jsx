import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Pagination, Autoplay, Navigation } from "swiper/modules";

const Slider = () => {
  return (
    <div className="w-full flex justify-end h-[800px]">
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation, Autoplay]}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            className="w-full h-full"
            src="https://i.ibb.co/7rYGr1h/product-overview-hisense-smartphone-kv-h60-5g.jpg"
            alt="Slide 1"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full h-full"
            src="https://i.ibb.co/3vLNWXB/product-overview-hisense-smartphone-kv.jpg"
            alt="Slide 2"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full object-cover h-full"
            src="https://i.ibb.co/V22g2fM/product-overview-hisense-smartphone-kv.jpg"
            alt="Slide 3"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full h-full"
            src="https://i.ibb.co/dQr0wM2/eabdaadef69a169117a2900e77bfde9f.jpg"
            alt="Slide 4"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
