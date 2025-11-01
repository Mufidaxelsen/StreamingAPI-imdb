import "./App.css";
import { getMovieList, searchMovie} from "./api";
import { useEffect, useState } from "react";

const App = () => {
  const [movies, setMovies] = useState([]);
  
useEffect(() => {
  const fetchMovies = async () => {
    const movieList = await getMovieList();         // "getMovieList" menghasilkan data yang ada pada Inspect .result nya
    if (movieList) {
      setMovies(movieList.data.results);
    }
  };
  fetchMovies();
  }, []);
  
  const search = async (q) => {
    console.log({ q });
    if (q.length > 2) { //menjalankan pencarian setelah input memiliki lebih dari 2 karakter
    const searchResults = await searchMovie(q);
    if (searchResults) {
      setMovies(searchResults.data.results);
    }
    }
  }
  
  return (  
    <div className="App">
      <header className="App-header">
      <h1>MUFID MOVIE BASE</h1>
      <input 
      placeholder="Cari Film Kesayanganmu...." 
      className="Movie-search"
      onChange= {({ target }) => search(target.value)}                                                                      //untuk kita tahu perubahan apa yang terjadi didalam values dari inputan
      />
      <div className="Movie-container">
      {movies.map((movie) => (
      <div className="Movie-wrapper" key={movie.id}>
      <div className="Movie-title">CONTOH HAL PERTAMA</div>
      <img
        className="Movie-image"
        src={`${process.env.REACT_APP_IMG_BASE_URL}${movie.poster_path}`}
        alt={movie.title}
      />
      <div className="Movie-date">11-09-2024</div>
      <div className="Movie-rate">8.9</div>
    </div>
      ))}
    </div>
      </header>
    </div>
  );
};

export default App;





    /* <div className="Movie-wrapper">
      <div className="Movie-title">CONTOH HAL PERTAMA</div>
      <div className="Movie-image" src="" />
      <div className="Movie-date">11-09-2024</div>
      <div className="Movie-rate">8.9</div>
    </div>
    */