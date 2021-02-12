import React from 'react';
import TodoInput from "./Todo-input/Todo-input";
import styles from "./newToDoForm.module.scss"

export const NewToDoForm = ({ onChange, taskText,onSubmit, }) => {

    return (
        <div>
            <form className={styles.todoForm} onSubmit={onSubmit}>

                <label className="field">
                    <TodoInput type="text" onChange={onChange} value={taskText} />
                </label>
                <input type="submit" value="Отправить" className={styles.todoButton} />
            </form>
        </div>
    );
}
