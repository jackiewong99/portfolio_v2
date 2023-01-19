import React from 'react';
import ProjectCard from './ProjectCard';
// Styling
import styles from './Projects.module.css';

const Projects = () => {
  return (
    <div className={styles.projects}>
      <header>
        <h1 className={styles.projectsHeader}>Projects</h1>
      </header>
      <section>
        <ul className={styles.projectsGrid}>
          <li>
            <ProjectCard />
          </li>
          <li>
            <ProjectCard />
          </li>
          <li>
            <ProjectCard />
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Projects;
