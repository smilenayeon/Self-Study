import React,{useState} from 'react'
import {RadioGroup, RadioOption} from './RadioGroup';

function HowSurvey() {
  const [selected, setSelected] = useState("");
  const handleSubmit = ()=>{
    setSelected("");
    alert ("Thank you for doing out survey!");
  }
  return (
   
    <div>
        <RadioGroup onChange={setSelected} selected={selected}>
        <RadioOption value="social_media">Social Media</RadioOption>
        <RadioOption value="friends">Friends</RadioOption>
        <RadioOption value="advertising">Advertising</RadioOption>
        <RadioOption value="other">Other</RadioOption>
        </RadioGroup>
          <button disabled={!selected} onClick={handleSubmit}>Submit</button>
    </div>
  
  )
}

export default HowSurvey;