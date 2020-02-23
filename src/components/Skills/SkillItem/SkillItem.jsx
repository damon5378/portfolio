import React from "react";
import styles from "./SkillItem.module.css";



const SkillItem = () => {
    return (
        <div className={styles.skills__item}>
            {/* <img className = {styles.skills__img}></img>
            <div className={styles.skills__itemTitle}>React</div>
            <div className={styles.skills__itemDescription}>
              Detailed skill description
            </div> */}

            <li>
            <h3>HTML5</h3><span className={styles.skills__bar}><span className={styles.skills__html}></span></span>
            </li>

            <li>
            <h3>CSS3</h3><span className={styles.skills__bar}><span className={styles.skills__css}></span></span>
            </li>

            <li>
            <h3>JavaScript</h3><span className={styles.skills__bar}><span className={styles.skills__js}></span></span>
            </li>

            <li>
            <h3>React</h3><span className={styles.skills__bar}><span className={styles.skills__react}></span></span>
            </li>
            
          </div>
    );
}

export default SkillItem;
