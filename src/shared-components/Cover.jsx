const Cover = ({ img, title, description }) => {
  return (
    <div
      className="lg:h-[650px] bg-cover mb-12 flex justify-center items-center"
      style={{
        backgroundImage: `url('${img}')`,
      }}
    >
      <div className=" text-center bg-black bg-opacity-50 py-32 w-3/4">
        <div>
          <h2 className="text-6xl mb-4 text-white  ">{title}</h2>
          <p className="text-white">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Cover;
