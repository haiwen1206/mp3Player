
import React from 'react';
import '../sass/App.scss';
import Maintop from './maintop.js';
import Timeline from './timeline.js';

function Main() {

    return (
        <div className="App">
            <header className="App-main">
                <Maintop />
                <Timeline />
            </header>
        </div>
    );
}

export default Main;