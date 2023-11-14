import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";

import slide1 from "../../../assets/home/slide1.jpg";
import slide2 from "../../../assets/home/slide2.jpg";
import slide3 from "../../../assets/home/slide3.jpg";
import slide4 from "../../../assets/home/slide4.jpg";
import slide5 from "../../../assets/home/slide5.jpg";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const Category = () => {
  return (
    <section>
      <SectionTitle
        subHeading={"From 11.00am to 10.00pm"}
        heading={"Order Online"}
      ></SectionTitle>
      <Swiper
        slidesPerView={4}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        spaceBetween={10}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Autoplay]}
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
    </section>
  );
};

export default Category;
