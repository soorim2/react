import React, { useState } from 'react';
import './style.css'
import movie from '../assets/api/movie'
import MovieList from './MovieList';
const Movie = () => {
    const [data,setData]=useState(movie);

    const onDel = (id) => {
        setData(data.filter(item=> item.no !== id))
    }
    return (
        <div className="wrap">
            <h2>최신 개봉작</h2>
            <MovieList data={data} onDel={onDel}/>
        </div>
    );
};

export default Movie;