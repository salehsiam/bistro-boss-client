import service from "./../../assets/assets/home/chef-service.jpg";

const Description = () => {
  return (
    <div
      className="py-24 object-center mb-12"
      style={{
        backgroundImage: `url('${service}')`,
      }}
    >
      <div className="md:w-4/5 mx-auto text-center space-y-2 bg-white px-32  py-16">
        <h2 className="text-4xl  ">Bistro Boss</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Necessitatibus, libero accusamus laborum deserunt ratione dolor
          officiis praesentium! Deserunt magni aperiam dolor eius dolore at,
          nihil iusto ducimus incidunt quibusdam nemo.
        </p>
      </div>
    </div>
  );
};

export default Description;
