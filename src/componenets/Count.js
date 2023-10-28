import React, {useReducer} from 'react'

function Count() {


    function countReducer(oldCount,action){
        if (action ==='INCREASE')
        {return oldCount +1;
        }else if (action === 'RESET')
        {return 0;
        }else if (action === 'DECREASE')
        {return oldCount-1;}

    };

    const [count, countDispatch] = useReducer(countReducer, 0);

    function increase (){countDispatch('INCREASE')};
    function reset(){countDispatch('RESET')};
    function decrease (){countDispatch('DECREASE')};


  return (
    <div>
    <h3>number:{count}</h3>
    <button onClick={increase}>+</button>
    <button onClick={reset}>reset</button>
    <button onClick={decrease}>-</button>

    </div>
  )
}

export default Count;