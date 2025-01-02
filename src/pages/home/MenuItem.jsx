const MenuItem = ({ item }) => {
  console.log(item);
  const { image, name, price, recipe } = item;
  return (
    <div className="flex space-x-2">
      <img
        className="w-[90px] rounded-tr-full rounded-b-full"
        src={image}
        alt=""
      />
      <div>
        <h3 className="uppercase text-xl">{name}------------</h3>
        <p>{recipe}</p>
      </div>
      <p className="text-yellow-600">${price}</p>
    </div>
  );
};

export default MenuItem;
