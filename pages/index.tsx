import styles from '@styles/pages/Home.module.scss';
import Head from 'next/head';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import LinkButton from '@components/LinkButton/LinkButton';
import { Avatar, AvatarInfo } from '@components/Avatar/Avatar';
import ProjectGallery from '@components/ProjectGallery/ProjectGallery';
import projects from '@db/projects.json';
import MyForm from '@components/MyForm/MyForm';

export default function Home() {
  return (
    <>
      <Head>
        <title>Joaquín Peralta | Portfolio</title>
      </Head>

      <main className={styles.mainContent}>
        <Container>
          <div className={styles.mainText}>
            <p className={styles.toMonospacePrimary}>Hola, soy</p>
            <h1>
              Joaquín, <br />
              <span className={styles.colorGray}>web developer.</span>
            </h1>
            <p className={styles.toMonospaceGray}>Freelance Frontend Developer</p>
            <div className="mb-3">
              <Button href="/contact" variant="outline-primary">
                Contactame!
              </Button>
            </div>
            <div>
              <LinkButton>Ver más</LinkButton>
            </div>
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
        <ProjectGallery projects={projects} />
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
    </>
  );
}
