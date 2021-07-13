import React from 'react';

const MenuItem = ({item,onFilter}) => {
    const {name} = item
    const ch = name.charAt(0).toUpperCase()
    const str = name.slice(1)
    const txt = ch + str
    return (
        <>
            <button onClick={()=>onFilter(name)}>
                {/* {name} */}
                {/* {`${ch}${str}`} */}
                {txt}
            </button>
        </>
    );
};

export default MenuItem;