import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { API_OPTIONS } from '../utils/constant';
import VideoTitle from './VideoTitle';
import VideoBackground from './VideoBackground';

const WatchPage = () => {
    let {id} = useParams();
    const [movieData, setMovieData] = useState({});

    useEffect(() => {
        if (id) {
            getData(id);
        }
    }, [id]); 

    const getData = async (movie_id) => {
        try {
            const response = await fetch(
                `https://api.themoviedb.org/3/movie/${movie_id}?language=en-US`,
                API_OPTIONS
            );
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const json = await response.json();
            setMovieData(json );
            
        } catch (error) {
            console.error("Error fetching movie data:", error);
        }
    };
    
    return (
        <div>
            
           <VideoTitle title={movieData.title} overview={movieData.overview}/> 
            <VideoBackground movieId={movieData.id}/>
        </div>
    );
};

export default WatchPage;
