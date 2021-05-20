import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

const MyForm = () => {
  return (
    <Form>
      <Form.Row>
        <Col>
          <Form.Group controlId="name">
            <Form.Control type="text" placeholder="Nombre" />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group controlId="email">
            <Form.Control type="email" placeholder="Email" />
          </Form.Group>
        </Col>
      </Form.Row>
      <Form.Group controlId="subject">
        <Form.Control placeholder="Asunto" />
      </Form.Group>
      <Form.Group controlId="message">
        <Form.Control placeholder="Mensaje" as="textarea" rows={5} />
      </Form.Group>
      <div className="text-right">
        <Button variant="outline-primary" type="submit">
          Enviar!
        </Button>
      </div>
    </Form>
  );
};

export default MyForm;
