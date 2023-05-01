//simport React, { useEffect, useState } from 'react';
import "./App.css";
// import BoardComponent from "./components/BoardComponent";
// import UnitComponent from './components/UnitComponent';
// import { Board } from "./models/Board";
// import { Fraction } from './models/Fraction';
// import { Hex } from './models/Hex';
// import { ToolTipUnit } from './models/ToolTipUnit';
// import { Unit } from './models/unit/Unit';
import { PlayPage } from './pages/PlayPage/PLayPage';
import { MainPage } from './pages/MainPage/MainPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { InfoPage } from './pages/PlayPage/InfoPage';



const App = () => {
  
    return (
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<MainPage/>}/>
            <Route path='/play' element={<PlayPage/>}/>
            <Route path='/info' element={<InfoPage/>}/>
        </Routes>
        </BrowserRouter>
 
    );
};

export default App;

