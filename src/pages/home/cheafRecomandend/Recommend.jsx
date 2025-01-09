import SectionTitle from "../../../shared-components/SectionTitle";
import useMenu from "../../../hooks/UseMenu";
import ItemCard from "../../../shared-components/ItemCard";

const Recommend = () => {
  // const [recommendData, setRecommendData] = useState([]);
  const [menu] = useMenu();
  const recommendItem = menu.filter((item) => item.category === "offered");

  return (
    <div className="mb-16">
      <SectionTitle
        heading="Chef Recommends"
        subHeading="---Should Try---"
      ></SectionTitle>
      <div className="grid grid-cols-3 gap-10">
        {recommendItem.map((recommend) => (
          <ItemCard
            image={recommend.image}
            name={recommend.name}
            recipe={recommend.recipe}
            key={recommend._id}
          ></ItemCard>
        ))}
      </div>
    </div>
  );
};

export default Recommend;
