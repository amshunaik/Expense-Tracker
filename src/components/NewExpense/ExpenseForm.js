import { useState } from 'react';
import '../NewExpense/ExpenseForm.css'
function ExpenseForm (props){
    const [enteredTitle,setTitle]=useState("");
    const [enteredAmount,setAmount]=useState("");
    const [enteredDate,setDate]=useState("");

    const titleChange=(event)=>{
        setTitle(event.target.value);
        //console.log(event);
    }
    const amountChange=(event)=>{
        setAmount(event.target.value);
    }
    const dateChange=(event)=>{
        setDate(event.target.value);
    }
    const Submitclick=(event)=>{
        //console.log(event);
        event.preventDefault();
        //console.log(event);
        const expense={
            tit:enteredTitle,
            amount:+enteredAmount,
            date:new Date(enteredDate)
        };
        props.OnSubmitButton(expense);
        //console.log(expense);
        setTitle('');
        setAmount('');
        setDate('');
    }

    return(
        <form onSubmit={Submitclick}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label htmlFor="">Title</label>
                    <input type="string" value={enteredTitle} onChange={titleChange} />
                </div>
                <div className='new-expense__control'>
                    <label htmlFor="">Amount</label>
                    <input type="number" min="0.01" step="0.01" value={enteredAmount} onChange={amountChange} />
                </div>
                <div className='new-expense__control'>
                    <label htmlFor="">Date</label>
                    <input type="date" min="2019-01-01" max="2023-12-30"value={enteredDate} onChange={dateChange} />
                </div>
                <div className='new-expense__actions'>
                    <button type="submit" >Add expense</button>
                    
                </div>
            </div>
        </form>
    );

};

export default ExpenseForm;