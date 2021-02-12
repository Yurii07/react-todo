import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle, faCircle, faTimes, faPencilAlt } from '@fortawesome/free-solid-svg-icons'
import './todoItem.module.scss';
import PropTypes from "prop-types";
import styles from './todoItem.module.scss'

const TodoItem = ({ text, isCompleted, id, editTodo, removeTodo, completeTodo, }) => {
    const [isEdit, setEdit] = useState(false);
    const [todoText, setTodoText] = useState(text);
    let textInput = React.createRef();

    const handleEditTodo = () => {
        setEdit(true);
    }

    const handleKeypress = (event) => {
        const changedText = event.target.value;
        if (event.key === 'Enter') {
            setEdit(false)
            editTodo(id, changedText)
        }
    }

    const handleEditingChange = (event) => {
        const changedText = event.target.value;
        setTodoText(changedText)
    }

    const handleEditingSave = () => {
        setEdit(false)
        editTodo(id, textInput.current.value)
    }

    const handleEditingUnSave = () => {
        setEdit(false)
    }

    return (
        <li className={styles.todoItem + ' ' + styles.todoRow}>

            {isCompleted
                ? <FontAwesomeIcon icon={faCheckCircle} onClick={() => completeTodo(id)}/>
                : <FontAwesomeIcon icon={faCircle} onClick={() => completeTodo(id)}/>}

            <span className={isCompleted ? (styles.text + ' ' + styles.completed) : styles.text}>{text} </span>

            <div className={styles.icons}>
                <FontAwesomeIcon icon={faPencilAlt} onClick={handleEditTodo} className={styles.editIcon}/>

                <FontAwesomeIcon onClick={() => removeTodo(id)} icon={faTimes} className={styles.deleteIcon}/>
            </div>
            {isEdit ? <div style={{display: "flex",zIndex: 1,
                position: 'absolute',
                left: 0}}>
                <input
                    onKeyDown={handleKeypress}
                    onChange={handleEditingChange}
                    value={todoText}
                    ref={textInput}
                />
                <button onClick={handleEditingSave}> save</button>
                <button onClick={handleEditingUnSave}>cancel</button>
            </div> : null}

        </li>
    );
};

TodoItem.propTypes = {
    text: PropTypes.string,
    isCompleted: PropTypes.bool,
    removeTodo: PropTypes.func,
    id: PropTypes.number,
    completeTodo: PropTypes.func,
    editTodo: PropTypes.func,
}

TodoItem.defaultProps = {
    text: '',
    isCompleted: false,
    removeTodo: () => {
    },
    id: 0,
    completeTodo: () => {
    },
    editTodo: () => {
    }
}

export default TodoItem;
