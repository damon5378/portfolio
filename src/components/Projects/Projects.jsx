import React from 'react';
import styles from './Projects.module.css';
import ProjectsItem from '../.././components/Projects/ProjectsItem/ProjectsItem';

const Projects = () => {
    return (
        <div className={styles.projects}>
            <div className={styles.projects__title}>My Projects</div>
            <div className={styles.container}>
                <div className={styles.projects__items}>

                    <ProjectsItem />
                    <ProjectsItem />
                </div>
            </div>
        </div>
    );
}

export default Projects;