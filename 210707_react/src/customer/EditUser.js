import React, { useState, useEffect } from 'react';

const EditUser = ({current,onUpdate,setIsEdit}) => {
    
    // const [user, setUser] =useState({id:1, name:'',job:''})
    const [user, setUser] =useState(current)
    
    const {id,name,job} = user
    const changeInput = (e) =>{
        const {name,value} =e.target
        setUser({
            ...user,
            [name]:value
        })
    }
    const onSubmit=(e)=>{
        e.preventDefault()
        onUpdate(user)
        setUser({
            name:'',
            job:''
        })
    }
    useEffect (()=>{
        setUser(current)
    },[current]) // 새로운 current값이 들어오면 setUser를 갱신해줌
    return (
        <form onSubmit={onSubmit}>
            <h2>모범택시 고객 수정</h2>
           <p>
               <label>이름</label>
               <input type="text" value={name} name="name" onChange={changeInput}/>
            </p> 
           <p>
               <label>직업</label>
               <input type="text" value={job} name="job"  onChange={changeInput}/>
            </p> 
            <p>
                <button type="submit">수정</button>
                <button onClick={()=> setIsEdit(false)}>취소</button>
            </p>
        </form>
    );
};

export default EditUser;