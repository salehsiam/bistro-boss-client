import Banner from "./Banner";
import CallUs from "./CallUs";
import Category from "./Category";
import Recommend from "./cheafRecomandend/Recommend";
import Description from "./Description";

import PopularMenu from "./PopularMenu";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Category></Category>
      <Description></Description>
      <PopularMenu></PopularMenu>
      <CallUs></CallUs>
      <Recommend></Recommend>
    </div>
  );
};

export default Home;
