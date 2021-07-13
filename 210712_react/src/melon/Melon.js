import React, { useState } from 'react';
import MelonForm from './MelonForm';
import MelonList from './MelonList';
import music from '../assets/api/music';
import './Melon.css'

const Melon = () => {
    const [ musics , setMusics ] = useState( music )

    //검색은 노래곡검색

    return (
        <div className="Melon">
            <h2>멜론순위 xxx 인기차트</h2>
            <MelonForm />
            <MelonList musics={musics} />
        </div>
    );
};

export default Melon;