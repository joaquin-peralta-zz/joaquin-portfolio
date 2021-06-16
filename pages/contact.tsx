import { useRef, useEffect } from 'react';
import Head from 'next/head';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import MyForm from '@components/MyForm/MyForm';
import { gsap } from 'gsap';

const Contact = () => {
  const divRef = useRef(null);
  const formRef = useRef(null);

  useEffect(() => {
    if (divRef.current && formRef.current) {
      const t1 = gsap.timeline({ defaults: { y: 50, opacity: 0, autoAlpha: 0 } });
      t1.from(divRef.current, {}).from(formRef.current, {});
    }
  }, []);

  return (
    <>
      <Head>
        <title>Joaquín Peralta | Contacto</title>
      </Head>

      <Container>
        <div ref={divRef}>
          <h2>Contacto.</h2>
          <p>
            Actualmente estoy disponible para nuevas oportunidades y trabajos. Si deseas contactarme
            podés enviarme un mensaje a través del siguiente formulario o contactarme por las redes
            sociales. ¡Te responderé a la brevedad!
          </p>
        </div>
        <Row xs={1} md={2} ref={formRef}>
          <Col>
            <MyForm />
          </Col>
          <Col />
        </Row>
      </Container>
    </>
  );
};

export default Contact;
