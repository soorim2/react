import React, { useState } from 'react';
import './style.css'
import movie from '../assets/api/movie.json'
import MovieView from './MovieView'
import MovieList from './MovieList'
import Modal from './Modal'

const Movies = () => {
    const [data, setData] = useState( movie )
    const [movieNum , setMovieNum ] = useState(data[0])
    // const [movieNum , setMovieNum ] = useState(movie[0])

    const onOver = (id) => {
    //   setMovieNum(data[id-1])
    //   setMovieNum(data.find(item => item.rank ===id))
    const num = data.findIndex(item => item.rank ===id)
    setMovieNum(data[num])
    }

    const [isShow,setIsShow] = useState(false)
    const toggleModal = () => {
        setIsShow(!isShow)
    }
    
    return (
        <>
            <div className="gallery">
                <MovieView movieNum={movieNum} toggleModal={toggleModal} />
                <MovieList data={data} onOver={onOver} />
            </div>    
            {
                isShow && <Modal toggleModal={toggleModal} movieNum={movieNum} />
            }
        </>
    );
};

export default Movies;