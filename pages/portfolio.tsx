import { useRef, useEffect } from 'react';
import Head from 'next/head';
import Container from 'react-bootstrap/Container';
import projects from '@db/projects.json';
import ProjectGallery from '@components/ProjectGallery/ProjectGallery';
import { gsap } from 'gsap';

const Portfolio = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    if (sectionRef.current) {
      gsap.from(sectionRef.current, {
        y: 50,
        opacity: 0,
        autoAlpha: 0,
      });
    }
  }, []);

  return (
    <>
      <Head>
        <title>Joaquín Peralta | Portfolio</title>
      </Head>

      <section ref={sectionRef}>
        <Container>
          <h2>Portfolio.</h2>
        </Container>
        <ProjectGallery projects={projects} />
      </section>
    </>
  );
};

export default Portfolio;
