import React, { useState } from 'react';
import MelonForm from './MelonForm';
import MelonList from './MelonList';
import './Melon.css'
import music from '../assets/api/music'
const Melon = () => {
    const [musics,setMusics]=useState(music)
    const [keyword, setKeyword] = useState('')
    return (
        <div className="Melon">
            <h2>멜론순위 xxx 인기차트</h2>
            <MelonForm setKeyword={setKeyword}/>
            <MelonList musics={musics}/>
        </div>
    );
};

export default Melon;