import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css'

function Football() {
    const shoot = () => {
        alert("Great Shot!");
    }

    return (

        <div className='conetnt'>
            <button onClick={shoot}>Take the shot!</button>
        </div>

    );

}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Football />);

export default Football;
