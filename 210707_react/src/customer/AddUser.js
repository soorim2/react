import React, { useState, useRef } from 'react';

const AddUser = ({onAdd}) => {
    const nameRef=useRef()
    const [user, setUser] = useState(
       { name:'',
        job:''}
    )
    //user.name , user.job
    const {name,job} = user

    const changeInput = (e) =>{
        const {value,name} = e.target
        setUser ({
            ...user,
            [name]:value
        })
    }

    const onSubmit = (e) =>{
        e.preventDefault() //submit 성격 제거
        if (!name || !job) return

        onAdd(user)  // name,job 을 onAdd로 넘겨줌

        setUser({
            name:'',
            job:''
        })

        nameRef.current.focus()
    }
    return (
        <form onSubmit={onSubmit}>
            <h2>모범택시 고객 추가</h2>
           <p>
               <label>이름</label>
               <input type="text" name="name" value={name}onChange={changeInput} ref={nameRef}/>
            </p> 
           <p>
               <label>직업</label>
               <input type="text" name="job" value={job}onChange={changeInput}/>
            </p> 
            <p>
                <button type="submit">추가</button>
            </p>
        </form>
    );
};

export default AddUser;