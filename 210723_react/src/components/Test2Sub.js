import React, { useMemo } from 'react';

const getColor=(color)=>{
    console.log('getColor')
    switch(color){
        case 'pink' : return '분홍';
        case 'tomato' : return '토마토';
        case 'orange' : return '오렌지';
        case 'salmon' : return '영어';
        default : return '없음';
    }
}
const getMovie=(movie)=>{
    console.log('getMovie')
    switch(movie){
        case '랑종' : return '랑종내용';
        case '블랙위도우' : return '블랙위도우내용';
        case '첨밀밀' : return '첨밀밀내용';
        case '코난' : return '뭉치';
        case '짱구' : return '짱구는못말려1기';
        default : return '없음';
    }
}

const Test2Sub = ({color,movie}) => {
    //사용자 정의함수 호출
    // const colorInfo = getColor(color)
    // const movieInfo = getMovie(movie)
    
    const colorInfo = useMemo(()=>{getColor(color)},[color]) 
    const movieInfo = useMemo(()=>{getMovie(movie)},[movie])

    return (
        <div>
            <h4>좋아하는 색은 {color} / {colorInfo} </h4>
            <h4>좋아하는 영화는 {movie} / {movieInfo}</h4>
        </div>
    );
};

export default Test2Sub;