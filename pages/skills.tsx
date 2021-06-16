import { useEffect, useRef } from 'react';
import Head from 'next/head';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Skill from '@components/Skill/Skill';
import skills from '@db/skills.json';
import resume from '@db/resume.json';
import ResumeCard from '@components/Card/ResumeCard';
import Button from 'react-bootstrap/Button';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Skills() {
  const sectionFirstRef = useRef<HTMLElement>(null);
  const sectionSecondRef = useRef<HTMLElement>(null);
  const skillRefs = useRef<any>([]);
  const cardRefs = useRef<any>([]);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (sectionFirstRef.current) {
      gsap.from(sectionFirstRef.current, {
        scrollTrigger: {
          trigger: sectionFirstRef.current,
        },
        y: 50,
        opacity: 0,
        autoAlpha: 0,
      });
    }

    if (skillRefs.current) {
      gsap.to(skillRefs.current, {
        scrollTrigger: {
          trigger: skillRefs.current,
          start: 'top center',
        },
        opacity: 1,
        autoAlpha: 1,
        rotateY: 360,
        backgroundColor: 'transparent',
        stagger: 0.1,
      });
    }

    if (sectionSecondRef.current) {
      gsap.from(sectionSecondRef.current, {
        scrollTrigger: {
          trigger: sectionSecondRef.current,
        },
        y: 50,
        opacity: 0,
        autoAlpha: 0,
      });
    }

    if (cardRefs.current) {
      gsap.from(cardRefs.current, {
        scrollTrigger: {
          trigger: cardRefs.current,
          start: 'bottom bottom',
        },
        opacity: 0,
        autoAlpha: 0,
        scale: 0.5,
        stagger: 0.2,
        ease: 'bounce',
      });
    }

    if (buttonRef.current) {
      gsap.from(buttonRef.current, {
        scrollTrigger: {
          trigger: buttonRef.current,
          start: 'bottom bottom',
        },
        opacity: 0,
        autoAlpha: 0,
        scale: 0.5,
        stagger: 0.2,
        ease: 'bounce',
      });
    }
  }, []);

  return (
    <>
      <Head>
        <title>Joaquín Peralta | Experiencia</title>
      </Head>

      <section ref={sectionFirstRef}>
        <Container>
          <h2>Habilidades y experiencia.</h2>
          <p>
            Comencé a programar en el 2017 con Python y Java, desarrollando desde sencillos scripts
            hasta apps de escritorio y para móviles relacionadas con el audio y el procesamiento
            digital de señales. Finalmente en el 2020 incorporé JavaScript a mi stack, y desde
            entonces me incliné por las tecnologías asociadas a este lenguaje.
          </p>
          <p>
            Actualmente me dedico al diseño y desarrollo de páginas y aplicaciones web client-side
            con React. También tengo conocimientos de backend con Node.js y de bases de datos.
          </p>
          <div>
            {skills.map((item, index) => (
              <Skill
                key={item}
                skill={item}
                ref={(element) => skillRefs.current.splice(index, 1, element)}
              />
            ))}
          </div>
        </Container>
      </section>

      <section ref={sectionSecondRef}>
        <Container>
          <h2>Formación académica.</h2>
          <ul className="list-unstyled">
            <Row xs={1} md={2} lg={3}>
              {resume.map((item, index) => (
                <Col key={item.title} className="mb-3">
                  <li>
                    <ResumeCard
                      title={item.title}
                      years={item.years}
                      institution={item.institution}
                      ref={(element) => cardRefs.current.splice(index, 1, element)}
                    />
                  </li>
                </Col>
              ))}
            </Row>
          </ul>
          <div className="text-center">
            <Button
              ref={buttonRef}
              href="https://drive.google.com/file/d/1RxB6BMDvIsB2AzOAwC24Q7dnk5h2mArb/view?usp=sharing"
              variant="primary"
            >
              Descargar CV
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
