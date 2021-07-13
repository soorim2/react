import React, { useState } from 'react';
import FriendList from './FriendList';
import '../assets/css/reset.css'
import './style.css'
import dataApi from '../assets/api/friend'
const Friends = () => {
    const [data, setData] = useState(dataApi)
    const onRemove = () => {
        setData([])
    }
    return (
        <div className="wrap">
            <h1>친구들 총 인원 : {data.length} 명</h1>
            <FriendList data={data}/>
            <p className="btn">
                <button onClick={onRemove}>모두 삭제</button>
            </p>
        </div>
    );
};

export default Friends;