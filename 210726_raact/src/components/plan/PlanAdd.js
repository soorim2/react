import React, { useState }  from 'react';
import { PlanForm } from '../styled/planstyle'

const PlanAdd = ({onAdd}) => {
     const [form, setForm] =useState({
         text : '',
         day : '',
         done : false
     })
     const {text, day, done} =form

     const changeInput1 = (e) =>{
         const {value, name} = e.target
         setForm({
             ...form,
             [name]: value
        })
     }
     const changeInput2 = (e) =>{
         const {name, checked} = e.target
         setForm({
             ...form,
             [name]: checked
        })
     }
     const onSubmit = (e) => {
        e.preventDefault()
        //값전달
        onAdd(form)
     }
    return (
        <PlanForm onSubmit={onsubmit} >
            <div>
                <label>일정</label>
                <input type="text" name="text" value={text} onChange={changeInput1}/>
            </div>
            <div>
                <label>일시</label>
                <input type="text" name="day" value={day} onChange={changeInput1}/>
            </div>
            <div>
                <label>중요</label>
                <input type="checkbox" name="done" checked={done} onChange={changeInput2}/>
            </div>
            <button type="submit">저장</button>
        </PlanForm>
    );
};

export default PlanAdd;