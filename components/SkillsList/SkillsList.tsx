import styles from '@styles/components/SkillsList.module.scss';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

type Props = {
  list: string[];
};

const SkillsList = ({ list }: Props) => {
  return (
    <Container>
      <ul className="list-unstyled">
        <Row className="justify-content-between">
          {list.map((skill) => (
            <Col xs={6} sm={4} md={3} key={skill}>
              <div className="text-center">
                <li className={styles.item}>{skill}</li>
              </div>
            </Col>
          ))}
        </Row>
      </ul>
    </Container>
  );
};

export default SkillsList;
