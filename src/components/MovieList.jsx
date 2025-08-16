import "./MovieList.css";

function MovieList({ movies }) { // movies is now a prop!
    return (
        <div className="cardContainer">
            {movies.map((movie) => (
                <div className="card" key={movie.id}>
                    <div className="image">
                        <img src={movie.image} alt={movie.title} />
                    </div>
                    <div className="content">
                        <h2>{movie.title}</h2>
                        <div className="year_rating">
                            <p>{movie.year}</p>
                            <p>&#9733; {movie.rating}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default MovieList;
