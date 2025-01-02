import { useEffect, useState } from "react";
import SectionTitle from "../../../shared-components/SectionTitle";
import { data } from "autoprefixer";
import RecommendCart from "./RecommendCart";

const Recommend = () => {
  const [recommendData, setRecommendData] = useState([]);
  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) => {
        const recommendItem = data.filter(
          (item) => item.category === "offered"
        );
        setRecommendData(recommendItem);
      });
  }, []);
  return (
    <div className="mb-16">
      <SectionTitle
        heading="Chef Recommends"
        subHeading="---Should Try---"
      ></SectionTitle>
      <div className="grid grid-cols-3 gap-10">
        {recommendData.map((recommend) => (
          <RecommendCart
            key={recommend._id}
            recommend={recommend}
          ></RecommendCart>
        ))}
      </div>
    </div>
  );
};

export default Recommend;
