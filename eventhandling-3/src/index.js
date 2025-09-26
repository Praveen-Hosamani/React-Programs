import React from 'react'; 
import ReactDOM from 'react-dom/client'; 
  
function Football()
{const shoot = () =>{
   alert("G reatShot!"); 
}
 return( 
    <button onClick={shoot}>Taketheshot!</button> 
); 
}; 

const root=ReactDOM.createRoot(document.getElementById('root'));root.render(<Football/>); 

export default Football;
