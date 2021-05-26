import styles from '@styles/components/Card.module.scss';
import Image from 'next/image';
import { IconContext } from 'react-icons';
import { MdClose } from 'react-icons/md';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { Project } from '@components/ProjectGallery/ProjectGallery';

type Props = {
  project: Project;
  onHide: () => void;
};

const ProjectCard = ({ project, onHide }: Props) => {
  const handleClose = () => onHide();

  return (
    <div className={styles.backlayer}>
      <button className={styles.closeButton} onClick={handleClose} type="button">
        <MdClose style={{ fontSize: '24px', color: '#EEE7FF' }} />
      </button>
      <div className={styles.projectCard}>
        <div className="text-center">
          <Image
            src={project.avatar}
            alt={`Foto de portada de ${project.title}`}
            width={128}
            height={128}
            layout="intrinsic"
            className={styles.avatar}
          />
        </div>
        <p className={styles.projectTitle}>{project.title}</p>
        <p className={styles.projectDescription}>{project.description}</p>
        <ul className={styles.list}>
          {project.technologies.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <div className="mt-3">
          <IconContext.Provider value={{ size: '24px', color: '#AEB9C2' }}>
            <a className="mr-3" href={project.repo}>
              <FaGithub />
            </a>
            <a href={project.extLink}>
              <FaExternalLinkAlt />
            </a>
          </IconContext.Provider>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
