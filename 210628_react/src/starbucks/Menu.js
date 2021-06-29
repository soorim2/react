import React from 'react';
import MenuItem from './MenuItem'

const Menu = ({ item , onMenu}) => {
    return (
        <div className="menu">
            {
                item.map( (item,index) => <MenuItem  key={index} item={item} onMenu={onMenu} />)
            }
        </div>
    );
};

export default Menu;