import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featuredImg from "../../../assets/home/featured.jpg";
import "./Featured.css";

const Featured = () => {
  return (
    <section className="featured-item text-white bg-fixed py-16 my-16">
      <SectionTitle
        subHeading={"Check it out"}
        heading={"Featured Items"}
      ></SectionTitle>
      <div className="bg-slate-700 bg-opacity-30">
        <div className=" md:flex gap-8 md:w-[70%] mx-auto justify-center items-center py-16">
          <div>
            <img src={featuredImg} alt="" />
          </div>
          <div>
            <p>NOV 20, 2023</p>
            <h3 className="uppercase">Where can i get some ?</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
              voluptate facere, deserunt dolores maiores quod nobis quas quasi.
              Eaque repellat recusandae ad laudantium tempore consequatur
              consequuntur omnis ullam maxime tenetur.
            </p>
            <button className="mt-6 btn btn-outline border-0 border-b-4 border-white text-white">
              Order Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Featured;
