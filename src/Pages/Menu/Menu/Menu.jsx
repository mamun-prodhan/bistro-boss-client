import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import menuImg from "../../../assets/menu/banner3.jpg";
import dessertImg from "../../../assets/menu/dessert-bg.jpeg";
import pizzaImg from "../../../assets/menu/pizza-bg.jpg";
import saladImg from "../../../assets/menu/salad-bg.jpg";
import soupImg from "../../../assets/menu/soup-bg.jpg";
import useMenu from "../../../hooks/useMenu";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuCategory from "../MenuCategory/MenuCategory";

const Menu = () => {
  const [menu] = useMenu();
  const desserts = menu?.filter((item) => item.category === "dessert");
  const soups = menu?.filter((item) => item.category === "soup");
  const salads = menu?.filter((item) => item.category === "salad");
  const pizzas = menu?.filter((item) => item.category === "pizza");
  const offered = menu?.filter((item) => item.category === "offered");
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Menu</title>
      </Helmet>
      <Cover
        img={menuImg}
        title={"our menu"}
        description={"Would you like to try a dish?"}
      ></Cover>
      {/* main cover */}
      <SectionTitle
        subHeading={"Don't miss"}
        heading={"Today's Offer"}
      ></SectionTitle>
      {/* offered menu items */}
      <MenuCategory items={offered}></MenuCategory>
      {/* dessert menu items */}
      <MenuCategory
        items={desserts}
        title={"dessert"}
        description={
          "Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }
        img={dessertImg}
      ></MenuCategory>
      {/* pizza menu items */}
      <MenuCategory
        items={pizzas}
        title={"pizza"}
        description={
          "Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }
        img={pizzaImg}
      ></MenuCategory>
      {/* soups menu items */}
      <MenuCategory
        items={salads}
        title={"salad"}
        description={
          "Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }
        img={saladImg}
      ></MenuCategory>
      {/* salads menu items */}
      <MenuCategory
        items={soups}
        title={"soup"}
        description={
          "Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }
        img={soupImg}
      ></MenuCategory>
    </div>
  );
};

export default Menu;
