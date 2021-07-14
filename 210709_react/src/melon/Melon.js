import React, { useState } from 'react';
import MelonForm from './MelonForm';
import MelonList from './MelonList';
import './Melon.css'
import music from '../assets/api/music'
import Modal from './Modal';
const Melon = () => {
    const [musics,setMusics]=useState(music)
    const [isShow, setIsShow] =useState(false)

    const [musicNum,setMusicNum]= useState(music[0])

    const getDate= () => {
        const now = new Date()
        const year = now.getFullYear()
        const month = now.getMonth()+1
        const date = now.getDate();
        let day = now.getDay();
        if(day === 1){
            day = '월'
        }
        else if(day === 2){
            day = '화'
        }
        else if(day === 3){
            day = '수'
        }
        else if(day === 4){
            day = '목'
        }
        else if(day === 5){
            day = '금'
        }
        else if(day === 6){
            day = '토'
        }
        else if(day === 7){
            day = '일'
        }
        const msg = `${year}. ${month}. ${date} (${day})`
        return msg
    }

    const onSearch=(text)=>{
        setMusics(
            music.filter(item=>
                {
                    const re = new RegExp(text,'ig') // ig = 대소문자를 구별하지 않고 검색한다.
                    return item.title.match(re) // re와 item.title이일치하는것을 추출
                }
            )
        )
    }

    const onLike = (id) =>{
        setMusics(
            musics.map(music=>
                music.id  ===  id ?{
                    ...music,
                    done:!music.done,
                    like:!music.done?  music.like+1 : music.like-1
                } :music
            )
        )
    }

    const onOpen =(id)=>{
        setIsShow(true)
        setMusicNum(
            musics.find(music=>
                music.id ===id
            )
        )

    }
    const onClose =()=>{
        setIsShow(false)

    }
    
    return (
        <div className="Melon">
            <h2>멜론순위 {getDate()} 인기차트</h2>
            <MelonForm onSearch={onSearch} />
            <MelonList musics={musics} onLike={onLike} onOpen={onOpen}/>
            {
                isShow? <Modal musicNum={musicNum} onClose={onClose}/> : ''
            }
        </div>
    );
};

export default Melon;