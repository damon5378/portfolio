import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className={styles.footer__title}>Constantine</div>
            <div className={styles.container}>
                <div className={styles.footer__links}>

                    <div className = {styles.footer__link}>
                        <a><img className = {styles.footer__linkVk}></img>VK</a>
                    </div>

                    <div className = {styles.footer__link}>
                        <a><img className = {styles.footer__linkFb}></img>FB</a>
                    </div>

                    <div className = {styles.footer__link}>
                        <a><img className = {styles.footer__linkInst}></img>Inst</a>
                    </div>

                    <div className = {styles.footer__link}>
                        <a><img className = {styles.footer__linkLink}></img>LinkIn</a>
                    </div>

                </div>
                <div className = {styles.footer__copyright}>
                    &copy; 2020 All right reserved
                </div>
            </div>
        </div>
    );
}

export default Footer;