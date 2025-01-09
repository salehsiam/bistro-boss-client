import { useState } from "react";
import Cover from "../../shared-components/Cover";
import coverImg from "./../../assets/assets/shop/banner2.jpg";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useMenu from "../../hooks/UseMenu";
import ItemCard from "../../shared-components/ItemCard";
import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";

const ShopsPage = () => {
  const categories = ["salad", "pizza", "soup", "dessert", "drinks"];
  const { category } = useParams();
  const initialIndex = categories.indexOf(category);
  const [tabIndex, setTabIndex] = useState(initialIndex);
  const [menu] = useMenu();
  const offererd = menu.filter((item) => item.category === "offered");
  const desserts = menu.filter((item) => item.category === "dessert");
  const pizza = menu.filter((item) => item.category === "pizza");
  const salad = menu.filter((item) => item.category === "salad");
  const soup = menu.filter((item) => item.category === "soup");
  const drinks = menu.filter((item) => item.category === "drinks");
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Our Shops</title>
      </Helmet>
      <Cover
        img={coverImg}
        title="Our Shops"
        description="Would you like to try a dish?"
      ></Cover>
      <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList>
          <Tab>Salads</Tab>
          <Tab>Pizza</Tab>
          <Tab>Soups</Tab>
          <Tab>Desserts</Tab>
          <Tab>Drinks</Tab>
        </TabList>
        <TabPanel>
          <div className="grid grid-cols-3 gap-10 mb-16">
            {salad.map((item) => (
              <ItemCard
                key={item._id}
                image={item.image}
                name={item.name}
                recipe={item.recipe}
                price={item.price}
              ></ItemCard>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid grid-cols-3 gap-10 mb-16">
            {pizza.map((item) => (
              <ItemCard
                key={item._id}
                image={item.image}
                name={item.name}
                recipe={item.recipe}
                price={item.price}
              ></ItemCard>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid grid-cols-3 gap-10 mb-16">
            {soup.map((item) => (
              <ItemCard
                key={item._id}
                image={item.image}
                name={item.name}
                recipe={item.recipe}
                price={item.price}
              ></ItemCard>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid grid-cols-3 gap-10 mb-16">
            {desserts.map((item) => (
              <ItemCard
                key={item._id}
                image={item.image}
                name={item.name}
                recipe={item.recipe}
                price={item.price}
              ></ItemCard>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid grid-cols-3 gap-10 mb-16">
            {drinks.map((item) => (
              <ItemCard
                key={item._id}
                image={item.image}
                name={item.name}
                recipe={item.recipe}
                price={item.price}
              ></ItemCard>
            ))}
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ShopsPage;
