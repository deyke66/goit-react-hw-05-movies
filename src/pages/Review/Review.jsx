import Loader from 'components/Loader/Loader';
import ReviewsList from 'components/ReviewsList/ReviewsList';

const { getReviewsForMovie } = require('helpers/API');
const { useEffect, useState } = require('react');
const { useParams } = require('react-router-dom');

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [err, setErr] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const getReviews = async id => {
      try {
        setIsLoading(true);
        const response = await getReviewsForMovie(id);
        const { results } = response.data;
        setReviews(results);
      } catch (error) {
        setErr(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    getReviews(id);
  }, [id]);
  return (
    <section>
      {reviews.map(({ author, content }) => (
        <ReviewsList key={Math.random()} author={author} text={content} />
      ))}
      {isLoading ? <Loader /> : null}
      {err ? <p>{err}</p> : null}
    </section>
  );
};

export default Reviews;
