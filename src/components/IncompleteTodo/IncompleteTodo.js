import React from 'react';
import TodoItem from "../Todo-item/TodoItemContainer";

const IncompleteTodo=(props)=> {
    const { tasksList } = props;
    return (
        <div>
            <h1>Incomplete Todos</h1>
            <ul className="todo-list">
                {tasksList.map(({ id, text, isCompleted }) => (
                    <TodoItem id={id} key={id} text={text} isCompleted={isCompleted}/>
                ))}
            </ul>
        </div>
    )
}

export default IncompleteTodo;