import MileStone from "./MileStone";

const roadmap = [
  {
    id: 1,
    name: "Project Initiation",
    description: "Kick-off meeting and introduction to the project scope.",
  },
  {
    id: 2,
    name: "Requirements Gathering",
    description: "Detailed analysis and documentation of project requirements.",
  },
  {
    id: 3,
    name: "Design Phase",
    description: "Creation of wireframes, mockups, and design prototypes.",
  },
  {
    id: 4,
    name: "Development",
    description:
      "Implementation of features and functionalities as per the design.",
  },
  {
    id: 5,
    name: "Testing",
    description:
      "Rigorous testing to ensure quality and performance standards.",
  },
  {
    id: 6,
    name: "Project Delivery",
    description:
      "Final delivery of the project with all documentation and resources.",
  },
];

const RoadMap = () => {
  return (
    <section className="max-w-80 mx-auto">
      <h1 className="font-semibold text-3xl mb-16">Roadmap</h1>
      {roadmap.map((item, index) => (
        <MileStone
          key={index}
          title={item.name}
          description={item.description} // corrected from 'descriptionm' to 'description'
          lastItem={index === roadmap.length - 1}
        />
      ))}
    </section>
  );
};

export default RoadMap;
