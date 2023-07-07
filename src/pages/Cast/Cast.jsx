import CastList from 'components/CastList/CastList';
import { getActorsForMovie } from 'helpers/API';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const getActors = async id => {
      try {
        const response = await getActorsForMovie(id);
        const { cast } = response.data;
        setCast(cast);
      } catch (error) {
        console.log(error);
      }
    };
    getActors(id);
  }, [id]);
  return (
    <ul>
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
