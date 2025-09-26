import { useState } from 'react'; 
import './App.css'; 
export default function Form()  
{ 
 const [name, setName] = useState(''); 
 const [email, setEmail] = useState(''); 
 const [password, setPassword] = useState(''); 
 const [submitted, setSubmitted] = useState(false); 
 
const handleName = (e) => {    
   setName(e.target.value);     
}; 
 
const handleEmail = (e) => {    
   setEmail(e.target.value);    
}; 
 
const handlePassword = (e) => {     
  setPassword(e.target.value);     
}; 
 
const handleSubmit = (e) => {   
    e.preventDefault(); 
    if (name === '' || email === '' || password === '')
       {     
        alert("Please enter all the fields"); 
    } else 
      { 
    setSubmitted(true); 
    } 

}; 
const successMessage = () => { 
    if(submitted) 
    return ( 
    <div className="success" > 
        <h1>User {name} successfully registered!!</h1> 
    </div> 
    ); }; 
return ( 
    <div className="form"> 
    <div> 
        <h1> Login to GPT Mudhol Website..😊😊 </h1> 
    </div> 
    {/* Calling to the methods */} 
    
    <form> 
    <fieldset> 
        {/* Labels and inputs for form data */} 
        <label className="label-1">Name</label> 
        <input onChange={handleName} className="input" value={name} type="text" /><br></br>        
         <label className="label-2">Email</label> 
        <input onChange={handleEmail} className="input" value={email} type="email" /><br></br>        
         <label className="label-3">Password</label> 
        <input onChange={handlePassword} className="input" value={password} type="password" /><br></br> 
        <button onClick={handleSubmit} className="btn" type="submit">         
          Submit 
        </button> 
        </fieldset> 
    </form> 
    <div className="messages">   
        {successMessage()} 
    </div> 
      
    </div> 
); 
};

 
