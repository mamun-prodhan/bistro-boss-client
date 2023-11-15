import { Link } from "react-router-dom";
import Cover from "../../Shared/Cover/Cover";
import MenuItem from "../../Shared/MenuItem/MenuItem";

const MenuCategory = ({ items, title, img, description }) => {
  return (
    <div>
      {title && (
        <Cover img={img} title={title} description={description}></Cover>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-16">
        {items.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      <div className="text-center">
        <Link to={`/order/${title}`}>
          <button className="mb-10 btn btn-outline border-0 border-b-4 ">
            Order Now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default MenuCategory;
