import { pricing } from "../data/pricing";
import PlanCard from "./PlanCard";
import TagLine from "./TagLine";

const Pricing = () => {
  return (
    <section
      id="pricibg"
      className="flex text-center p-10 items-center justify-center flex-col"
    >
      <TagLine>Pricing</TagLine>
      <h2 className="font-extrabold text-3xl mb-8 pt-3">
        Flexible Pricing to Fit Your Needs
      </h2>
      <div className="grid mt-10 items-center grid-cols-1 gap-3 md:grid-cols-3 max-w-screen-xl ">
        {pricing.map((item, index) => (
          <div className="pricing-card" key={index}>
            <PlanCard {...item} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Pricing;
