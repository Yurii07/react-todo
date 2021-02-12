import {
    ADD_TASK,
    REMOVE_TODO,
    COMPLETE_TODO,
    CHANGE_FILTER,
    EDIT_TODO,
    SAVE_EDIT_TODO,
    REMOVE_ALL_COMPLETE_TODOS, REMOVE_ALL_TODOS
} from "./actionTypes";
import createAction from "./actionCreators";

export const addTask = (id, text, isCompleted) => {
    return (dispatch, getState) => {
        console.log('reduxThunk state', getState());
        const payload = { id, text, isCompleted }
        dispatch(createAction(ADD_TASK, payload))
    }
}

export const removeTodo = (id) => {
    return (dispatch, getState) => {
        const payload = { id }
        dispatch(createAction(REMOVE_TODO, payload))
    }
}

export const completeTodo = (id) => {
    return (dispatch, getState) => {
        const payload = { id }
        dispatch(createAction(COMPLETE_TODO, payload))
    }
}

export const editTodo = (id, text) => {
    return (dispatch, getState) => {
        const payload = { id, text }
        dispatch(createAction(EDIT_TODO, payload))
    }
}

export const saveEditTodo = (id, text) => {
    return (dispatch, getState) => {
        const payload = { id, text }
        dispatch(createAction(SAVE_EDIT_TODO, payload))
    }
}

export const removeAllCompleteTodos = (isCompleted) => {
    return (dispatch, getState) => {
        const payload = { isCompleted }
        dispatch(createAction(REMOVE_ALL_COMPLETE_TODOS, payload))
    }
}

export const removeAllTodos = (length) => {
    return (dispatch, getState) => {
        // const payload = { length }
        dispatch(createAction(REMOVE_ALL_TODOS))
    }
}


export const changeFilter = activeFilter => ({
    type: CHANGE_FILTER,
    activeFilter,
})
