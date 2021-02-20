export const initialState = {
    isPlay: false,
    isOpenList: false,
    nowPlaying: '',
    volume: '5',
    isReAll: false,
    isReRan: false,
    playNum: -1,
    centerData: [],
    ifEndPlay: false,
    timeValue: 1,
};

export const controlReducer = (state, action) => {
    switch (action.type) {

        case 'TURN_PLAY':
            return {
                ...state,
                isPlay: !state.isPlay
            };

        case 'REPEAT_All':
            return {
                ...state,
                isReAll: !state.isReAll
            };

        case 'REPEAT_RANDOM':
            return {
                ...state,
                isReRan: !state.isReRan
            };

        case 'FETCH_AUDIO':
            return {
                ...state,
                audioData: action.payload.audioData
            };

        case 'OPEN_LIST':
            return {
                ...state,
                isOpenList: !state.isOpenList
            };

        case 'NOW_PLAY':
            return {
                ...state,
                nowPlaying: action.payload.nowPlaying,
                playNum: action.payload.playNum,
            };

        case 'TURN_VOL':
            return {
                ...state,
                volume: action.payload.volume
            };

        case 'CENTER_DATA':
            return {
                ...state,
                centerData: action.payload.centerData,
            };

        case 'END_PLAY':
            return {
                ...state,
                ifEndPlay: !state.ifEndPlay,
            };

        case 'STOP_PLAY':
            return {
                ...state,
                isPlay: false,
            };

        case 'TIME_VALUE':
            return {
                ...state,
                timeValue: action.payload.timeValue,
            };

        default:
            return state
    }
};

export default controlReducer;