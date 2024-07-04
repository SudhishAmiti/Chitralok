import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import useSearchMovies from '../hooks/useSearchMovies';

const GptMovieSuggestions = () => {
  const query = useSelector((store) => store.search.showSearchView);

  const searchQuery = useSearchMovies(query);
  console.log('searchQuery'	)
  console.log(searchQuery);
  return (
    
    <div>
      
    </div>
  )
}

export default GptMovieSuggestions
