
import React from 'react';
import '../sass/App.scss';
import Burger from '../components/button/burger.js';
import { AudioContext } from './audioContext.js';

function BurgerMenu() {
    const { state, dispatch } = React.useContext(AudioContext);
    return (
        <div className="App">
            <header className="App-burger">
                <Burger
                    stateBurger={state.isOpenList}
                    dispatch={dispatch}
                    data={state.centerData}
                />
            </header>
        </div>
    );
}

export default BurgerMenu;