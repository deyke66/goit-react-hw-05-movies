const CastList = ({character
    , name, avatar }) => {
    return (
        <li>
            <div>
                <img src={`https://image.tmdb.org/t/p/w200/${avatar}`} alt="" />
                <h2>{name}</h2>
            </div>
            <p>{character}</p>
        </li>
    )
};
export default CastList;