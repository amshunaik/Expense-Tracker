
//import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
//import Expenseit from './components/ExpenseItem'
import Expense from './components/Cost/Expense';
import NewExpense from './components/NewExpense/NewExpense';
//import ExpensesFilter from './components/Cost/ExpenseFilter';
 //let name="Amshu";
const Dummy=[{id:"e1", tit:"Candle",amount:50, date:new Date(2021,1,8)},
 {id:"e2" ,tit:"Apple",amount:85, date:new Date(2022,2,8)},
 {id:"e3" ,tit:"Mango",amount:150, date:new Date(2021,8,8)},
 {id:"e4" ,tit:"Rice",amount:250, date:new Date(2019,3,8)},]

function App(props) {

  const [expenses,setExpenses]=useState(Dummy)

  const addNew = exp=>{
	//const a=[exp,...expenses];
	console.log(exp.tit)
	//expenses=props.onCheck
	setExpenses([exp,...expenses]);
};
  return (
    <>
    <nav className="s">
      <h1>Expense-Tracker </h1>
      <NewExpense  onAddNew={addNew}/>
	 

      <Expense exp={expenses} />
      

      

    </nav>
    </>

  );
}

export default App;
