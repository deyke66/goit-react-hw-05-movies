import CastList from 'components/CastList/CastList';
import Loader from 'components/Loader/Loader';
import { getActorsForMovie } from 'helpers/API';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [err, setErr] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const getActors = async id => {
      try {
        setIsLoading(true);
        const response = await getActorsForMovie(id);
        const { cast } = response.data;
        setCast(cast);
      } catch (error) {
        setErr(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    getActors(id);
  }, [id]);
  return (
    <ul>
      {isLoading ? <Loader /> : null}
      {err ? <p>{err}</p> : null}
      {cast.map(({ character, original_name, profile_path, id }) => (
        <CastList
          key={id}
          character={character}
          name={original_name}
          avatar={profile_path}
        />
      ))}
    </ul>
  );
};

export default Cast;
