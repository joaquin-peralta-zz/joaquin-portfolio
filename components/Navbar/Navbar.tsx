import styles from '@styles/components/Navbar.module.scss';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { MdMenu } from 'react-icons/md';

const Navbar = () => {
  return (
    <header className={styles.container}>
      <Container fluid className="h-100">
        <Row className="h-100 align-items-center justify-content-between">
          <Col>
            <MdMenu style={{ fontSize: '24px', color: '#60B6F8' }} />
          </Col>
          <Col className="text-right">
            <button className={styles.langButton} type="button">
              ES
            </button>
            <button className={styles.langButton} type="button">
              EN
            </button>
          </Col>
        </Row>
      </Container>
    </header>
  );
};

export default Navbar;
