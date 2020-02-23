import React from 'react';
import styles from './Contacts.module.css';

const Contacts = () => {
    return (
            
        
        <div className = {styles.contacts}>
            
            <div className = {styles.container}>
            <div className = {styles.contacts__title}>Contacts</div>
            <form className = {styles.contacts__form}>
            
                <div className={styles.contacts__items}>

                <input type = "text" placeholder = "Name"></input>
                <input type = "email" placeholder = "E-mail"></input>
                <textarea placeholder = "Message"></textarea>

                </div>
                <button className = {styles.contacts__btn}>Send</button>

            </form>
                
            
            </div>
        </div>


    
    );
}

export default Contacts;