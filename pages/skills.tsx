import Head from 'next/head';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SkillsList from '@components/SkillsList/SkillsList';
import skills from '@components/SkillsList/skills.json';
import resume from '@components/Card/resume.json';
import ResumeCard from '@components/Card/ResumeCard';
import Button from 'react-bootstrap/Button';

export default function Skills() {
  return (
    <>
      <Head>
        <title>Joaquín Peralta | Experiencia</title>
      </Head>

      <section>
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
          <SkillsList list={skills} />
        </Container>
      </section>

      <section>
        <Container>
          <h2>Formación académica.</h2>
          <ul className="list-unstyled">
            <Row xs={1} md={2} lg={3}>
              {resume.map((item) => (
                <Col key={item.title} className="mb-3">
                  <li>
                    <ResumeCard
                      title={item.title}
                      years={item.years}
                      institution={item.institution}
                    />
                  </li>
                </Col>
              ))}
            </Row>
          </ul>
          <div className="text-center">
            <Button
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
