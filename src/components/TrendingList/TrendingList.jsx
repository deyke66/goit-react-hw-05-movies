const { Link } = require('react-router-dom');

const TrendingList = ({ films }) => {
  return (
    <>
      {films.map(i => (
        <li key={i.id}>
          <Link to={`/movies/${i.id}`}>{i.title}</Link>
        </li>
      ))}
    </>
  );
};

export default TrendingList;
