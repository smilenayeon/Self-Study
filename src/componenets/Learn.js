
import React, {useState, useEffect} from "react";

function Learn() {

const [data, setData] = useState();

useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((resp) => resp.json()) 
      .then((apiData) => setData(apiData.message)); 
  }, []);

return (
    <div>
<img height= "120px" src={data} alt="random dog pic"/>

    </div>
  );
}

export default Learn;