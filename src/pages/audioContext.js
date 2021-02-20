import React, { createContext, useReducer } from 'react';
import { initialState, controlReducer } from "../Reducer/control.js";

export const AudioContext = createContext(initialState);

const AudioContextProvider = props => {
    const [state, dispatch] = useReducer(controlReducer, initialState);
    console.log('state', state);
    return (
        <AudioContext.Provider value={{ dispatch, state }}>
            {props.children}
        </AudioContext.Provider>
    );
};

export default AudioContextProvider;