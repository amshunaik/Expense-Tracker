import React from 'react'
import ChartBar from './chartBar'
import './chart.css'

const chart=(props)=>{
    const dataval=props.datapoints.map(datapoint=>datapoint.value)
    const maxTotal=Math.max(...dataval);

    return (
        <div className='chart'>
            {props.datapoints.map(data=><ChartBar 
            key={data.label}
            value={data.value}
            maxValue={maxTotal} 
            label={data.label}/>)}
        </div>
    )

};

export default chart;