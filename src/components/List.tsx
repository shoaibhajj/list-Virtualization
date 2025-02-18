interface IProp {}

const List = ({}: IProp) => {
  return (
    <div>
      {Array.from({ length: 10000 }, (_, idx) => (
        <h3 key={idx}>Row {idx + 1}</h3>
      ))}
    </div>
  ); 
};

export default List;
