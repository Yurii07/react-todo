import React from 'react';
import PropTypes from "prop-types";
import styles from "./footer.module.scss"
import Button from "../Button/ButtonContainer";

const FILTERS_BTN = [
    {
        text: 'All',
        id: 'all',
    },
    {
        text: 'Active',
        id: 'active',
    },
    {
        text: 'Completed',
        id: 'completed'
    }
];

const Footer = ({ amount, activeFilter, changeFilter }) => (
    <div className={styles.footer}>

        <Button/>

        {/*<span className={styles.amount}>{`${amount} Tasks left`}</span>*/}
        {/*<div className={styles.btnGroup}>*/}
        {/*    {FILTERS_BTN.map(({ text, id }) => (*/}
        {/*        <button onClick={() => {*/}
        {/*            changeFilter(id)*/}
        {/*        }}*/}
        {/*                key={id}*/}
        {/*                className={id === activeFilter ? styles.active : styles.filterBtn}*/}
        {/*        >{text}</button>*/}
        {/*    ))}*/}
        {/*</div>*/}
    </div>
);

Footer.propTypes = {
    amount: PropTypes.number,
    activeFilter: PropTypes.string,
    changeFilter: PropTypes.func,
}
Footer.defaultProps = {
    amount: 0,
    activeFilter: 'all',
    changeFilter: () => {
    },
}

export default Footer;