import React, {useReducer} from 'react'

function Money() {

const [money, moneyDispatch] = useReducer(moneyReducer,500);

function moneyReducer(currentMoney, action){
    if (action==="BUY"){
        return  currentMoney-100;
    }else if (action==='PAID'){
        return currentMoney +200;
    }

}

    function handleBuy(){ moneyDispatch('BUY')};
    function handlePaid(){moneyDispatch('PAID')};

  return (

    <div>
<h3>money:{money}</h3>
<button onClick={handleBuy}>Buy</button>
<button onClick={handlePaid}>Get Paid</button>
    </div>
  )
}

export default Money;