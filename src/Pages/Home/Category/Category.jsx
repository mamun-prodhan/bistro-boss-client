import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

import slide1 from "../../../assets/home/slide1.jpg";
import slide2 from "../../../assets/home/slide2.jpg";
import slide3 from "../../../assets/home/slide3.jpg";
import slide4 from "../../../assets/home/slide4.jpg";
import slide5 from "../../../assets/home/slide5.jpg";

const Category = () => {
  return (
    <Swiper
      slidesPerView={4}
      spaceBetween={10}
      centeredSlides={true}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="mySwiper mb-16"
    >
      <SwiperSlide>
        <img className="mx-auto" src={slide1} alt="" />
        <h2 className="text-4xl uppercase text-center -mt-16 pb-16 text-white">
          Salad
        </h2>
      </SwiperSlide>
      <SwiperSlide>
        <img className="mx-auto" src={slide2} alt="" />
        <h2 className="text-4xl uppercase text-center -mt-16 pb-16 text-white ">
          soup
        </h2>
      </SwiperSlide>
      <SwiperSlide>
        <img className="mx-auto" src={slide3} alt="" />
        <h2 className="text-4xl uppercase text-center -mt-16 pb-16 text-white">
          pizzas
        </h2>
      </SwiperSlide>
      <SwiperSlide>
        <img className="mx-auto" src={slide4} alt="" />
        <h2 className="text-4xl uppercase text-center -mt-16 pb-16 text-white">
          dessert
        </h2>
      </SwiperSlide>
      <SwiperSlide>
        <img className="mx-auto" src={slide5} alt="" />
        <h2 className="text-4xl uppercase text-center -mt-16 pb-16 text-white">
          Salad
        </h2>
      </SwiperSlide>
    </Swiper>
  );
};

export default Category;
