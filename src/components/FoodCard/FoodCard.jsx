const FoodCard = ({ item }) => {
  const { name, image, price, recipe } = item;
  return (
    <div className="card bg-base-100 shadow-xl">
      <figure>
        <img src={image} alt="Shoes" />
      </figure>
      <p className="absolute right-5 top-5 me-5 bg-slate-900 text-white px-5 py-3">
        ${price}
      </p>
      <div className="card-body flex flex-col items-center">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions justify-center">
          <button className=" btn bg-slate-200 border-orange-500 btn-outline border-0 border-b-4 ">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
