import React, {useState} from 'react';
//import Expenseit from "./ExpenseItem";
import '../Cost/Expense.css';
import ExpensesFilter from './ExpenseFilter';
import ExpenseList from './ExpenseList'
import Card from '../UI/Card';
import ExpenseChart from './ExpenseChart';
function Expense (props){
  
  const [filter,setFilter]=useState('2022');
  const filt = seletedyear =>{
    console.log(seletedyear);
    setFilter(seletedyear);
  }
  const filtExp =props.exp.filter(e=>{
    return e.date.getFullYear().toString()=== filter;
  })

  //let expensecont=<p>No element found</p>
  //if(filtExp.length>0){
  //  expensecont= (filtExp.map(e =><Expenseit key={e.id}title={e.tit}amount={e.amount}date={e.date}/>))
  //}

    return (
      
    <Card className="expenses">

      <ExpensesFilter selected={filter} onFilt={filt}/>
      <ExpenseChart expenses={filtExp}/>
      <ExpenseList items={filtExp}/>
      
      
    </Card>
    );

};

export default Expense;

/*
<Expenseit title={props.exp[0].tit} 
      amount={props.exp[0].amount} 
      date={props.exp[0].date}></Expenseit>

      <Expenseit title={props.exp[1].tit} 
      amount={props.exp[1].amount} 
      date={props.exp[1].date}></Expenseit>

      <Expenseit title={props.exp[2].tit} 
      amount={props.exp[2].amount} 
      date={props.exp[2].date}></Expenseit>

      <Expenseit title={props.exp[3].tit} 
      amount={props.exp[3].amount} 
      date={props.exp[3].date}></Expenseit>
      */
