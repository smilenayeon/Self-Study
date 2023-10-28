import React, {useReducer, useState} from 'react'

function Money() {

const [amount, setAmount] =useState(0);



const handleAmount = (e)=>{
    
    setAmount(e.target.value);
    
};

const [money, moneyDispatch] = useReducer(moneyReducer,500);

function moneyReducer(currentMoney, action){
    if (action ==='BUY'){
        return  currentMoney - Number(amount);
    }else if (action ==='PAID'){
        return currentMoney + Number(amount);
    }

}

    function handleBuy(){ moneyDispatch('BUY')};
    function handlePaid(){moneyDispatch('PAID')};

  return (

    <div>
<h3>money:{money}</h3>
<input type="money" placeholder="the amount" onChange={handleAmount}/>

<button onClick={handleBuy}>Buy</button>
<button onClick={handlePaid}>Get Paid</button>
    </div>
  )
}

export default Money;