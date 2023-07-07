import ReviewsList from 'components/ReviewsList/ReviewsList';

const { getReviewsForMovie } = require('helpers/API');
const { useEffect, useState } = require('react');
const { useParams } = require('react-router-dom');

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const getReviews = async id => {
      try {
        const response = await getReviewsForMovie(id);
        const { results } = response.data;
        setReviews(results);
      } catch (error) {
        console.log(error);
      }
    };
    getReviews(id);
  }, [id]);
  return (
    <section>
      {reviews.map(({ author, content }) => (
        <ReviewsList key={Math.random()} author={author} text={content} />
      ))}
    </section>
  );
};

export default Reviews;
