
import React from 'react';
import '../sass/App.scss';
import last from '../image/last.png';
import next from '../image/next.png';
import { AudioContext } from './audioContext.js';
import songA from '../music/Red-Hot-Chili-Peppers-Californication.mp3';
import songB from '../music/Red-Hot-Chili-Peppers-Cant-Stop.mp3';
import songC from '../music/Red-Hot-Chili-Peppers-Give-It-Away.mp3';
import songD from '../music/Red-Hot-Chili-Peppers-Otherside.mp3';
import songE from '../music/Red-Hot-Chili-Peppers-The-Getaway.mp3';

function Timeline() {
    const { state, dispatch } = React.useContext(AudioContext);
    const [renderMediaData, setRenderMediaData] = React.useState(state.centerData);
    const [playSong, setPlaySong] = React.useState(null);
    let inputRef = React.useRef();

    const [slide, setSlide] = React.useState(0);
    const useSlider = (min, max, defaultValue, label, id) => {
        console.log('inputRef', inputRef);
        console.log('state.isOpenList', state.isOpenList);
        if (!state.isOpenList && inputRef && inputRef.current) {
            inputRef.current.currentcurrentSrc = "http://localhost:3000/null";
        }

        if (state.ifEndPlay && inputRef && inputRef.current && inputRef.current.currentTime) {
            //inputRef.current = null;
            dispatch(
                {
                    type: 'END_PLAY',
                    payload: {
                        ifEndPlay: false
                    }
                },
            )
        }


        const handleChange = e => {
            setSlide(e.target.value);
            inputRef.current.currentTime = (e.target.value / 100) * inputRef.current.duration;
        }

        React.useEffect(() => {
            dispatch(
                {
                    type: 'TIME_VALUE',
                    payload: {
                        timeValue: slide
                    }
                },
            )
        }, [])

        const props = {
            type: 'range',
            id,
            min,
            max,
            step: 0.5,
            value: slide,
            defaultValue,
            onChange: handleChange
        }
        return props
    }

    const getCurTime = () => {
        if (inputRef && inputRef.current && inputRef.current.currentTime) {
            setSlide((inputRef.current.currentTime / inputRef.current.duration) * 100);
        }

    }

    const toLastClick = () => {
        let toLast = state.playNum;
        if (toLast > 0) {
            toLast = toLast - 1;
        } else {
            toLast = 0;
        }
        dispatchData(toLast);
    }

    const toNextClick = () => {
        let toLast = state.playNum;
        if (toLast < 4) {
            toLast = toLast + 1;
        } else {
            toLast = 4;
        }
        dispatchData(toLast);
    }

    const dispatchData = (toLast) => {
        dispatch(
            {
                type: 'NOW_PLAY',
                payload: {
                    playNum: toLast
                }
            },
        )
        const newArrMediaData = [...state.centerData];
        if (newArrMediaData && newArrMediaData[state.playNum] && newArrMediaData[state.playNum].isChange) {
            newArrMediaData[state.playNum].isChange = false;
        }
        newArrMediaData[toLast].isChange = !newArrMediaData[toLast].isChange;
        setRenderMediaData(newArrMediaData);

        // dispatch(
        //     {
        //         type: 'NOW_PLAY',
        //         payload: {
        //             playNum: -1
        //         }
        //     },
        // )
    }

    React.useEffect(() => {
        dispatch(
            {
                type: 'CENTER_DATA',
                payload: {
                    centerData: renderMediaData
                }
            },
        )

    }, [dispatch, renderMediaData]);

    React.useEffect(() => {
        if (state.isPlay) {
            inputRef.current.play();
            //console.log('播放時間', inputRef.current.currentTime);
        } else if (!state.isPlay) {
            inputRef.current.pause()
            //console.log('暫停時間', inputRef.current.currentTime);
        }
    })

    React.useEffect(() => {
        if (state.ifEndPlay) {
            inputRef.current.currentTime = 0;
            dispatch(
                {
                    type: 'END_PLAY',
                },
            )
        }
    })

    React.useEffect(() => {
        if (inputRef) {
            var audioInfor = document.getElementById('soGoodMp3');
            //console.log('audioInfor', audioInfor);
        }
    }, [inputRef])

    React.useEffect(() => {

        if (state.isOpenList) {
            switch (state.playNum) {
                case 0:
                    setPlaySong(songA);
                    break;
                case 1:
                    setPlaySong(songB);
                    break;
                case 2:
                    setPlaySong(songC);
                    break;
                case 3:
                    setPlaySong(songD);
                    break;
                case 4:
                    setPlaySong(songE);
                    break;
                default:
                    setPlaySong(null);
            }
        } else {
            setPlaySong(null);
        }


    }, [state.isOpenList, state.playNum])

    let ddd;
    let eee;
    const useTimeFormat = () => {

        if (inputRef && inputRef.current && inputRef.current.duration) {
            console.log('怎', inputRef.current.duration);
            var min = Math.floor(inputRef.current.duration / 60);
            var sec = parseInt(inputRef.current.duration - (min * 60));
            while (min.length < 2) { min = '0' + min; }
            while (sec.length < 2) { sec = '0' + min; }
            ddd = min + ':' + sec;
        }
        return ddd;
    }

    const useTimeFormat2 = () => {
        if (inputRef && inputRef.current && inputRef.current.currentTime) {
            var min = Math.floor(inputRef.current.currentTime / 60);
            var sec = parseInt(inputRef.current.currentTime - (min * 60));
            while (min.length < 2) { min = '0' + min; }
            while (sec.length < 2) { sec = '0' + min; }
            eee = min + ':' + sec;
        }
        return eee;
    }

    const sliderProps = useSlider(1, 100, 0, "Threshold", 'soGoodMp3');
    const timeDuration = useTimeFormat();
    const timeCurrentTime = useTimeFormat2();

    return (
        <div className="App">
            <header className="App-time">
                <img className="Img-time" src={last} alt="last" onClick={toLastClick} />
                <div className="time-inner">
                    <p className="App-duration">
                        {inputRef && inputRef.current && inputRef.current.currentTime
                            ? `${timeCurrentTime}`
                            : '00:00'}
                    </p>
                    <input className="App-slider" {...sliderProps} />
                    <p className="App-duration">
                        {inputRef && inputRef.current && inputRef.current.duration
                            ? `${timeDuration}`
                            : '00:00'}
                    </p>
                </div>
                <audio ref={inputRef} src={state.isOpenList ? `${playSong}` : null} onTimeUpdate={getCurTime} />
                <img className="Img-time" src={next} alt="next" onClick={toNextClick} />
            </header>
        </div>
    );
}

export default Timeline;