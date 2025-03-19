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
    <Swiper
      navigation={true}
      modules={[Navigation, Autoplay]}
      className="mySwiper"
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      loop={true}
      slidesPerView={1}
      spaceBetween={0}
      style={{ height: "500px" }}
    >
      {[hinh1, hinh2, hinh3, hinh4, hinh5, hinh6, hinh7].map((hinh, index) => (
        <SwiperSlide key={index}>
          <img
            src={hinh}
            alt={`slide-${index}`}
            className="object-cover w-full h-[500px]"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Banner;
