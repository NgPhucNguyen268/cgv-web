import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import xuanThien from "../../assets/xt.png";

function Slide() {
  return (
    <div className="flex justify-center  ">
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
          <img src={xuanThien} alt="img" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://th.bing.com/th/id/OIP.DYVmLBc8R5OUWiqHnEV51gHaEK?rs=1&pid=ImgDetMain" />
        </SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Slide;
