import React, { useState } from 'react';
import './Test7.css'
import movies from '../assets/api/movie'
const Test8 = () => {
    const [data,setData]=useState(movies)
    return (
        <div className="gallery">
            <h2></h2>
            <div className="con-box">
                <article>
                    <img></img>
                    <h3></h3>
                    <p></p>
                </article>
            </div>
        </div>
    );
};

export default Test8;