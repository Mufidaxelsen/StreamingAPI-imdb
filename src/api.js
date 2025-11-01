import axios from "axios";                          //DI PELAJARI SEMUA CODINGAN YANG BERADA DIBAWAH SINI

const apiKey = process.env.REACT_APP_TMDB_API_KEY;
const baseUrl = process.env.REACT_APP_BASE_URL;

export const getMovieList = async() => {      
    try {                                                                                                             //
    const movie = await axios.get(`${baseUrl}/movie/popular?api_key=${apiKey}`);                                     // -> function untuk memanggil listing" dari si themovie API db
    // console.log({ movieList: movie })
    return movie;
    
    } catch (error) {
        console.error("gagal untuk fetch movies:", error);
    }
};

export const searchMovie = async (q) => {      
   try  {                                                                                     //
    const search = await axios.get(`${baseUrl}/search/movie?api_key=${apiKey}&query=${q}`);                                         //-> function untuk memanggil listing" dari si themovie seacrh db
    return search;                                                                                                                         //
   } catch (error) {
    console.error("gagal menari film:", error);
   }
};

console.log("API Key:", process.env.REACT_APP_TMDB_API_KEY);
console.log("Base URL:", process.env.REACT_APP_BASE_URL);
console.log("Image Base URL:", process.env.REACT_APP_IMG_BASE_URL);