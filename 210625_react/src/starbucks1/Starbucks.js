import React, { useState } from 'react';
import '../assets/css/reset.css'
import './style.css'
import Menu from './Menu'
import CoffeeList from './CoffeeList'
import data from '../assets/api/menu'

const menu = [
    {name : 'all'},
    {name : 'coldbrew'},
    {name : 'espresso'},
    {name : 'frappuccino'},
    {name : 'fizzio'},
]
const Starbucks = () => {
    // const[menu, setMenu]=useState([
    //     {name : 'all'},
    //     {name : 'coldbrew'},
    //     {name : 'espresso'},
    //     {name : 'frappuccino'},
    //     {name : 'fizzio'},
    // ])
    const [coffees, setCoffees] = useState(data);
    
    const onFilter = (name) => {
        if ( name === 'all'){
            setCoffees(data)
        }else{
            setCoffees(data.filter(coffee=> coffee.name === name))
        }
    }
    return (
        <div className="wrap">
            <h1>STARBUCKS MENU</h1>
            <Menu menu={menu} onFilter={onFilter}/>
            <CoffeeList coffees={coffees}/>
        </div>
    )
};

export default Starbucks;