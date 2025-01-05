import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import SectionTitle from "../../shared-components/SectionTitle";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { FaQuoteLeft } from "react-icons/fa";

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);
  useEffect(() => {
    fetch("reviews.json")
      .then((res) => res.json())
      .then((data) => {
        setTestimonials(data);
      });
  }, []);

  return (
    <div className="w-2/3 mx-auto">
      <SectionTitle
        heading="Testimonials"
        subHeading="---What Our Clients Say---"
      ></SectionTitle>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {testimonials.map((testimonial) => (
          <SwiperSlide key={testimonial._id}>
            <div className="p-16 flex flex-col items-center text-center">
              <Rating
                style={{ maxWidth: 180 }}
                value={testimonial.rating}
                readOnly
              />
              <FaQuoteLeft className="text-6xl my-6" />
              <p>{testimonial.details}</p>
              <h3 className="text-3xl mt-2 text-[#CD9003]">
                {testimonial.name}
              </h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonials;
