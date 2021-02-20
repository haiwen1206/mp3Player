import React, { useState, useEffect, useContext } from 'react';
import { AudioContext } from './audioContext.js';

const useAudio = () => {
    const [response, setResponse] = useState(null);
    const { state, dispatch } = useContext(AudioContext);
    useEffect(() => {
        //         dispatch(
        //             {
        //                 type: 'FETCH_AUDIO',
        //                 payload: {
        //                     audioData: response
        //                 }
        //             },
        //             //console.log('有執行fetch嗎', responseGet.data)
        //         )
    }, [dispatch, response]);
    return response;
}
export default useAudio;