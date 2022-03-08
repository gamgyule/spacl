import React, { Fragment } from 'react';
import logo from './logo.png';
import './App.css';
import './stylus.styl';

import Nav from './component/Nav';
import Minting from './component/Minting';



function App() {

    return (
        <Fragment>
            <Nav></Nav>
            <Minting></Minting>
        </Fragment>
    );
}

export default App;
