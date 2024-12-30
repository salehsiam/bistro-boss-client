import React, { useEffect, useState } from "react";

const PopularMenu = () => {
  const [menu, setMenu] = useState([]);
  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => {
        // const popularItem = data.filter((item) => item.category === "popular");
        // setMenu(popularItem);
        console.log(data);
      });
  }, []);
  return (
    <section>
      <div>
        {/* {menu.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))} */}
      </div>
    </section>
  );
};

export default PopularMenu;
