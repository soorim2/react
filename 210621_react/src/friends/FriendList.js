import React from 'react';
import FriendItem from './FriendItem';
const FriendList = ({data}) => {
    return (
        <ul>
            {
                data.map((item, index) => 
                    <FriendItem key={item.id} item={item}/>
                )
            }
        </ul>
    );
};

export default FriendList;