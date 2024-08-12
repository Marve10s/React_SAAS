import MileStone from "./MileStone";

const roadmap = [
  {
    id: 1,
    name: "Milestone 1",
    description: "Kick-off meeting and introduction to the team",
  },
  {
    id: 2,
    name: "Milestone 2",
    description: "Kick-off meeting and introduction to the team",
  },
  {
    id: 3,
    name: "Milestone 3",
    description: "Kick-off meeting and introduction to the team",
  },
  {
    id: 4,
    name: "Milestone 4",
    description: "Kick-off meeting and introduction to the team",
  },
  {
    id: 5,
    name: "Milestone 5",
    description: "Kick-off meeting and introduction to the team",
  },
  {
    id: 6,
    name: "Milestone 6",
    description: "Kick-off meeting and introduction to the team",
  },
];
const RoadMap = () => {
  return (
    // 1:17:10
    <section className="section container mx-auto">
      <h1 className="font-semibold text-3xl text-center">Roadmap</h1>
      {roadmap.map((item, index) => (
        <MileStone
          key={index}
          title={item.name}
          descriptionm={item.description}
          lastItem={index === roadmap.length - 1}
        />
      ))}
    </section>
  );
};

export default RoadMap;
