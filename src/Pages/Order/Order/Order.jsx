import Cover from "../../Shared/Cover/Cover";
import orderCover from "../../../assets/shop/order.jpg";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { useState } from "react";
import useMenu from "../../../hooks/useMenu";

const Order = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const [menu] = useMenu();
  const desserts = menu?.filter((item) => item.category === "dessert");
  const soups = menu?.filter((item) => item.category === "soup");
  const salads = menu?.filter((item) => item.category === "salad");
  const pizzas = menu?.filter((item) => item.category === "pizza");
  const offered = menu?.filter((item) => item.category === "offered");
  return (
    <div>
      <Cover
        img={orderCover}
        title={"Order Food"}
        description={"Would you like to try a dish?"}
      ></Cover>
      {/* tabs */}
      <Tabs defaultIndex={tabIndex} onSelect={(index) => console.log(index)}>
        <TabList>
          <Tab>Salad</Tab>
          <Tab>Pizza</Tab>
          <Tab>Soup</Tab>
          <Tab>Dessert</Tab>
          <Tab>Drinks</Tab>
        </TabList>
        <TabPanel></TabPanel>
        <TabPanel></TabPanel>
        <TabPanel></TabPanel>
        <TabPanel></TabPanel>
        <TabPanel></TabPanel>
      </Tabs>
    </div>
  );
};

export default Order;
