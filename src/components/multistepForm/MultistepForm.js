import React from 'react'
import {useForm, useStep} from 'react-hooks-helper'
import Form from '../stepForm/Forms'
import SecondForm from '../stepForm/SecondForm'
import ThirdForm from '../stepForm/ThirdForm'
import Form4 from '../stepForm/Form4'
import Form5 from '../stepForm/Form5'
import Form6 from '../stepForm/Form6'
import Form7 from '../stepForm/Form7'
import Form8 from '../stepForm/Form8'
import Form9 from '../stepForm/Form9'
import Form10 from '../stepForm/Form10'
import Form11 from '../stepForm/Form11'
import Form12 from '../stepForm/Form12'
import Form13 from '../stepForm/Form13'
import Form14 from '../stepForm/Form14'
import Form15 from '../stepForm/Form15'
import Form16 from '../stepForm/Form16'
import Form17 from '../stepForm/Form17'
import Form18 from '../stepForm/Form18'
import Form19 from '../stepForm/Form19'
import Form20 from '../stepForm/Form20'
import Form21 from '../stepForm/Form21'
import Form22 from '../stepForm/Form22'
import Form23 from '../stepForm/Form23'
import Form24 from '../stepForm/Form24'




const defaultData ={
    HowConfidentAreYouInYourLongTermFinancialPlan :'',
    WhenWouldYouLikeToRetire:'',
    HowDoYouCurrentlyManageYourMoney :'',
    WhatActivityIsMostImportantToYouInRetirement :'',
    HowConfidentAreYouInYourLongTermFinancialPlan :'',
    HowConfidentAreYouInYourLongTermFinancialPlan :'',
    HowConfidentAreYouInYourLongTermFinancialPlan :'',
    HowConfidentAreYouInYourLongTermFinancialPlan :'',
    HowConfidentAreYouInYourLongTermFinancialPlan :'',

};
    

const steps = [
    {id:1},
    {id:2},
    {id:3},
    {id:4},
    {id:5},
    {id:6},
    {id:7},
    {id:8},
    {id:9},
    {id:10},
    {id:11},
    {id:12},
    {id:13},
    {id:14},
    {id:15},
    {id:16},
    {id:17},
    {id:18},
    {id:19},
    {id:20},
    {id:21},
    {id:22},
    {id:23},

]


const MultistepForm = () => {

    const [formData, setForm]= useForm(defaultData)
    const {step, navigation} = useStep({
        steps,
        initialStep: 0
    })
    const props = {formData, setForm, navigation}

        switch (step.id){
            case 1 : 
            return <Form {...props}/>;
            case 2 : 
            return <SecondForm {...props}/>;
            case 3 : 
            return <ThirdForm {...props}/>;
            case 4 : 
            return <Form4 {...props}/>;
            case 5 : 
            return <Form5 {...props}/>;
            case 6 : 
            return <Form6 {...props}/>;
            case 7 : 
            return <Form7 {...props}/>;
            case 8 : 
            return <Form8 {...props}/>;
            case 9 : 
            return <Form9 {...props}/>;
            case 10 : 
            return <Form10 {...props}/>;
            case 11 : 
            return <Form11 {...props}/>;
            case 12 : 
            return <Form12 {...props}/>;
            case 13 : 
            return <Form13 {...props}/>;
            case 14 : 
            return <Form14 {...props}/>;
            case 15 : 
            return <Form15 {...props}/>;
            case 16 : 
            return <Form16 {...props}/>;
            case 17 : 
            return <Form17 {...props}/>;
            case 18 : 
            return <Form18 {...props}/>;
            case 19 : 
            return <Form19 {...props}/>;
            case 20 : 
            return <Form20 {...props}/>;
            case 21 : 
            return <Form21 {...props}/>;
            case 22 : 
            return <Form22 {...props}/>;
            case 23 : 
            return <Form23 {...props}/>;
            case 24 : 
            return <Form24 {...props}/>;
        }
    return (
        <div>
            <h1 style={{color:'green', marginTop:'100px'}}>hello</h1>
        </div>
    )
}

export default MultistepForm
