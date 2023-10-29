import React from 'react'

function DessertList( props) {
    const newList= props.data.filter((dessert)=>(dessert.calories<500));
   const sortedList = newList.sort((a,b)=>a.calories-b.calories);
  return (
    <div>
        <ul>
            {sortedList.map((dessert)=><li>{dessert.name}- {dessert.calories}Cal</li>)}
        </ul>
    </div>
  )
}

export default DessertList;
