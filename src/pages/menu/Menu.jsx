import { Helmet } from "react-helmet-async";
import Cover from "../../shared-components/Cover";
import menuCover from "./../../assets/assets/menu/banner3.jpg";
import useMenu from "../../hooks/UseMenu";
import SectionTitle from "../../shared-components/SectionTitle";
import MenuCategory from "./MenuCategory";
import dessertsCover from "./../../assets/assets/menu/dessert-bg.jpeg";
import pizzaCover from "./../../assets/assets/menu/pizza-bg.jpg";
import saladCover from "./../../assets/assets/menu/salad-bg.jpg";
import soupCover from "./../../assets/assets/menu/soup-bg.jpg";

const Menu = () => {
  const [menu] = useMenu();
  const offererd = menu.filter((item) => item.category === "offered");
  const desserts = menu.filter((item) => item.category === "dessert");
  const pizza = menu.filter((item) => item.category === "pizza");
  const salad = menu.filter((item) => item.category === "salad");
  const soup = menu.filter((item) => item.category === "soup");
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Menu</title>
      </Helmet>
      <Cover
        img={menuCover}
        title="Our Menu"
        description="Would you like to try a dish?"
      ></Cover>
      <SectionTitle
        heading="Today's Offers"
        subHeading="---Don't miss---"
      ></SectionTitle>
      {/* Offer item */}
      <MenuCategory items={offererd}></MenuCategory>
      {/* dessert items */}
      <MenuCategory
        items={desserts}
        coverImg={dessertsCover}
        title="dessert"
        description="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
      ></MenuCategory>
      {/* pizza items */}
      <MenuCategory
        coverImg={pizzaCover}
        title="pizza"
        items={pizza}
        description="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
      ></MenuCategory>
      {/* salad items */}
      <MenuCategory
        coverImg={saladCover}
        title="salad"
        items={salad}
        description="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
      ></MenuCategory>
      {/* soup items */}
      <MenuCategory
        coverImg={soupCover}
        title="soup"
        items={soup}
        description="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
      ></MenuCategory>
    </div>
  );
};

export default Menu;
