
import React from 'react';
import '../sass/App.scss';
import Theme from '../theme.png';
import { AudioContext } from './audioContext.js';
import List from '../pages/list.js';

function Center() {
    const { state, dispatch } = React.useContext(AudioContext);
    return (
        <div className="App">
            <header className="App-center">
                <span className="Center-shadow">
                    {state.isOpenList ? <List /> :
                        <img className="Image-size" src={Theme} alt="theme"
                        />}
                </span>
            </header>
        </div>
    );
}

export default Center;