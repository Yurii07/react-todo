import { DARK_MODE } from "../actions/actionTypes";

// import { load } from 'redux-localstorage-simple';
// let TASKS = load({ namespace: 'DarkMode' })
// if (!TASKS || !TASKS.tasks || !TASKS.tasks.length) {
//     TASKS = {
//         tasks: [],
//     }
// }

const initialState = {
    // config: null
    darkMode: {}
}

export default function (state = initialState, action) {
    switch (action.type) {
        case DARK_MODE:
            return { ...state, darkMode: action.payload }
        default:
            return state;
    }
}