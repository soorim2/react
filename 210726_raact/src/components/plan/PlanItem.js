import React from 'react';
import { AiOutlineCloseCircle } from "react-icons/ai";
import { Article } from '../styled/planstyle'

const PlanItem = ({plan,onDel,onToggle}) => {    
    const {id,text,day,done} = plan
    return (        
        <Article onDoubleClick={()=>onToggle(id)} className={done ? 'on' :''} >
            <h3>일정: {text}</h3>
            <p>일시:  {day}</p>
            <i className="icon" onClick={()=>onDel(id)} style={{cursor:"pointer"}} >
               <AiOutlineCloseCircle />
            </i>
        </Article>
    );
};

export default PlanItem;