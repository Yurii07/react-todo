import React from 'react';
import styles from './button.module.scss'

const Button = ({ removeAllCompleteTodos, removeAllTodos }) => {

    const handleRemoveAllCompleteTodos = () => {
        const getIsCompleted = tasks => tasks.filter(task => task.isCompleted === true);
        removeAllCompleteTodos(getIsCompleted)
    }

    return (
        <div>
            <button onClick={handleRemoveAllCompleteTodos} className={styles.button}>Delete done tasks</button>
            <button onClick={removeAllTodos} className={styles.button}>Delete all tasks</button>
        </div>
    );
};

export default Button;
