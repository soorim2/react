import React from 'react';

const MenuItem = ({item, onMenu}) => {
    const { name } = item 
    const ch = name.charAt(0).toUpperCase()
    const str = name.slice(1)
    const txt = ch + str 
    return (
        <button onClick={() => onMenu(name)}>
            {/* {name} */}
            {/* {txt} */}
            { `${ch}${str}` }
        </button>
    );
};

export default MenuItem;