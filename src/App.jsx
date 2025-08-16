import { useState } from "react";
import NavBar from "./components/NavBar";
import MovieList from "./components/MovieList";
import "./App.css";
import { movies } from "./data/movie";

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  const searchMovie = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <NavBar searchTerm={searchTerm} searchMovie={searchMovie} />
      <MovieList movies={filteredMovies} />
    </div>
  );
}

export default App;
