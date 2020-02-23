import React from 'react';
import styles from './ProjectsItem.module.css';


const ProjectsItem = () => {
    const dblClass = styles.projects__card + ' ' + styles.projects__middle;
    const dblClasss = styles.projects__backContent + ' ' + styles.projects__middle;
    return (
        <div className={dblClass}>
            {/* <img className={styles.projects__img}></img>
            <button className={styles.projects__itemBtn}>See</button>
            <div className = {styles.projects__itemText}>
            <div className={styles.projects__itemTitle}>Title projects</div>
            <div className={styles.projects__itemDescription}>Short description</div>
            </div> */}
            <div className={styles.projects__front}>
                <img className={styles.projects__img}></img>
            </div>
            <div className={styles.projects__back}>
                <div className={dblClasss}>
                    <div className={styles.projects__itemTitle}>Title projects</div>
                    <div className={styles.projects__itemDescription}>Short description</div>
                    <div className={styles.sm}>
                        <a href="#"><img className={styles.fb}></img></a>
                        <a href="#"><img className={styles.fb}></img></a>
                        <a href="#"><img className={styles.fb}></img></a>
                        <a href="#"><img className={styles.fb}></img></a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProjectsItem;