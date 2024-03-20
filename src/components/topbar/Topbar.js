// Header.js
import React from 'react';
import styles from './Topbar.module.css'

const Topbar = ({ title }) => {
    return (
        <header className={styles.header}>
            <h1 className={styles.title}>{title}</h1>
        </header>
    );
};

export default Topbar;
