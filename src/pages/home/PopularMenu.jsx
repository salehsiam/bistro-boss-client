import React, { useEffect, useState } from "react";
import MenuItem from "./MenuItem";
import SectionTitle from "../../shared-components/SectionTitle";

const PopularMenu = () => {
  const [menu, setMenu] = useState([]);
  useEffect(() => {
    fetch("/menu.json")
      .then((res) => res.json())
      .then((data) => {
        const popularItem = data.filter((item) => item.category === "popular");
        setMenu(popularItem);
      });
  }, []);
  return (
    <section className="mb-16">
      <SectionTitle
        subHeading={"---Check it out---"}
        heading={"FROM OUR MENU"}
      ></SectionTitle>
      <div className="grid md:grid-cols-2 gap-10">
        {menu.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      <div className="flex justify-center mt-6">
        <button className="btn btn-outline bg-transparent border-0 border-b-4 border-b-black outline-none uppercase">
          view full menu
        </button>
      </div>
    </section>
  );
};

export default PopularMenu;
