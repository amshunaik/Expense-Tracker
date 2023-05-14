import React from 'react';

import './ExpenseFilter.css';

const ExpensesFilter = (props) => {
  const filterdropdowm=(event)=>{
    var d=event.target.value;
    //console.log(event.target.value);
    props.onFilt(d)

  }

  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
        <select value={props.selected}onChange={filterdropdowm}>
          <option value='2022'>2022</option>
          <option value='2021'>2021</option>
          <option value='2020'>2020</option>
          <option value='2019'>2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;