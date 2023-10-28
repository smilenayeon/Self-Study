import React,{useState, useReducer} from 'react'

function Spending() {

    const [spending, setSpending] = useState(0);

const bankReducer= (prevBalanace, action)=>{
    switch(action){
        case 'FOOD': return prevBalanace - spending; 
        case 'LUXURY': return prevBalanace - spending*2;
        case 'TRANSPORTATION': return prevBalanace - spending/2;
        default: return "check your input"
    }
   
}

    
    const [bank, bankDispatch]=useReducer(bankReducer, 1000);


const handleChange = (e)=>{
    setSpending(e.target.value);
};


function handleFood(){bankDispatch('FOOD')};
function handleLuxury(){bankDispatch('LUXURY')};
function handleTranportaion(){bankDispatch('TRANSPORTATION')};


  return (

    <div>
<h3>Money left: {bank}</h3>
<input type="money" placeholder="how much did you spend?" onChange={handleChange}/>
<button onClick={handleFood}>Food</button>
<button onClick={handleLuxury}>Luxury</button>
<button onClick={handleTranportaion}>Transportaion</button>
<p className="detail">Luxury has tax and service fee. So the spending doubles. <br/> 50% of Transportation is covered by the company. </p>

    </div>
  )
}

export default Spending
;