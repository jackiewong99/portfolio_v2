import React from 'react';
// Icons
import { Folder, GitHub } from 'react-feather';
// Styling
import styles from './Projects.module.css';

const ProjectCard = ({
  title,
  description,
  website,
  github_repo,
  tech_list,
}) => {
  return (
    <div className={styles.cardContainer}>
      <header>
        <div className={styles.cardIcons}>
          <div>
            <a
              href={website !== '' ? website : github_repo}
              target='_blank'
              rel='noreferrer'
              className={styles.cardLink}
            >
              <Folder color={`#5c8d89`} size={32} />
            </a>
          </div>
          <div>
            <a
              href={github_repo}
              target='_blank'
              rel='noreferrer'
              className={styles.cardLink}
            >
              <GitHub color={`#12714d99`} />
            </a>
          </div>
        </div>
        <a
          href={website !== '' ? website : github_repo}
          target='_blank'
          rel='noreferrer'
          className={styles.cardLink}
        >
          <h2 className={styles.cardTitle}>{title}</h2>
        </a>
        <div className={styles.cardDescription}>{description}</div>
      </header>
      <footer>
        <ul className={styles.cardTechList}>
          {tech_list.map((tech, i) => (
            <li key={i}>{tech}</li>
          ))}
        </ul>
      </footer>
    </div>
  );
};

export default ProjectCard;
