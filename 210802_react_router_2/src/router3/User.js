import React from 'react';
import { useParams } from 'react-router-dom';
import data from './data'

const User = () => {
    // 부모에서 내려받아 전달해줄 필요 없이
    const {username}= useParams()
    const pro = data[username]
    return (
        <div>
            <h1>유저 페이지 입니다.</h1>
            <h2>
                {pro.name} / {pro.job}
            </h2>
        </div>
    );
};

export default User;