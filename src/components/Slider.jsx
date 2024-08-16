import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";

const Slider = () => {
  return (
    <div className="w-full flex justify-end h-[700px]">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination, Autoplay]}
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
