import React from "react";
import styles from "./Skills.module.css";
import SkillItem from '../.././components/Skills/SkillItem/SkillItem';

const Skills = () => {
  return (
    <div className={styles.skills}>
      <div className={styles.skills__title}>My Skills</div>
      <div className={styles.container}>
        <div className={styles.skills__items}>

          <SkillItem />
          <SkillItem />
          <SkillItem />
        </div>
      </div>
    </div>
  );
};

export default Skills;
