
import React, {useState} from 'react'
import Expenseit from './ExpenseItem';
const ExpenseList=(props)=>{
    //let expensecont=<p>No element found</p>
  if(props.items.length === 0){
    return <h2 className='expenses-list__fallback' >Found no expenes</h2>
    //expensecont= (props.expense.map(e =><Expenseit key={e.id}title={e.tit}amount={e.amount}date={e.date}/>))
  }
  return (
    <ul className='expenses-list'>
        {
            props.items.map(e =><Expenseit key={e.id}title={e.tit}amount={e.amount}date={e.date}/>)
        }

    </ul>
  )

};
export default ExpenseList;