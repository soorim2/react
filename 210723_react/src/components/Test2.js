import React, { useState } from 'react';
import Test2Sub from './Test2Sub';

const Test2 = () => {
    const [color, setColor] = useState('')
    const [movie, setMovie ] = useState('')

    const onColor = (e) => {
        setColor(e.target.value)
    }
    const onMovie = (e) => {
        setMovie(e.target.value)
    }

    return (
        <div>
            <h2>당신이 좋아하는 색은?</h2>
            <p>
                <input type="text" value={color} onChange={onColor}/><br/>
                <span>pink,tomato,orange,salmon</span>
            </p>
            
            <h2>당신이 좋아하는 영화는?</h2>
            <p>
                <input type="radio" id="m1" name="movie" value="랑종" onChange={onMovie}/>
                <label for="m1">랑종</label>
                <input type="radio" id="m2" name="movie" value="블랙위도우" onChange={onMovie}/>
                <label for="m2">블랙위도우</label>
                <input type="radio" id="m3" name="movie" value="첨밀밀" onChange={onMovie}/>
                <label for="m3">첨밀밀</label>
                <input type="radio" id="m4" name="movie" value="코난" onChange={onMovie}/>
                <label for="m4">코난</label>
                <input type="radio" id="m5" name="movie" value="짱구" onChange={onMovie}/>
                <label for="m5">짱구</label>
            </p>
            <p></p>
            
            <Test2Sub color={color} movie={movie}/>
        </div>
    );
};

export default Test2;