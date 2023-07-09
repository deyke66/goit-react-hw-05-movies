import css from './ReviewsList.module.css';
import PropTypes from 'prop-types';

const ReviewsList = ({ author, text }) => {
  return (
    <div className={css.review}>
      <h2 className={css.h2}>Review author : {author}</h2>
      <p className={css.p}>{text}</p>
    </div>
  );
};
export default ReviewsList;

ReviewsList.propTypes = {
  author: PropTypes.string,
  text: PropTypes.string,
};
