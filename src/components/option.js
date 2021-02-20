import React from 'react';
import '../sass/App.scss';

const Option = (props) => {


    return (
        <div className="App">
            <header className="App-option">
                <span onClick={props.onClick}>{props.children}</span>
            </header>
        </div>
    );
}



export default Option;