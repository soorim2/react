import React from 'react';
import MenuItem from './MenuItem'
const Menu = ({menu,onFilter}) => {
    return (
        <div className="menu">
            {
                menu.map(item => 
                    <MenuItem key={item.name} item={item}
                    onFilter={onFilter}
                    />
                )
            }
        </div>
    );
};

export default Menu;