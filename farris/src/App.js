import React from 'react';
import logo from './logo.svg';
import bg from './img/bg.jpg';
import './App.css';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={bg} className="App-logo" alt="bg"/>
                <p className="tips">欢迎来到我的小破站</p>
            </header>
        </div>
    );
}

export default App;
