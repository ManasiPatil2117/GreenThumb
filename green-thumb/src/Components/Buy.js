import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, InputGroup, Row} from 'react-bootstrap';

export default function Buy() {
  
    return (


<>
    <h3 className="text-center ">Contact Information..</h3>
<form className="container mt-3 mb-3">
    <Row className="mb-3">
        <Form.Group controlId="formBasicEmail" className="col col-sm-6" >
            <Form.Label>First Name</Form.Label>
            <Form.Control type="name" name="first_name" placeholder="First name"  className="form-control" />
        </Form.Group>
        <Form.Group controlId="formBasicEmail" className="col col-sm-6">
            <Form.Label>Last Name</Form.Label>
            <Form.Control type="name" name="last_name" placeholder="Last name" className="form-control" />
        </Form.Group>
    </Row>
    <Row className="mb-3">
        <Form.Group controlId="formBasicMobile" className="col col-sm-6">
            <Form.Label>Mobile Number</Form.Label>
            <InputGroup>
                <InputGroup.Text id="basic-addon1">+91</InputGroup.Text>
                <Form.Control aria-label="Mobile Number" type="mobile" aria-describedby="basic-addon1" className="form-control" name="mobile"  />
            </InputGroup>
        </Form.Group>
        <Form.Group controlId="formBasicEmail" className="col col-sm-6">
            <Form.Label>Email</Form.Label>
            <InputGroup>
                <Form.Control aria-label="Recipient's username" aria-describedby="basic-addon2" type="email" name="email"  />
                <InputGroup.Text id="basic-addon2">@gmail.com</InputGroup.Text>
                
            </InputGroup><Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
        </Form.Group>
    </Row>
    <Row className="mb-3">
        <Form.Group className=" col col-sm-6" controlId="formGridAddress1">
            <Form.Label>Address</Form.Label>
            <Form.Control className="form-control" type="text" name="address1"  />
        </Form.Group>
        <Form.Group className="col col-sm-6" controlId="formGridAddress2">
            <Form.Label>Address 2</Form.Label>
            <Form.Control className="form-control" name="address2"  type="text" />
        </Form.Group>
    </Row>
    <Row className="mb-3">
        <Form.Group controlId="formGridCity" className="col col-sm-4">
            <Form.Label>City</Form.Label>
            <Form.Control className="form-control" type="text" name="city"  />
        </Form.Group>
        <Form.Group controlId="formGridState" className="col col-sm-4">
            <Form.Label>State</Form.Label>
            <Form.Select defaultValue="Choose..." className="form-control" name="a_state" >
                <option value="Choose...">Choose...</option>
                <option value="Delhi">Delhi</option>
                <option value="Bombay">Bommbay</option>
                <option value="New York">New York</option>
                <option value="Kashmir">Kashmir</option>
            </Form.Select>
        </Form.Group>
        <Form.Group controlId="formGridpin" className="col col-sm-4">
            <Form.Label>Pin Code</Form.Label>
            <Form.Control className="form-control" type="pin" name="pin"  />
        </Form.Group>
    </Row>
    <Row className="mb-3">
        <Form.Group controlId="formGridCheckbox" className="col col-sm-6">
            <Form.Label>Quantity</Form.Label>
            <Form.Select defaultValue="Choose..." className="form-control" name="menu" >
                <option value="Choose...">Choose...</option>
                <option value="one">1</option>
                <option value="two">2</option>
                <option value="three">3</option>
                <option value="four">4</option>
                <option value="five">5+</option>
            </Form.Select>
        </Form.Group>
        <Form.Group controlId="formGridlabel" className="col col-sm-6">
            <Form.Label>Order Details</Form.Label>
            <Form.Control as="textarea" rows="{3}" className="form-control" name="order" />
        </Form.Group>
    </Row>
    <Row class=" col-auto ">
    <Form.Group class="form-check">
      <input class="form-check-input" type="checkbox" id="autoSizingCheck"/>
      <Form.Label class="form-check-label" for="autoSizingCheck">
        Save this information for next time
      </Form.Label>
    </Form.Group>
  </Row>
    <Row className="mb-2">
        <Form.Group controlId="formGridCheckbox" className="col col-sm-6">
            <button type="submit"  className="me-4 btn btn-success btn-lg btn-block ">Submit</button>
            <button type="reset" className="me-4 btn btn-danger btn-lg btn-block ">Cancel</button>
        </Form.Group>
    </Row>
</form>
</>
    );
  
       
}

//export default Buy;
