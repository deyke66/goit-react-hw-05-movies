const ReviewsList = ({ author, text }) => {
  return (
    <div>
      <h2>Review author : {author}</h2>
      <p>{text}</p>
    </div>
  );
};
export default ReviewsList;
