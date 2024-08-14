import { features } from "../data/features";
import TagLine from "./TagLine";

const Features = () => {
  return (
    <section
      id="features"
      className="section container flex justify-center items-center flex-col p-10 "
    >
      <TagLine>Features</TagLine>
      <h2 className="font-extrabold text-3xl mb-4 md:mb-8 text-center">
        Intelligent Form Building
      </h2>
      <div className="mt-10 grid items-center grid-cols-1 gap-3 md:grid-cols-3 max-w-screen-xl ">
        {features.map((item, index) => (
          <div
            className="flex bg-white border-indigo-400/30 rounded-lg shadow-lg p-6 h-full  space-x-4"
            key={index}
          >
            <div className="">
              <h3 className="font-semibold text-xl">{item.title}</h3>
              <p className="text-gray-500">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
