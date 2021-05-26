import styles from '@styles/components/SlideGallery.module.scss';
import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'next/image';
import ProjectCard from '@components/Card/ProjectCard';

export interface Project {
  title: string;
  avatar: string;
  description: string;
  technologies: string[];
  repo: string;
  extLink: string;
}

type Props = {
  projects: Project[];
};

const ProjectGallery = ({ projects }: Props) => {
  const [show, setShow] = useState(false);
  const [currentPos, setCurrentPos] = useState(-1);

  const handleClose = () => setShow(false);
  const handleShow = (position: number) => {
    setCurrentPos(position);
    setShow(true);
  };

  return (
    <Container>
      <Row className="p-0">
        {projects &&
          projects.map((project, index) => (
            <Col key={project.title} className="p-0 text-center">
              <button className={styles.button} onClick={() => handleShow(index)} type="button">
                <Image
                  src={project.avatar}
                  alt={`Imagen de portada de ${project.title}`}
                  width={256}
                  height={256}
                  layout="intrinsic"
                  className={styles.img}
                />
              </button>
            </Col>
          ))}
      </Row>

      {show && currentPos > -1 && (
        <ProjectCard project={projects[currentPos]} onHide={handleClose} />
      )}
    </Container>
  );
};

export default ProjectGallery;
