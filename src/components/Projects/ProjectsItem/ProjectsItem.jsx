import React from 'react';
import styles from './ProjectsItem.module.css';


const ProjectsItem = () => {
    return (
        <div className={styles.projects__item}>
            <img className={styles.projects__img}></img>
            <button className={styles.projects__itemBtn}>See</button>
            <div className = {styles.projects__itemText}>
            <div className={styles.projects__itemTitle}>Title projects</div>
            <div className={styles.projects__itemDescription}>Short description</div>
            </div>
        </div>
    );
}

export default ProjectsItem;