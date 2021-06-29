import React, { useState } from 'react';
import './style.css'
import Menu from './Menu'
import CoffeeList from './CoffeeList'
import data from '../assets/api/menu'

// const menu = [
//     {name :'all' },
//     {name :'coldbrew' },
//     {name :'espresso' },
//     {name :'frappuccino' },
//     {name :'fizzio' },
// ]
const menu = [
    // Set = 중복되는 값들을 제거하고 하나씩만 남김
    // 배열로 들어간다
    // ... (스프레드연산자)를 적어주면 안에있는 요소들을 하나씩 가져옴
    // menu.js 내부에 menu로 넘겨준 props를 item으로 변경 
    'all', ...new Set(data.map(item=>item.name))
]
const Starbucks = () => {   
    const [coffees , setCoffees  ] = useState( data )
    

    const onMenu = (name) => {
        if( name === 'all'){
            setCoffees(data)
        }else{
            setCoffees( data.filter( coffee => coffee.name === name ))
        }
    }


    return (
        <div className="wrap">
            <h1>STARBUCKS MENU </h1>
            <Menu menu={menu} onMenu={onMenu} />
            <CoffeeList coffees={coffees} />
        </div>
    );
};

export default Starbucks;