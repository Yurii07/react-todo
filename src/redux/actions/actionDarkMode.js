import { DARK_MODE } from "./actionTypes";
import createAction from "./actionCreators";

export const darkModeAction = (variable) => {
    return (dispatch, getState) => {
        // console.log('reduxThunk state', getState());
        const payload = { variable}
        dispatch(createAction(DARK_MODE, payload))
    }
}