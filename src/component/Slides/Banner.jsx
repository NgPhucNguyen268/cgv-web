import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
import hinh1 from "../../assets/hinh1.png";
import hinh2 from "../../assets/hinh2.jpg";
import hinh3 from "../../assets/hinh3.png";
import hinh4 from "../../assets/hinh4.jpg";
import hinh5 from "../../assets/hinh5.png";
import hinh6 from "../../assets/hinh6.png";
import hinh7 from "../../assets/hinh7.jpg";

const Banner = () => {
  return (
    <div className="w-full max-w-7xl mx-auto px-4">
      <Swiper
        navigation={true}
        modules={[Navigation, Autoplay]}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop={true}
        slidesPerView={1}
        spaceBetween={0}
        className="rounded-lg overflow-hidden shadow-lg"
      >
        {[hinh1, hinh2, hinh3, hinh4, hinh5, hinh6, hinh7].map(
          (hinh, index) => (
            <SwiperSlide key={index}>
              <img
                src={hinh}
                alt={`slide-${index}`}
                className="object-cover w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px]"
              />
            </SwiperSlide>
          )
        )}
      </Swiper>
    </div>
  );
};

export default Banner;
