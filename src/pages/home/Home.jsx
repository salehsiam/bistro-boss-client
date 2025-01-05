import Banner from "./Banner";
import CallUs from "./CallUs";
import Category from "./Category";
import Recommend from "./cheafRecomandend/Recommend";
import Description from "./Description";
import Featured from "./Featured";

import PopularMenu from "./PopularMenu";
import Testimonials from "./Testimonials";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Category></Category>
      <Description></Description>
      <PopularMenu></PopularMenu>
      <CallUs></CallUs>
      <Recommend></Recommend>
      <Featured></Featured>
      <Testimonials></Testimonials>
    </div>
  );
};

export default Home;
