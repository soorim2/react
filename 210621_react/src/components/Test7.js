import React, { useState, useRef } from 'react';

const Test7 = () => {
    const no = useRef(1)

    const [data, setData] = useState([])
    const [form, setForm] =useState({
        name: '',
        age: ''
    })   
    const {name, age} = form

    const onText = (e) => {
        const {value, name} = e.target
        setForm({
            ...form,
            [name] : value
        })
    }
    
    const onAdd = () => {
        setData([
            ...data,
            { //key값 : 값
                id : no.current++,
                name : name,
                age : age
            }
        ])
    }
    return (
        <div>
            <input type="text" value={name} name="name" onChange={ onText } />
            <input type="text" value={age} name="age" onChange={ onText } />
            <button onClick={onAdd}>추가</button>
            <hr/>
            <ul>
                {
                    data.map ( item => <li key={item.id}>
                        {item.id} / { item.name} / {item.age } 
                    </li>)
                }
            </ul>
        </div>
    );

};

export default Test7;

// import React, { useRef, useState } from 'react';

// const Test7 = () => {
//     const no  = useRef(1)
//     const naRef = useRef()
//     const [data , setData] = useState([])
//     const [form , setForm ] = useState({
//         na: '' , age:''
//     })
//     const {na , age } = form 

//     const onText = (e) => {
//         const { value , name } = e.target 
//         setForm({
//             ...form, 
//             [name] : value 
//         })
//     }
    
//     const onAdd = ()  => {
//         setData([
//             ...data , 
//             {
//                 id: no.current++, 
//                 na : na , 
//                 age : age 
//             }
//         ])
//         naRef.current.focuse()
//     }
//     return (
//         <div>
//             <input type="text" value={na} name="na" onChange={ onText } ref={naRef} />
//             <input type="text" value={age} name="age" onChange={ onText } />
//             <button onClick={onAdd}>추가</button>
//             <hr/>
//             <ul>
//                 {
//                     data.map ( item => <li key={item.id}>
//                         {item.id} / { item.na} / {item.age } 
//                     </li>)
//                 }
//             </ul>
//         </div>
//     );
// };

// export default Test7;