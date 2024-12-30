import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";
import category1 from "./../../assets/assets/home/slide1.jpg";
import category2 from "./../../assets/assets/home/slide2.jpg";
import category3 from "./../../assets/assets/home/slide3.jpg";
import category4 from "./../../assets/assets/home/slide4.jpg";
import category5 from "./../../assets/assets/home/slide5.jpg";
import SectionTitle from "../../shared-components/SectionTitle";

const Category = () => {
  return (
    <div className="mb-12">
      <SectionTitle
        heading={"Order Online"}
        subHeading={"---From 11:00am to 10:00pm---"}
      ></SectionTitle>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={category1} alt="" />
          <h3 className="text-4xl text-center -mt-20 uppercase text-white shadow-black">
            salads
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={category2} alt="" />
          <h3 className="text-4xl text-center -mt-20 uppercase text-white shadow-black">
            pizza
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={category3} alt="" />
          <h3 className="text-4xl text-center -mt-20 uppercase text-white shadow-black">
            soups
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={category4} alt="" />
          <h3 className="text-4xl text-center -mt-20 uppercase text-white shadow-black">
            deserts
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={category5} alt="" />
          <h3 className="text-4xl text-center -mt-20 pb-10 uppercase text-white shadow-black">
            salads
          </h3>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Category;
