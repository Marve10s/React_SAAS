const MileStone = ({ title, descriptionm, lastItem }) => {
  return (
    <div className="">
      <div className="">
        <h3>{title}</h3>
        <p>{descriptionm}</p>
      </div>
      {!lastItem && <div>{lastItem}</div>}
    </div>
  );
};

export default MileStone;
