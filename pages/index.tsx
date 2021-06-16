import styles from '@styles/pages/Home.module.scss';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useRef, useEffect } from 'react';
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

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const mainInnerRef = useRef<any>([]);
  const imgRef = useRef(null);
  const sectionFirstRef = useRef<HTMLElement>(null);
  const avatarRef = useRef<HTMLDivElement>(null);
  const avatarInfoRef = useRef<HTMLDivElement>(null);
  const sectionSecondRef = useRef<HTMLElement>(null);
  const sectionThirdRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (mainInnerRef.current && imgRef.current) {
      const t1 = gsap.timeline({
        defaults: { scrollTrigger: { trigger: mainInnerRef.current }, opacity: 0, autoAlpha: 0 },
      });
      t1.from(mainInnerRef.current, {
        x: -100,
        stagger: 0.2,
      }).from(imgRef.current, {
        y: -100,
      });
    }

    if (sectionFirstRef.current) {
      gsap.from(sectionFirstRef.current, {
        scrollTrigger: {
          trigger: sectionFirstRef.current,
          start: 'top center',
        },
        y: 50,
        opacity: 0,
        autoAlpha: 0,
        stagger: 0.2,
      });
    }

    if (avatarRef.current && avatarInfoRef.current) {
      const t2 = gsap.timeline({
        defaults: {
          opacity: 0,
          autoAlpha: 0,
        },
      });
      t2.from(avatarRef.current, {
        scrollTrigger: { trigger: avatarRef.current },
        x: -300,
        rotation: -360,
        duration: 2,
      }).from(avatarInfoRef.current, {
        scrollTrigger: { trigger: avatarInfoRef.current },
        y: 50,
      });
    }

    if (sectionSecondRef.current) {
      gsap.from(sectionSecondRef.current, {
        scrollTrigger: {
          trigger: sectionSecondRef.current,
          start: 'top center',
        },
        y: 50,
        opacity: 0,
        autoAlpha: 0,
      });
    }

    if (sectionThirdRef.current) {
      gsap.from(sectionThirdRef.current, {
        scrollTrigger: {
          trigger: sectionThirdRef.current,
          start: 'top center',
        },
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

      <main className={styles.mainContent}>
        <Container>
          <Row className="align-items-center">
            <Col>
              <div className={styles.mainText}>
                <p
                  ref={(element) => {
                    mainInnerRef.current[0] = element;
                  }}
                  className={styles.toMonospacePrimary}
                >
                  Hola, soy
                </p>
                <h1
                  ref={(element) => {
                    mainInnerRef.current[1] = element;
                  }}
                >
                  Joaquín, <br />
                  <span className={styles.colorGray}>web developer.</span>
                </h1>
                <p
                  ref={(element) => {
                    mainInnerRef.current[2] = element;
                  }}
                  className={styles.toMonospaceGray}
                >
                  Freelance Frontend Developer
                </p>
                <div
                  ref={(element) => {
                    mainInnerRef.current[3] = element;
                  }}
                  className="mb-3"
                >
                  <Button href="/contact" variant="outline-primary">
                    Contactame!
                  </Button>
                </div>
                <div
                  ref={(element) => {
                    mainInnerRef.current[4] = element;
                  }}
                >
                  <LinkButton>Ver más</LinkButton>
                </div>
              </div>
            </Col>
            <Col className={styles.imageContainer}>
              <div ref={imgRef}>
                <Image
                  src="/laptop.png"
                  alt="Una laptop"
                  width={600}
                  height={450}
                  layout="intrinsic"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </main>

      <hr className={styles.divisor} />

      <section ref={sectionFirstRef}>
        <Container>
          <h2>Sobre mí</h2>
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

          <Row xs={1} md={2} className="align-items-center">
            <Col className="text-center">
              <Avatar ref={avatarRef} src="/avatar.jpeg" />
            </Col>
            <Col ref={avatarInfoRef}>
              <AvatarInfo />
            </Col>
          </Row>
        </Container>
      </section>

      <hr className={styles.divisor} />

      <section ref={sectionSecondRef}>
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
      </section>

      <section ref={sectionThirdRef} className={styles.contactSection}>
        <Container>
          <h2>Contacto.</h2>
          <p>
            Actualmente estoy disponible para nuevas oportunidades y trabajos. Si deseas contactarme
            puedes enviarme un mensaje a través del siguiente formulario o contactarme por las redes
            sociales. ¡Te responderé a la brevedad!
          </p>
          <Row xs={1} md={2} className="pb-3">
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
