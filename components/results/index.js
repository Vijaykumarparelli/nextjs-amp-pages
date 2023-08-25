import Card from './card';

const Results = ({ results }) => {
  return (
    <div className="row">
      {results.map((res) => (
        <div className="col mt-4" key={res.id}>
          <Card result={res} />
        </div>
      ))}
    </div>
  );
};
export default Results;
