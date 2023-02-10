import React from 'react';
import ProjectCard from './ProjectCard';
// Styling
import styles from './Projects.module.css';
// Project list
import { projectList } from './project_list';

const Projects = () => {
  return (
    <div name='projects' className={styles.projects}>
      <header>
        <h1 className={styles.projectsHeader}>Projects</h1>
      </header>
      <section>
        <ul className={styles.projectsGrid}>
          {projectList.map((project, i) => (
            <li key={i}>
              <ProjectCard
                title={project.title}
                description={project.description}
                website={project.website}
                github_repo={project.github_repo}
                tech_list={project.tech_list}
                key={i}
              />
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Projects;
