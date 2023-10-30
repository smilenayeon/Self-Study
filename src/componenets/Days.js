import React,{useState} from 'react'
import usePrevious  from '../usePrevious';

function Days() {

    const [day,setDay]=useState("Monday");
    const prevDay = usePrevious(day);

    const getNextDay = (e)=>{
        e.preventDefault();
        switch(day){
            case "Monday":setDay("Tuesday");
            break;
            case "Tuesday": setDay("Wednesday");
            break;
            case "Wednesday": setDay("Thursday");
            break;
            case "Thursday": setDay("Friday");
            break;
            case "Friday": setDay("Saturday");
            break;
            case "Saturday":setDay("Sunday");
            break;
            case "Sunday": setDay("Monday");
            break;
            default:console.log("unknown day");
        }
    }

  return (
    <div>
        <h3>Today is: {day} {prevDay &&<span>| Yesterday was: {prevDay}</span>}</h3>
        <button onClick={getNextDay}> Get next day</button>
    </div>
  )
}

export default Days;