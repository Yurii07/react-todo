import React from 'react';
import PropTypes from 'prop-types';
import styles from './todoInput.module.scss'
import styled from 'styled-components'

const StyledInput = styled.input`
  background: ${props => props.theme.colors.background};
  color: ${props => props.theme.colors.textColor};

  ::placeholder {
    background: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.textColor};
  }
`

const TodoInput = ({ taskText, onChange }) => (
    <div className="todo-input-wrapper">
        <i className="fas fa-plus"/>
        <StyledInput
            className={styles.todoInput}
            placeholder="Enter new task..."
            onChange={onChange}
            value={taskText}

        />

    </div>
);

TodoInput.propTypes = {
    onChange: PropTypes.func,
    value: PropTypes.string,
}

TodoInput.defaultProps = {
    onChange: () => {
    },
    value: '',
}

export default TodoInput;