import React, { useState, useRef,useEffect }  from 'react';
import PlanAdd from './PlanAdd';
import PlanList from './PlanList';
import GlobalStyle from '../styled/Global'
 

const Plan = () => {
    const [plans , setPlans] = useState([])

    useEffect(()=>{
        fetch('http://localhost:4000/plans')
        .then(res =>res.json())
        .then(res =>setPlans(res))
    },[])

    const onDel = (id) => {
        fetch(`http://localhost:4000/plans/${id}`,{
            method:'delete'
        })
        setPlans( plans.filter( plan => plan.id !== id ))
    }
    const fetchPlan = async(id)=>{
        const res = await fetch(`http://localhost:4000/plans/${id}`)
        const data = await res.json()
        return data
    }
    const onToggle = async(id) => {
        const togglePlan = await fetchPlan(id)
        const updataPlan = {...togglePlan, done: !togglePlan.done}

        //다시 넣기
        const  res = await fetch(`http://localhost:4000/plans/${id}`,{
            method:'put',
            headers:{
                'Content-type' : 'application/json'
            },
            body:JSON.stringify(updataPlan)
        })

        // setPlans( plans.map( plan => plan.id === id ? 
        // {...plan , done : !plan.done }:plan))
        getToggle()
    }
    const getToggle=()=>{
        const config = {method: 'get'}
        fetch(`http://localhost:4000/plans`,config)
        .then(res=>res.json())
        .then(res=>setPlans(res))
    }

    const onAdd = (form) => {
        //자동으로 id 생성
       fetch('http://localhost:4000/plans/',{
           method:'post',
           headers:{
               'Content-type' : 'application/json'
           },
           body:JSON.stringify(form)
       })
       .then(res=>res.json)
       .then(res=>setPlans([...plans,res]))

    }

    return (
        <div>
            <GlobalStyle />
            <PlanAdd  onAdd={onAdd} />
            <PlanList plans={plans} onDel={onDel} onToggle={onToggle} />
        </div>
    );
};

export default Plan;
// import React, { useState }  from 'react';
// import PlanAdd from './PlanAdd';
// import PlanList from './PlanList';
// import GlobalStyle from '../styled/Global'

// import datalist from './data'

// const Plan = () => {
//     const [plans, setPlans] = useState(datalist)

//     const onDel = (id) => {
//         setPlans(plans.filter(plan=>plan.id !== id))
//     }

//     const onToggle = (id)=>{
//         setPlans(plans.filter(plan=> plan.id === id ? {
//             ...plan , done : !plan.done
//         } : plan))
//     }

//     const onAdd = (form) => { //PlanAdd의 submit값을 받아옴
//         setPlans({
//             ...plans,
//             form
//         })
//     }
//     return (
//         <div>
//             <GlobalStyle />
//             <PlanAdd onAdd={onAdd} />
//             <PlanList plans={plans} onDel={onDel} onToggle={onToggle}/>
//         </div>
//     );
// };

// export default Plan;