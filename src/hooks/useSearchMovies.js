import { useEffect, useState } from "react";
import { API_OPTIONS } from "../utils/constant";
const useSearchMovies = () => {
  const [searchQuery, setSearchQuery] = useState();

  const getSaerchMovies = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${searchQuery}&language=en-US&page=1&include_adult=false`,
      API_OPTIONS
    );
    const json = await data.json();
    console.log(json.results);
    setSearchQuery(json.results);
  };
  useEffect(() => {
    getSaerchMovies();
  }, []);

  return searchQuery;
};
export default useSearchMovies;
