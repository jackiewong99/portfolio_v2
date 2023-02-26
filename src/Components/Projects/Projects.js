import React from 'react';
import ProjectCard from './ProjectCard';
// Styling and animation
import styles from './Projects.module.css';
import { motion } from 'framer-motion';
// Project list
import { projectList } from './project_list';

const headerVariants = {
  hideHeader: {
    opacity: 0,
    y: 30,
  },
  showHeader: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

const cardVariants = {
  offscreen: {
    opacity: 0,
    y: 60,
  },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3 },
  },
};

const Projects = () => {
  return (
    <div name='projects' className={styles.projects}>
      <motion.header
        variants={headerVariants}
        initial='hideHeader'
        whileInView='showHeader'
        viewport={{ once: true, amount: 0.8 }}
      >
        <motion.h1 className={styles.projectsHeader} variants={headerVariants}>
          Projects
        </motion.h1>
      </motion.header>
      <section>
        <ul className={styles.projectsGrid}>
          {projectList.map((project, i) => (
            <motion.li
              key={i}
              initial='offscreen'
              whileInView='onscreen'
              viewport={{ once: true, amount: 0.6 }}
            >
              <ProjectCard
                title={project.title}
                description={project.description}
                website={project.website}
                github_repo={project.github_repo}
                tech_list={project.tech_list}
                variants={cardVariants}
                key={i}
              />
            </motion.li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Projects;
