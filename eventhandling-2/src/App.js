import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';

function Football() {
    const shoot = (a) => {
        alert(a);
    }
    return (
        <div conetnt>
            <button onClick={() => shoot("Goal!")}>Take the shot!</button>
        </div>
    );

}
const root = ReactDOM.createRoot(document.getElementById('root')); root.render(<Football />);

export default Football;