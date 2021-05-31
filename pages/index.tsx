import styles from '@styles/pages/Home.module.scss';
import gsap from 'gsap';
import { useState, useRef, useEffect } from 'react';
import Head from 'next/head';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import LinkButton from '@components/LinkButton/LinkButton';
import Image from 'next/image';
import { Avatar, AvatarInfo } from '@components/Avatar/Avatar';
import ProjectGallery from '@components/ProjectGallery/ProjectGallery';
import projects from '@db/projects.json';
import MyForm from '@components/MyForm/MyForm';
import { useIntersection } from 'react-use';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Transition } from 'react-transition-group';

export default function Home() {
  const mainTextRef = useRef(null);
  const imgRef = useRef(null);
  const sectionFirstRef = useRef(null);
  const sectionSecondRef = useRef(null);
  const sectionThirdRef = useRef(null);
  const intersectionFirst = useIntersection(sectionFirstRef, { threshold: 0.5 });
  const intersectionSecond = useIntersection(sectionSecondRef, { threshold: 0.5 });
  const intersectionThird = useIntersection(sectionThirdRef, { threshold: 0.5 });
  const [showFirstSec, setShowFirstSec] = useState(false);
  const [showSecondSec, setShowSecondSec] = useState(false);
  const [showThirdSec, setShowThirdSec] = useState(false);
  const [showInfo, setShowInfo] = useState(false);

  useEffect(() => {
    if (intersectionFirst?.isIntersecting) setShowFirstSec(true);
    if (intersectionSecond?.isIntersecting) setShowSecondSec(true);
    if (intersectionThird?.isIntersecting) setShowThirdSec(true);
  }, [
    intersectionFirst?.isIntersecting,
    intersectionSecond?.isIntersecting,
    intersectionThird?.isIntersecting,
  ]);

  const executeScroll = () => {
    if (sectionFirstRef.current !== null) {
      sectionFirstRef.current.scrollIntoView({ block: 'start', behavior: 'smooth' });
    }
  };

  return (
    <>
      <Head>
        <title>Joaquín Peralta | Portfolio</title>
      </Head>

      <main className={styles.mainContent}>
        <Container>
          <Row className="align-items-center">
            <Col>
              <Transition
                mountOnEnter
                unmountOnExit
                appear
                in
                addEndListener={(node, done) => {
                  gsap.from(node, {
                    x: -100,
                    opacity: 0,
                    duration: 1,
                    ease: 'power2.out',
                    autoAlpha: 1,
                    onComplete: done,
                  });
                }}
              >
                <div ref={mainTextRef} className={styles.mainText}>
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
                    <LinkButton onClick={executeScroll}>Ver más</LinkButton>
                  </div>
                </div>
              </Transition>
            </Col>
            <Col className={styles.imageContainer}>
              <Transition
                mountOnEnter
                unmountOnExit
                appear
                in
                addEndListener={(node, done) => {
                  gsap.from(node, {
                    y: -100,
                    opacity: 0,
                    duration: 1,
                    ease: 'power2.out',
                    autoAlpha: 1,
                    delay: 0.5,
                    onComplete: done,
                  });
                }}
              >
                <div ref={imgRef}>
                  <Image
                    src="/laptop.png"
                    alt="Una laptop"
                    width={600}
                    height={450}
                    layout="intrinsic"
                  />
                </div>
              </Transition>
            </Col>
          </Row>
        </Container>
      </main>

      <hr className={styles.divisor} />

      <section ref={sectionFirstRef}>
        <Transition
          mountOnEnter
          unmountOnExit
          appear
          in={showFirstSec}
          addEndListener={(node, done) => {
            gsap.from(node, {
              y: 50,
              opacity: 0,
              duration: 1,
              ease: 'power2.out',
              autoAlpha: showFirstSec ? 1 : 0,
              stagger: 0.8,
              onComplete: done,
            });
          }}
        >
          <Container>
            <h2>Sobre mí</h2>
            <p>
              Estudié Licenciatura en Sonorización y Grabación en la Universidad Nacional del
              Litoral y me convertí en programador durante el camino. Ahora me dedico al desarrollo
              de aplicaciones web, buscando siempre cumplir con las demandas del cliente y
              ofreciendo un producto final distintivo.
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
                <LinkButton onClick={() => setShowInfo(true)}>Más info...</LinkButton>
              </Col>
              <Transition
                mountOnEnter
                unmountOnExit
                in={showInfo}
                addEndListener={(node, done) => {
                  gsap.from(node, {
                    y: 50,
                    opacity: 0,
                    autoAlpha: 1,
                    duration: 1,
                    onComplete: done,
                  });
                }}
              >
                <Col>
                  <AvatarInfo />
                </Col>
              </Transition>
            </Row>
          </Container>
        </Transition>
      </section>

      <hr className={styles.divisor} />

      <section ref={sectionSecondRef}>
        <Transition
          mountOnEnter
          unmountOnExit
          appear
          in={showSecondSec}
          addEndListener={(node, done) => {
            gsap.from(node, {
              y: 50,
              opacity: 0,
              duration: 1,
              ease: 'power2.out',
              autoAlpha: showSecondSec ? 1 : 0,
              stagger: 0.8,
              onComplete: done,
            });
          }}
        >
          <>
            <Container>
              <h2>Portfolio.</h2>
              <p>Les comparto algunos proyectos en los que estuve trabajando recientemente.</p>
            </Container>
            <ProjectGallery projects={projects} />
            <div className="text-center mt-4">
              <Button variant="outline-primary" href="/portfolio">
                Ver más!
              </Button>
            </div>
          </>
        </Transition>
      </section>

      <section ref={sectionThirdRef} className={styles.contactSection}>
        <Transition
          mountOnEnter
          unmountOnExit
          appear
          in={showThirdSec}
          addEndListener={(node, done) => {
            gsap.from(node, {
              y: 50,
              opacity: 0,
              duration: 1,
              ease: 'power2.out',
              autoAlpha: showThirdSec ? 1 : 0,
              stagger: 0.8,
              onComplete: done,
            });
          }}
        >
          <Container>
            <h2>Contacto.</h2>
            <p>
              Actualmente estoy disponible para nuevas oportunidades y trabajos. Si deseas
              contactarme puedes enviarme un mensaje a través del siguiente formulario o contactarme
              por las redes sociales. ¡Te responderé a la brevedad!
            </p>
            <Row xs={1} md={2} className="pb-3">
              <Col>
                <MyForm />
              </Col>
              <Col />
            </Row>
          </Container>
        </Transition>
      </section>
    </>
  );
}
