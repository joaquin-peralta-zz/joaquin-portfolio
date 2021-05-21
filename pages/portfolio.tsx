import Head from 'next/head';
import Container from 'react-bootstrap/Container';
import SlideGallery from '@components/SlideGallery/SlideGallery';

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
        <SlideGallery slides={['/novel-tecnica.png', '/pocha-knit.jpeg']} />
      </section>
    </>
  );
};

export default Portfolio;
