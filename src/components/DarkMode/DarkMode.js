import React from 'react';
import "./darkMode.scss";

const DarkMode = ({ checked, darkMode, onChange }) => {

    return (
        <div className="toggle-container">
            <span style={{ color: darkMode ? "grey" : "orange" }} >☀︎</span>
            <span className="toggle">
                <input checked={checked} onChange={onChange} id="checkbox"
                       className="checkbox" type="checkbox"/>
                            <label htmlFor="checkbox"/>
            </span>
            <span style={{ color: darkMode ? "yellow" : "grey" }} >☾</span>
        </div>
    );
};

export default DarkMode;