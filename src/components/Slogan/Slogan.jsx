import React from 'react';
import styles from './Slogan.module.css';

const Slogan = () => {
    return (
        <div className = {styles.slogan}>
            <div className={styles.slogan__title}>Consider remote work</div>
            <div className={styles.container}>
                <button className = {styles.slogan__btn}>Hire Me</button>
            </div>
        </div>
    );
}

export default Slogan;