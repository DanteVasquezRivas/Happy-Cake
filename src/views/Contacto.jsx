import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import FloatingLabel from 'react-bootstrap/FloatingLabel';

function Contacto() {
  return (
    <Form className='containerForm'>
        <h1>Cuentanos, ¿en que te podemos ayudar?</h1>
      <Form.Group className="mt-3" controlId="formBasicEmail">
        <Form.Label className='email'>Correo:</Form.Label>
        <input type="email" placeholder="name@example.com" />
      </Form.Group>

      <Form.Group className="mt-3" controlId="Description">
        <Form.Label className='descripcion'>Descripción:</Form.Label>
        <FloatingLabel className='descripcion mt-3 border border-2 border-dark' controlId="Description">
        <Form.Control
          as="textarea"
          style={{ height: '150px', width: '1540px'}}
        />
      </FloatingLabel>
      </Form.Group>      
      
      <Button className= "mt-3" variant="danger" type="submit">
        Enviar
      </Button>
      
      
    </Form>
  );
}

export default Contacto