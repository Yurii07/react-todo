import React, { useEffect, useState } from 'react';
import TodoList from '../Todo-list/Todo-list';
import Footer from "../Footer/Footer";
import { NewToDoForm } from "../NewToDoForm";
import { ThemeProvider } from "styled-components";
import lightTheme from "../theme/light";
import darkTheme from "../theme/dark";
import Container from "../theme/Container";
import DarkMode from "../DarkMode/DarkMode";
import { uppercaseNumber } from "../common/regex";
import CompleteTodo from "../CompleteTodo/CompleteTodo";
import IncompleteTodo from "../IncompleteTodo/IncompleteTodo";

import styles from "./todo.module.scss"

const Todo = ({ tasks, filters, changeFilter, config, darkModeAction, addTask }) => {

    const [taskText, setTaskText] = useState('');
    const [todoError, setTodoError] = useState('');
    const [darkMode, setDarkMode] = useState(JSON.parse(window.localStorage.getItem('darkMode')) || false);

    useEffect(() => {
        if (!config.darkMode.variable) {
            darkModeAction(window.localStorage.getItem('theme'))
        }
    }, [config.darkMode.variable, darkModeAction])

    const handleInputChange = (event) => {
        setTaskText(event.target.value)
    }

    const validate = (event) => {
        let todoError = ''

        if (taskText.match(uppercaseNumber) || taskText.length <= 4) {
            todoError = 'invalid todo'
        }
        if (todoError) {
            setTodoError(todoError)
            return false
        }
        return true
    }

    const handleAddTask = (event, key) => {
        event.preventDefault();

        if (validate()) {
            setTodoError('')

            if (taskText.length > 4 || key === 'Enter') {
                addTask((new Date()).getTime(), taskText, false);
                event.target.reset();
            }
        }
    }

    const filterTasks = (tasks, activeFilter) => {
        switch (activeFilter) {
            case 'completed':
                return tasks.filter(task => task.isCompleted)

            case 'incompleted':
                return tasks.filter(task => !task.isCompleted)

            default:
                return tasks;
        }
    }

    const getActiveTasksCounter = tasks => tasks.filter(task => !task.isCompleted).length;

    const themeChange = (value) => {
        window.localStorage.setItem('theme', value);
        darkModeAction(value)
    }

    const toggleTheme = () => {
        setDarkMode(!darkMode);
        window.localStorage.setItem('darkMode', !darkMode);

        if (!darkMode) {
            themeChange('dark')  //dark mode on
        } else {
            themeChange('light') //dark mode off
        }
    }

    const isTasksExist = tasks && tasks.length > 0;

    return (
        <ThemeProvider theme={config.darkMode.variable === "dark" ? darkTheme : lightTheme}>

            <Container className="todo-app" style={{
                backgroundImage: `url(${process.env.PUBLIC_URL + '/img/wave.svg'})`
            }}>

                <DarkMode
                    checked={JSON.parse(window.localStorage.getItem('darkMode'))}
                    onChange={() => toggleTheme()}
                    darkMode={darkMode}/>

                <div>
                    <p><img style={{ width: '70px' }} alt="React Logo" src="/logo192.png"/></p>
                    <h1>Add new Todo</h1>
                </div>

                <div>
                    <NewToDoForm onSubmit={handleAddTask} value={taskText} onChange={handleInputChange}/>
                    <div style={{ height: '19px' }}>
                        {todoError ? <div>{todoError}</div> : null}
                    </div>
                </div>

                <div>
                    {isTasksExist && (
                        <div className={styles.todoContainer}>

                            <TodoList tasksList={tasks}/>

                            <CompleteTodo tasksList={filterTasks(tasks, 'completed')}
                                          activeFilter={'completed'}/>

                            <IncompleteTodo tasksList={filterTasks(tasks, 'incompleted')}
                                            activeFilter={'incompleted'}/>
                        </div>
                    )}
                </div>

                {isTasksExist && <Footer
                    amount={getActiveTasksCounter(tasks)}
                    activeFilter={filters}
                    changeFilter={changeFilter}/>}

            </Container>

        </ThemeProvider>
    );
}

export default Todo;