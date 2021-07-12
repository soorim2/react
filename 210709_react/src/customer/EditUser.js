import React, {useState , useEffect} from 'react';

const EditUser = ({ current, onUpdate, setIsEdit }) => {

    const [ user , setUser ] = useState(current)
    // const [ user , setUser ] = useState({id:1,name:'김도기',job:'무지개택시기사'})
    //user.id , user.name, user.job
    const { id, name , job } = user 

    const changeInput = (e) => {
        const {name, value} = e.target
        setUser({
            ...user ,
            [name]:value
        })
    }

    const onSubmit = (e) => {
        e.preventDefault()
        onUpdate(user)
        setUser({
            name:'',
            job:''
        })
    }

    useEffect( ()  => {
        setUser( current )
    },[current])

    return (
        <form onSubmit ={ onSubmit }>
            <h2>모범택시고객 수정</h2>    
            <p>
                <label>이름</label>
                <input type="text" name="name" value={name} onChange={changeInput} />
            </p>
            <p>
                <label>직업</label>
                <input type="text" name="job" value={job} onChange={changeInput}/>
            </p>
            <p>
                <button>수정</button>
                <button onClick={() => setIsEdit(false)}>취소</button>
            </p>
        </form>
    );
};

export default EditUser;