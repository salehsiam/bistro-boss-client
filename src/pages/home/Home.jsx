import Banner from "./Banner";
import Category from "./Category";
import Description from "./Description";
import Menu from "./Menu";
import PopularMenu from "./PopularMenu";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Category></Category>
      <PopularMenu></PopularMenu>
      <Description></Description>
      <Menu></Menu>
    </div>
  );
};

export default Home;
