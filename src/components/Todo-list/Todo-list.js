import React from 'react';
import PropTypes from "prop-types";
import TodoItem from "../Todo-item/index";

const TodoList = ({ tasksList }) => (
    <div>
        <h1>All Todos</h1>
        <ul className="todo-list">
            {tasksList.map(({ id, text, isCompleted }) => (
                <TodoItem
                    id={id} key={id} text={text}
                    isCompleted={isCompleted}
                />
            ))}
        </ul>
    </div>
);

TodoList.propTypes = {
    tasksList: PropTypes.array,
}

TodoList.defaultProps = {
    tasksList: [],
}

export default TodoList;
