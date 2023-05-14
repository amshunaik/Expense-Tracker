import React, {useState} from 'react'

import './Expense';
import ExpenseDate from './ExpenseDate';
import '../Cost/ExpenseItem.css'
import Card from '../UI/Card'
function Expenseit(props) {
    const [title, setTitle]=useState(props.title);
    //let title =props.title;
    const click = () => {
      var t='Updated';
      setTitle(t)
      console.log(title)
    };
    
    return (
      <>
      <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date}></ExpenseDate>
      
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">${props.amount}</div>
        </div>

      </Card>
      </li>
      </>
  
    );
  }
  
  export default Expenseit;
