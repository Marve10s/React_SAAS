import { features } from "../data/features";

const Features = () => {
  return (
    <div className="section container mx-auto">
      <h2 className="font-extrabold text-3xl mb-8">
        Intelligent Form Building
      </h2>
      <div className="mt-10 grid items-center grid-cols-1 gap-3 md:grid-cols-3 max-w-screen-xl ">
        {features.map((item, index) => (
          <div className="" key={index}>
            <div className="">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
