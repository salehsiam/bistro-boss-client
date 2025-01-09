import { Link } from "react-router-dom";
import MenuCover from "../../shared-components/MenuCover";
import MenuItem from "../home/MenuItem";

const MenuCategory = ({ items, coverImg, title, description }) => {
  return (
    <div className="mb-8">
      {coverImg && (
        <MenuCover
          coverImg={coverImg}
          title={title}
          description={description}
        ></MenuCover>
      )}
      <div className="grid md:grid-cols-2 gap-10 mb-14">
        {items.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      {title && (
        <div className="flex justify-center mt-6">
          <Link
            to={`/our-shops/${title}`}
            className="btn btn-outline bg-transparent border-0 border-b-4 border-b-black outline-none uppercase"
          >
            ORDER YOUR FAVOURITE FOOD
          </Link>
        </div>
      )}
    </div>
  );
};

export default MenuCategory;
