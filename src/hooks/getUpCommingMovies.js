import { API_OPTIONS } from '../utils/constant'
import { useDispatch } from 'react-redux'
import {addUpCommingMovies} from '../utils/movieSlice'
import { useEffect } from 'react';

const useUpCommingMovies = () => {
  const dispatch = useDispatch();

  const getUpCommingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    // setnowPlayingMovies(json.results);
    console.log(json.results);
    dispatch(addUpCommingMovies(json.results));
  };
  useEffect(() => {
    getUpCommingMovies();
  }, []);
};

export default useUpCommingMovies;
