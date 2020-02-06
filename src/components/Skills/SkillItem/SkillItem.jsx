import React from "react";
import styles from "./SkillItem.module.css";



const SkillItem = () => {
    return (
        <div className={styles.skills__item}>
            <img className = {styles.skills__img}></img>
            <div className={styles.skills__itemTitle}>React</div>
            <div className={styles.skills__itemDescription}>
              Detailed skill description
            </div>
          </div>
    );
}

export default SkillItem;
