import data from "../data.json";
import React, {useState, useEffect} from "react";

function Learn() {

const [days, setDays] = useState([]);

 useEffect(() => {
    setDays(data.days);
},[]);

return (
    <div>
<ul>
{days.map(day => (<li key={day.id}>day:{day.day}</li>))}
</ul>

    </div>
  );
}

export default Learn;