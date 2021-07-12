import React, { useState, useRef } from 'react';
import AddUser from './AddUser';
import ListUser from './ListUser';
import EditUser from './EditUser';
import Message from './Message';
import './style.css'

const Customer = () => {
    const no = useRef(5)
    const userData = [
        {id:1, name:'김도기' , job:'무지개택시기사' },
        {id:2, name:'장성철' , job:'무지개택시대표' },
        {id:3, name:'고은' , job:'해커' },
        {id:4, name:'강하나' , job:'열혈검사' },
    ]

    const [ users , setUsers ] = useState( userData )
    const [ current , setCurrent] = useState({})
    const [ isEdit , setIsEdit ] = useState( false )
    //isShow 메세지 보여줄지 말지 상태값
    const [ isShow , setIsShow ] = useState( false )
    // 메세지 문구 변경
    const [ msg , setMsg ] = useState( '' )

    const onAdd = (user)  => {
        user.id = no.current++
        setUsers([
            ...users,
            user 
        ])
         // 메세지 상태변경
         setMsg('추가되었습니다.')
         setIsShow(true)
    }

    const onDel = (id)  => {
        setUsers( users.filter( user => user.id !== id ))
        setMsg('삭제되었습니다.')
        setIsShow(true)
    }


    const onEdit  = (user)  => {
        setCurrent( user )
        setIsEdit( true )
        setMsg('수정합니다.')
        setIsShow(true)
    }

    const onUpdate = (data)  => {
        setIsEdit( false )
        setUsers( users.map( user => user.id === data.id ? data: user ))
        setMsg('수정되었습니다.')
        setIsShow(true)
    }

    return (
        <div className="Customer">
            {
                isEdit ? 
                <EditUser current={current} 
                          onUpdate={onUpdate}
                          setIsEdit={setIsEdit} /> 
                :
                <AddUser onAdd={onAdd} />
            }
            
            <ListUser users={users} onDel={onDel} onEdit={onEdit} />

            <Message msg={msg}isShow={isShow} setIsShow={setIsShow}/>
        </div>
    );
};

export default Customer;