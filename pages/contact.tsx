import Head from 'next/head';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import MyForm from '@components/MyForm/MyForm';

const Contact = () => {
  return (
    <>
      <Head>
        <title>Joaquín Peralta | Contacto</title>
      </Head>

      <Container>
        <h2>Contacto.</h2>
        <p>
          Actualmente estoy disponible para nuevas oportunidades y trabajos. Si deseas contactarme
          podés enviarme un mensaje a través del siguiente formulario o contactarme por las redes
          sociales. ¡Te responderé a la brevedad!
        </p>
        <Row>
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
