import React, { useRef } from 'react'
import { useDispatch } from 'react-redux';
import { showSearchView } from '../utils/searchSlice';


const GptSearchBar = () => {
  const searchText = useRef(null);
  const dispatch = useDispatch();
  const handleGptSearchClick = async() => {
    console.log(searchText.current.value);
    dispatch(showSearchView(searchText.current.value));
    
  }
  return (
    <div className='pt-[10%] flex justify-center'>
      <form className=' bg-black w-1/2 grid grid-cols-12' onSubmit={e => e.preventDefault()}>
        <input className="col-span-9 p-4 m-4 rounded-lg"type='text' placeholder='What would you like to watch?' ref={searchText}/>
        <button className='col-span-3 bg-red-500 m-4 px-4 py-2 rounded-lg' onClick={handleGptSearchClick}>Search</button>
      </form>
    </div>
  )
}

export default GptSearchBar;
