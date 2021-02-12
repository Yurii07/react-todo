import React from 'react'
import PropTypes from "prop-types";
import TodoItem from "../Todo-item/TodoItemContainer";

const CompleteTodo = ({ tasksList }) => {
    return (
        <div>
            <h1>Completed Todos</h1>
            <ul className="todo-list">
                {tasksList.map(({ id, text, isCompleted }) => (
                    <TodoItem
                        id={id} key={id} text={text} isCompleted={isCompleted}/>
                ))}
            </ul>
        </div>
    )
}

CompleteTodo.propTypes = {
    tasksList: PropTypes.array,
    removeTodo: PropTypes.func,
    completeTodo: PropTypes.func,
    editTodo: PropTypes.func,
}

CompleteTodo.defaultProps = {
    tasksList: [],
    removeTodo: () => {
    },
    completeTodo: () => {
    },
    editTodo: () => {
    },
}

export default CompleteTodo