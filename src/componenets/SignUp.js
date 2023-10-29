import React,{useState} from 'react';
import PasswordErrorMessage from "./PasswordErrorMessage";

function SignUp() {

 const[firstName, setFirstName] = useState("");
    const[lastName, setLastName] = useState("");
    const[email, setEmail] = useState("");
    const[password, setPassword] = useState("");
    const[role, setRole] = useState("role");

    const firstNameChange = (e)=>{setFirstName(e.target.value)};
    const lastNameChange = (e)=>{setLastName(e.target.value)};
    const emailChange = (e)=>{setEmail(e.target.value)};
    const passwordChange = (e)=>{setPassword({...password, value:e.target.value})};
    const roleChange = (e)=>{setRole(e.target.value)};

    const getIsFormValid = ()=>{
            return(firstName &&
                   email &&
                   password.value.length >= 8 &&
                   role !== "role");
        };


    const clearForm=()=>{
        setFirstName("");
        setLastName("");
        setEmail("");
        setPassword({value:"", isTouched:false});
        setRole("role");
    };

    const handleSubmit= (e)=>{
        e.preventDefault();
        alert("successfullly signed up!");
        clearForm();


    };


    return (
    <div>
        <h3>Sign up</h3>
        <form>
        <fieldset>
            <label htmlFor="firstName">First-Name<sup>*</sup></label>
            <input key="firstName" type="text" name="firstName" value={firstName} onChange={firstNameChange} required/>

            <label htmlFor="lastName">Last-Name</label>
            <input key="lastName" name="lastName" type="text" value={lastName} onChange={lastNameChange}/>

            <label htmlFor="email">E-mail<sup>*</sup></label>
            <input key="email" name="email" type="email" value={email} onChange={emailChange} required/>

            <label htmlFor="password">Password<sup>*</sup></label>
            <input key="password" name="password" type="password" value={password.value} onChange={passwordChange} onBlur={()=>{setPassword({...password, isTouched:true})}} required/>
            {password.isTouched && password.value.length < 8 ?  (<PasswordErrorMessage />): null }
          

            <label htmlFor="Role">Role<sup>*</sup></label>
            <select onChange={roleChange} required>
                <option value="role">Choose the role</option>
                <option value="individual">Individual</option>
                <option value="business">Business</option>
            </select>
            <button onClick={handleSubmit} disabled={!getIsFormValid()}>Submit</button>
            </fieldset>
        </form>
    </div>
  )
}

export default SignUp;