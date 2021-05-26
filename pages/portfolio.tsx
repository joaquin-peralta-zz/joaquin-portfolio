import Head from 'next/head';
import Container from 'react-bootstrap/Container';
import projects from '@db/projects.json';
import ProjectGallery from '@components/ProjectGallery/ProjectGallery';

const Portfolio = () => {
  return (
    <>
      <Head>
        <title>Joaquín Peralta | Portfolio</title>
      </Head>

      <section>
        <Container>
          <h2>Portfolio.</h2>
        </Container>
        <ProjectGallery projects={projects} />
      </section>
    </>
  );
};

export default Portfolio;
