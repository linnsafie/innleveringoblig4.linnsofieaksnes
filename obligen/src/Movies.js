import { useState } from "react";
import Movie from "./Movie";
import { getMovies } from "./utils/movieService";

const Movies = () => {

    const [movies, setMovies] = useState([]);

    const handleClick = async() => {
      const data = await getMovies();
      setMovies(data);
      console.log('Clicked');
    };

    return (

        <section>
          <h2>Movies</h2>
            <ul>
             {movies?.length > 0 && 
             movies.map((movie) => (<Movie key={movie._id} title={movie.title} actor={movie.actor} />
             ))}
            </ul>

          <button type="button" onClick={handleClick}>
            Klikk denne knappen
          </button>
        </section>
      
    );
  };
  
export default Movies;