import React, { useState, useRef } from 'react';
import './style.css' 
import AddUser from './AddUser';
import ListUser from './ListUser';
import EditUser from './EditUser';

    const Customer = () => {
        const no = useRef(5)
        const userData = [
            {id:1, name:'임지수',job:'너무졸린 직장인'},
            {id:2, name:'수림',job:'배가부른 회사원'},
            {id:3, name:'임지수림',job:'눕고싶은 회사원'},
            {id:4, name:'임지수',job:'하품하는 직장인'},
        ]
        const [users,setUsers] = useState(userData)

        const [current, setCurrent] =useState({}) //tn수정버튼을 눌렀을 떄 해당 데이터를 임시로 담아둘 곳
        const [isEdit, setIsEdit] = useState(false) // 수정을 눌렀을 때 AddUser -> EditUser로 바꿔 보여줄
        
        
        const onAdd = (user)=>{
            user.id = no.current++
            setUsers([
                ...users,
                user
            ])
        }

        const onDel = (id) =>{
            setUsers(users.filter(user=> user.id !==id))
        }

        const onEdit =(user)=>{
            setCurrent(user)
            setIsEdit(true)
        }

        const onUpdate = (data) => {
            setIsEdit(false)
            setUsers(users.map(user =>user.id === data.id ? data:user))
        }
    return (
        <div className="Customer">
            {
                isEdit ? <EditUser current={current} onUpdate={onUpdate} setIsEdit={setIsEdit}/> :<AddUser onAdd={onAdd}/>
            }
            
            <ListUser users={users} onDel={onDel} onEdit={onEdit}/>
        </div>
    );
};

export default Customer;