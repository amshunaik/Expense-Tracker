import React from 'react'
import '../NewExpense/NewExpense.css'
import ExpenseForm from './ExpenseForm'
const NewExpense = (props) => {
    const pressedSubmit=(form1)=>{
        console.log(form1)
        const data1={ ...form1,
            id:Math.random().toString()
        };
        props.onAddNew(data1);
        //console.log(data1);
    }
    return (
    <div className='new-expense'>
        <ExpenseForm OnSubmitButton={pressedSubmit}/>
  
    </div>
    );

};
export default NewExpense;