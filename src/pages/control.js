
import React, { useContext } from 'react';
import '../sass/App.scss';
import reAll from '../image/re1.png';
import reAllOn from '../image/re1on.png';
import reRam from '../image/re2.png';
import reRamOn from '../image/re2on.png';
import { AudioContext } from './audioContext.js';

function Control() {
    const { state, dispatch } = useContext(AudioContext);
    const [currentRangeValue, setCurrentRangeValue] = React.useState('沒改');
    const [pngClass, setPngClass] = React.useState('Control-PNG5');

    const handleInputChange = e => {
        setCurrentRangeValue(e.target.value);
    };

    React.useEffect(() => {
        switch (currentRangeValue) {
            case '0':
                setPngClass('Control-PNG0');
                break;
            case '1':
                setPngClass('Control-PNG1');
                break;
            case '2':
                setPngClass('Control-PNG2');
                break;
            case '3':
                setPngClass('Control-PNG3');
                break;
            case '4':
                setPngClass('Control-PNG4');
                break;
            case '5':
                setPngClass('Control-PNG5');
                break;
            default:
                setPngClass('Control-PNG5');
        }

        dispatch(
            {
                type: 'TURN_VOL',
                payload: {
                    volume: currentRangeValue
                }
            },
        )

    }, [currentRangeValue, dispatch]);


    const playClick = () => {
        dispatch(
            {
                type: 'TURN_PLAY',
                payload: {
                    isPlay: true
                }
            },
        )

        dispatch(
            {
                type: 'END_PLAY',
            },
        )
    }

    const ReAll = () => {
        dispatch(
            {
                type: 'REPEAT_All',
            },
        )
    }

    const ReRan = () => {
        dispatch(
            {
                type: 'REPEAT_RANDOM',
            },
        )
    }

    return (
        <div className="App">
            <header className="App-control">
                <div className="Control-inner">
                    <div className="Inner-top">
                        <button
                            className={state.isPlay ? "pause" : "play"}
                            onClick={playClick}>
                        </button>
                    </div>
                    <div className="Inner-bottom">
                        <input
                            className={`Control-input ${pngClass}`}
                            onChange={handleInputChange}
                            type={"range"}
                            min={0}
                            defaultValue={5}
                            max={5}
                            step={1}
                            list={"tick-list"}
                        />
                        <datalist id="tick-list">
                            <option data-style="">0</option>
                            <option data-style="">1</option>
                            <option data-style="">2</option>
                            <option data-style="">3</option>
                            <option data-style="">4</option>
                            <option data-style="">5</option>
                        </datalist>
                        <img className="Img-control" src={state.isReAll ? `${reAllOn}` : `${reAll}`} alt="reAll" onClick={ReAll} />
                        <img className="Img-control" src={state.isReRan ? `${reRamOn}` : `${reRam}`} alt="reRam" onClick={ReRan} />
                    </div>
                </div>
            </header>
        </div>
    );
}

export default Control;