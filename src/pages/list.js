import React from 'react';
import Option from '../components/option.js';
import mediaData from './mediaData.js';
import { AudioContext } from '../pages/audioContext.js';

const List = () => {
    const { state, dispatch } = React.useContext(AudioContext);

    let arrMediaData = [];

    const [renderMediaData, setRenderMediaData] = React.useState(arrMediaData);

    const choose = (index) => {
        let songName = '';
        switch (index) {

            case 0:
                songName = 'Californication'

                break;
            case 1:
                songName = 'Cant-Stop'
                break;
            case 2:
                songName = 'Give-It-Away'
                break;
            case 3:
                songName = 'Otherside'
                break;
            case 4:
                songName = 'The-Getaway'
                break;
            default:
                songName = ''
        }

        dispatch(
            {
                type: 'NOW_PLAY',
                payload: {
                    nowPlaying: songName,
                    playNum: index
                }
            },
        )
    }

    const doFor = () => {
        if (mediaData && mediaData.length) {
            for (let i = 0; i < mediaData.length; i++) {
                arrMediaData.push({ name: mediaData[i].fileName, isChange: false });
                if (state.playNum > -1 && arrMediaData && arrMediaData[state.playNum]) {
                    //arrMediaData[state.playNum].isChange = true;
                }
            }
        }
    }

    const changeColor = index => {
        const newArrMediaData = [...arrMediaData];



        if (newArrMediaData && newArrMediaData[state.playNum] && newArrMediaData[state.playNum].isChange) {
            newArrMediaData[state.playNum].isChange = !newArrMediaData[state.playNum].isChange;
        }

        newArrMediaData[index].isChange = !newArrMediaData[index].isChange;




        setRenderMediaData(newArrMediaData);

        choose(index);
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

    const renderOption = () => {
        doFor();
        return state.centerData.map((item, index) => (
            <Option key={index} onClick={() => changeColor(index)}>
                <h1 style={item.isChange ? { color: '#f09aa8', fontWeight: '900' } : {}} >{item.name}</h1>
            </Option>
        ))
    }

    return (
        <div className="App">
            <header className="App-list">
                {renderOption()}
            </header>
        </div>
    )

}

export default List;