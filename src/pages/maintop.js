
import React from 'react';
import '../sass/App.scss';
import Control from './control.js';
import Center from './center.js';
import BurgerMenu from './burgerMenu.js';

function Maintop() {
    return (
        <div className="App">
            <header className="App-maintop">
                <Control /><Center /><BurgerMenu />
            </header>
        </div>
    );
}

export default Maintop;