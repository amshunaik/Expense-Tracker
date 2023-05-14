import React from 'react'
import Chart from '../Chart/chart';
const ExpenseChart=props=>{
    const charData=[
        {label:'Jan',value:0},
        {label:'Feb',value:0},
        {label:'Mar',value:0},
        {label:'Apr',value:0},
        {label:'May',value:0},
        {label:'June',value:0},
        {label:'July',value:0},
        {label:'Aug',value:0},
        {label:'Sep',value:0},
        {label:'Oct',value:0},
        {label:'Nov',value:0},
        {label:'Dec',value:0},
    ];
    for (const exp1 of props.expenses){
        const expMonth=exp1.date.getMonth();
        charData[expMonth].value+=exp1.amount;
    }
    return(
        <Chart datapoints={charData}/>
    )

};
export default ExpenseChart;