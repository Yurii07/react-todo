import {
    ADD_TASK,
    COMPLETE_TODO,
    REMOVE_TODO,
    EDIT_TODO,
    SAVE_EDIT_TODO,
    REMOVE_ALL_COMPLETE_TODOS,
    REMOVE_ALL_TODOS
} from "../actions/actionTypes";
import { load } from 'redux-localstorage-simple';

let TASKS = load({ namespace: 'Todo-list' })

if (!TASKS || !TASKS.tasks || !TASKS.tasks.length) {
    TASKS = {
        tasks: [],
    }
}

const tasks = (state = TASKS.tasks, action) => {
    switch (action.type) {
        case ADD_TASK:
            return [
                ...state, {
                    ...action.payload
                }
            ]

        case REMOVE_TODO:
            return [...state].filter(task => task.id !== action.payload.id);

        case REMOVE_ALL_TODOS:
            return []

        case REMOVE_ALL_COMPLETE_TODOS:
            return [...state].filter(task => task.isCompleted !== true);

        case COMPLETE_TODO:
            return [...state].map(task => task.id === action.payload.id
                ? { ...task, isCompleted: !task.isCompleted }
                : task
            );

        case EDIT_TODO:
            return [...state].map(el => {
                return el.id === action.payload.id
                    ? { ...el, ...action.payload }
                    : el
            });

        case SAVE_EDIT_TODO:
            return state

        default:
            return state
    }
}
export default tasks