import SectionTitle from "../../shared-components/SectionTitle";
import featuredPhoto from "./../../assets/assets/home/featured.jpg";

const Featured = () => {
  return (
    <div
      className="my-16 pt-12 relative bg-fixed bg-cover text-white"
      style={{ backgroundImage: `url('${featuredPhoto}')` }}
    >
      <div className="bg-black absolute inset-0 bg-opacity-40"></div>
      <div className="relative">
        <SectionTitle
          heading="From Our Menu"
          subHeading="---Check it out---"
        ></SectionTitle>
      </div>
      <div className="flex relative justify-center items-center px-36 pb-20 gap-10">
        <div>
          <img src={featuredPhoto} alt="" />
        </div>
        <div>
          <p>March 20, 2023</p>
          <h3 className="text-xl">Where can I get some?</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
            corporis enim itaque, et incidunt nostrum? Expedita accusamus
            voluptatum debitis dignissimos hic neque veritatis, quidem esse
            doloribus quasi minima quam distinctio magnam dolorem, incidunt amet
            officia. Ad laudantium nostrum neque dolore!
          </p>
          <button className="btn outline-none border-0 hover:bg-black text-white mt-4 uppercase border-b-4 border-white bg-transparent">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
