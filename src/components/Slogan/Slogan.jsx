import React from 'react';
import styles from './Slogan.module.css';

const Slogan = () => {
    return (
        <div className = {styles.slogan}>
            <div className={styles.slogan__title}>Consider remote work</div>
            <div className={styles.container}>
                <a href ="#">
                <span className = {styles.slogan__btn}>Hire Me</span>
                <div className = {styles.sloganLiquid}></div>
                </a>
            </div>
        </div>
    );
}

export default Slogan;