import css from './CastList.module.css';
import PropTypes from 'prop-types';

const CastList = ({ character, name, avatar }) => {
  return (
    <li className={css.li}>
      <div className={css.div}>
        <img
          className={css.img}
          src={`https://image.tmdb.org/t/p/w200/${avatar}`}
          alt=""
        />
        <h2 className={css.h2}>{name}</h2>
      </div>
      <p className={css.p}>{character}</p>
    </li>
  );
};
export default CastList;

CastList.propTypes = {
  character: PropTypes.string,
  name: PropTypes.string,
  avatar: PropTypes.string,
};
