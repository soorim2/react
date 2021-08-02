import React from 'react';
import { Link, Route } from 'react-router-dom';
import data from './Data'
import Front from './Front';
const Profile = () => {
    return (
        <div>
            <h1> Profile page 입니다. </h1>
            <ul>
                <li>
                    <Link to="/profile/html">html</Link>
                </li>
                <li>
                    <Link to="/profile/css">css</Link>
                </li>
                <li>
                    <Link to="/profile/javascript">javascript</Link>
                </li>
                <li>
                    <Link to="/profile/react">react</Link>
                </li>
            </ul>
            {/* 화면에 보이는 영역 */}
            <Route path="/profile/:name">
                <Front data={data}/>
            </Route>
        </div>
    );
};

export default Profile;