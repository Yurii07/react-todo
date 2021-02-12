import {
    createStore,
    compose,
    applyMiddleware
} from 'redux'
import rootReducer from "./reducers";
// Import the necessary methods for saving and loading
import { save } from "redux-localstorage-simple"
import thunk from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// const configureStore = preloadedState => (
const store = createStore(
    rootReducer,
    // preloadedState,
    composeEnhancers(
        applyMiddleware(
            thunk,
            save({ namespace: 'Todo-list' }))
    ),
)
// )

// const store = configureStore({})
window.store = store;
//window.store.getState()  call store in console

export default store