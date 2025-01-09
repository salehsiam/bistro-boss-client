const ItemCard = ({ image, name, recipe, price }) => {
  return (
    <div className="card relative rounded-none bg-[#F3F3F3]">
      <figure>
        <img className="w-full" src={image} alt={name} />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        {price && (
          <p className="absolute top-0 right-0 bg-black text-white px-3 py-1 mt-2 mr-2">
            ${price}
          </p>
        )}
        <div className="card-actions">
          <button className="btn text-yellow-600 border-0 border-b-4 border-yellow-600 outline-none uppercase">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
