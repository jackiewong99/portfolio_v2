import React from 'react';
// Styling
import styles from './Projects.module.css';

const ProjectCard = () => {
  return (
    <div className={styles.cardContainer}>
      <header>
        <h2 className={styles.cardHeader}>Projects</h2>
      </header>
      <section>
        <div className={styles.cardDescription}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. In id
          dolores, porro aspernatur aut vitae expedita ab magni saepe doloremque
          voluptas alias tempore iusto corporis exercitationem pariatur est
          quisquam assumenda?
        </div>
      </section>
      <section>
        <ul className={styles.cardTechList}>
          <li>Node.js</li>
          <li>Node.js</li>
          <li>Node.js</li>
        </ul>
      </section>
    </div>
  );
};

export default ProjectCard;
