import React from 'react';

const CoffeeItem = ({coffee}) => {
    const {id,title,name,price,img,desc} = coffee
    return (
        <li>
            <img src={img} alt={title}/>
            <h2>분류 :{name}</h2>
            <h3>{title}</h3>
            <p>가격 : {price}</p>
            <p>{desc}</p>
        </li>
    );
};

export default CoffeeItem;