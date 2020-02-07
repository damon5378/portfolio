import React from 'react';
import styles from './Contacts.module.css';

const Contacts = () => {
    return (
        <div className = {styles.contacts}>
            <div className = {styles.container}>
            <div className = {styles.contacts__title}>Contacts</div>
            <form className = {styles.contacts__form}>
                <input type = "text" placeholder = "Name"></input>
                <input type = "email" placeholder = "E-mail"></input>
                <textarea></textarea>
            </form>
            <button className = {styles.contacts__btn}>Send</button>
            </div>
        </div>
    );
}

export default Contacts;