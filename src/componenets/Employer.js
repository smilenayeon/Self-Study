import React, {useReducer} from 'react'

function Employer() {

    const employerReducer =  (currentEmployer,action)=>{
    if  (action==='FIRE') {
        return currentEmployer-1;
    } else if (action ==='HIRE') {
        return currentEmployer +1;
    }
};

const[employer, EmployerDispatch] = useReducer(employerReducer,10);


function handleFire(){EmployerDispatch('FIRE')};
function handleHire(){EmployerDispatch('HIRE')};

  return (
    <div>

    <h3>Employer Number: {employer}</h3>
    <button onClick={handleFire}>Fire</button>
    <button onClick={handleHire}> Hire</button>
    </div>
  )
}

export default Employer;