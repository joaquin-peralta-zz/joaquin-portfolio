import styles from '@styles/components/SlideGallery.module.scss';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'next/image';

type Props = {
  slides: string[];
};

const SlideGallery = ({ slides }: Props) => {
  return (
    <Container>
      <Row className="p-0">
        {slides.map((url) => (
          <Col key={url} className="p-0 text-center">
            <div className="position-relative">
              <Image
                src={url}
                alt={`Imagen de portada de ${url} `}
                width={256}
                height={256}
                layout="intrinsic"
                className={styles.img}
              />
              <button className={styles.button} type="button">
                Ver <br />
                proyecto
              </button>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default SlideGallery;
