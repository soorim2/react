import React, { useState, useRef }  from 'react';
import PlanAdd from './PlanAdd';
import PlanList from './PlanList';
import GlobalStyle from '../styled/Global'
import datalist from './data'
 

const Plan = () => {
    const no = useRef(datalist.length + 1)
    const [plans , setPlans] = useState(datalist)

    const onDel = (id) => {
        setPlans( plans.filter( plan => plan.id !== id ))
    }

    const onToggle = (id) => {
        setPlans( plans.map( plan => plan.id === id ? 
        {...plan , done : !plan.done }:plan))
    }

    const onAdd = (form) => {
        form.id = no.current++
        
        setPlans([
            ...plans,
            form
        ])

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