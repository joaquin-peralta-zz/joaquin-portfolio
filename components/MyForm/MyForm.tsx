import { useState, useEffect, useRef, ChangeEvent } from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

const initialValues = {
  name: '',
  email: '',
  subject: '',
  message: '',
};

const MyForm = () => {
  const [values, setValues] = useState(initialValues);
  // eslint-disable-next-line no-unused-vars
  const [onSubmitting, setOnSubmitting] = useState<boolean>(false);

  const formRendered = useRef(true);

  useEffect(() => {
    if (formRendered.current) {
      setValues(initialValues);
      setOnSubmitting(false);
    }
    formRendered.current = false;
  }, [initialValues]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { target } = event;
    const { name, value } = target;
    event.persist();
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (event: any) => {
    if (event) event.preventDefault();
    console.log(values);
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Row>
          <Col>
            <Form.Group controlId="name">
              <Form.Control
                name="name"
                value={values.name}
                type="text"
                placeholder="Nombre"
                onChange={handleChange}
                required
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="email">
              <Form.Control
                name="email"
                value={values.email}
                type="email"
                placeholder="Email"
                onChange={handleChange}
                required
              />
            </Form.Group>
          </Col>
        </Form.Row>
        <Form.Group controlId="subject">
          <Form.Control
            name="subject"
            value={values.subject}
            type="text"
            placeholder="Asunto"
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group controlId="message">
          <Form.Control
            name="message"
            value={values.message}
            placeholder="Mensaje"
            as="textarea"
            rows={5}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <div className="text-right">
          <Button variant="outline-primary" type="submit">
            Enviar!
          </Button>
        </div>
      </Form>
    </>
  );
};

export default MyForm;
