import React from 'react';
import s from './App.module.scss'
import StartPage from "./pages/StartPage";

function App(props) {
    return (
        <div className={s.app}>
            <StartPage/>
        </div>
    );
}

export default App;