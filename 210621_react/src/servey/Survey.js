import React, { useState } from 'react';
import SurveyStep1 from './SurveyStep1'
import SurveyStep2 from './SurveyStep2'
import SurveyStep3 from './SurveyStep3'
import SurveyStep4 from './SurveyStep4'
import './style.css'

const Survey = () => {
    const [step, setStep] = useState(2)
    const [form, setFrom] = useState({
        username:'',
        age:'',
        addr:'',
        tel:'',
        job:'',
        email:'',
        sex: '',
        fav:'',

    })
    const{username, age, addr, tel, job, email, sex, fav } = form

    const onText = (e) => {
        const {name, value} = e.target
        setFrom({
            ...form,
            [name] :value
        })
    }

    const onNext=()=> {
        setStep(step +1)
    }
    const onPrev=()=> {
        setStep(step -1)
    }
    return (
        <div className="wrap">
            {step === 1 && 
                <SurveyStep1 username={username} age={age} addr={addr} tel={tel} onText={onText} onNext={onNext}/>
            }
            {/* {step === 2 && <SurveyStep2 job={job} email={email} sex={sex} fav={fav} onText={onText} onNext={onNext} onPrev={onPrev}/> } */}
            {/* {...form}으로 내부 키값을 넘김 해당 컴포넌트에서는 사용할 키값만 선언 후 사용*/}
            {step === 2 && <SurveyStep2 {...form} onText={onText} onNext={onNext} onPrev={onPrev}/> } 
            {step === 3 && <SurveyStep3 form={form} onNext={onNext} onPrev={onPrev}/> }
            {step === 4 && <SurveyStep4 username={username} onPrev={onPrev} /> }
        </div>
    );
};

export default Survey;