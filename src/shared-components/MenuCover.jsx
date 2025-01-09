const MenuCover = ({ coverImg, title, description }) => {
  console.log(coverImg);
  return (
    <div
      className="py-36 bg-cover mb-12"
      style={{
        backgroundImage: `url('${coverImg}')`,
      }}
    >
      <div className="md:w-4/5 mx-auto text-center space-y-2 bg-black bg-opacity-50 px-32 py-20">
        <h2 className="text-4xl text-white ">{title}</h2>
        <p className="text-white">{description}</p>
      </div>
    </div>
  );
};

export default MenuCover;
