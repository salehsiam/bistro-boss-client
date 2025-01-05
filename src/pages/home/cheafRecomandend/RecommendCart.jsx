const RecommendCart = ({ recommend }) => {
  const { image, name, recipe } = recommend;
  return (
    <div className="card rounded-none bg-[#F3F3F3]">
      <figure>
        <img className="w-full" src={image} alt={name} />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions">
          <button className="btn text-yellow-600 border-0 border-b-4 border-yellow-600 outline-none uppercase">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default RecommendCart;
