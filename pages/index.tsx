import styles from '@styles/pages/Home.module.scss';
import Head from 'next/head';
import Navbar from '@components/Navbar/Navbar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import LinkButton from '@components/LinkButton/LinkButton';
import { Avatar, AvatarInfo } from '@components/Avatar/Avatar';
import SlideGallery from '@components/SlideGallery/SlideGallery';
import MyForm from '@components/MyForm/MyForm';
import Footer from '@components/Footer/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>Joaquín Peralta | Portfolio</title>
        <meta
          name="description"
          content="¡Hola! Soy Joaquín, web developer. Te invito a que veas mi portfolio."
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
          rel="stylesheet"
        />
      </Head>

      <Navbar />

      <main className={styles.mainContent}>
        <Container>
          <p className="to-monospace-primary mb-2">Hola, soy</p>
          <h1>
            Joaquín, <br />
            <span className="color-gray">web developer.</span>
          </h1>
          <p className="to-monospace-gray mb-5">Freelance Frontend Developer</p>
          <div className="mb-3">
            <Button variant="outline-primary">Contactame!</Button>
          </div>
          <div>
            <LinkButton>Ver más</LinkButton>
          </div>
        </Container>
      </main>

      <section>
        <Container>
          <h2>Sobre mí.</h2>
          <p>
            Estudié Licenciatura en Sonorización y Grabación en la Universidad Nacional del Litoral
            y me convertí en programador durante el camino. Ahora me dedico al desarrollo de
            aplicaciones web, buscando siempre cumplir con las demandas del cliente y ofreciendo un
            producto final distintivo.
          </p>
          <p>Estas son algunas tecnologías con las que trabajo:</p>
          <Row className="mb-5">
            <Col>
              <ul className={styles.list}>
                <li>JavaScript</li>
                <li>React.js</li>
                <li>Next.js</li>
              </ul>
            </Col>
            <Col>
              <ul className={styles.list}>
                <li>Bootstrap</li>
                <li>Node.js</li>
                <li>TypeScript</li>
              </ul>
            </Col>
          </Row>

          <Row xs={1} sm={2}>
            <Col className="text-center mb-3">
              <Avatar src="/avatar.jpeg" />
              <LinkButton>Más info...</LinkButton>
            </Col>
            <Col>
              <AvatarInfo />
            </Col>
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <h2>Portfolio.</h2>
          <p>Les comparto algunos proyectos en los que estuve trabajando recientemente.</p>
        </Container>
        <SlideGallery slides={['/novel-tecnica.png', '/pocha-knit.jpeg']} />
        <div className="text-center mt-4">
          <Button variant="outline-primary">Ver más!</Button>
        </div>
      </section>

      <section>
        <Container>
          <h2>Contacto.</h2>
          <p>
            Actualmente estoy disponible para nuevas oportunidades y trabajos. Si deseas contactarme
            puedes enviarme un mensaje a través del siguiente formulario o contactarme por las redes
            sociales. ¡Te responderé a la brevedad!
          </p>
          <Row xs={1} md={2}>
            <Col>
              <MyForm />
            </Col>
            <Col />
          </Row>
        </Container>
      </section>

      <Footer />
    </>
  );
}
