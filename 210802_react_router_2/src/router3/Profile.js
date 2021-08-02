import React from 'react';
import { Link, Route } from 'react-router-dom';
import User from './User';

const Profile = () => {
    return (
        <div>
            <h1>프로필 페이지 입니다.</h1>
            <ul>
                <li><Link to ="/profile/user1">홍길동</Link></li>
                <li><Link to ="/profile/user2">임지수</Link></li>
                <li><Link to ="/profile/user3">임덕철</Link></li>
                <li><Link to ="/profile/user4">임철수</Link></li>
            </ul>
            {/* 화면에 보이는 영역 */}
            <Route path="/profile/:username">
                <User/>
            </Route>
        </div>
    );
};

export default Profile;