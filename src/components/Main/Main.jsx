import React from 'react';
import styles from './Main.module.css';

const Main = () => {
    return (
        <div className = {styles.main}>
            <div className = {styles.container}>
            <div className = {styles.intro}>
                <span className = {`${styles.intro__hi} ${styles.intro__general}`}>Hi!</span>
                <span className = {`${styles.intro__name} ${styles.intro__general}`}>My name is Constantine</span>
                <span className = {`${styles.intro__prof} ${styles.intro__general}`}>I'm Front-end developer</span>
                <div className = {styles.intro__stub}>
                <img src = "" className = {styles.intro__img}></img>
                </div>
                </div>
            </div>
           
        </div>
    );
}

export default Main;