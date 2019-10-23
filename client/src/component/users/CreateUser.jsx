import React from 'react';
import axios from 'axios';
import { Form,Col, Button, Row } from 'react-bootstrap';

class CreateUser extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            gender: '',
            position: '',
            height: ''
        }
        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChangeHandler(e) {
        this.setState({[e.target.name]: e.target.value})
    }

    onSubmit(e) {
        e.preventDefault();
        const user = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            gender: this.state.gender,
            position: this.state.position,
            height: this.state.height,
        }

        axios.post('/users/add', user)
            .then(res => console.log(res.data));

        this.setState({
            firstName: '',
            lastName: '',
            gender: '',
            position: '',
            height: ''
        })
    }

    render() {
        return (
            <Form onSubmit={this.onSubmit}>
                <Form.Row>
                    <Form.Group as={Col} md="6" controlId="formGridFirstName">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control type="text" name="firstName" placeholder="First Name" />
                    </Form.Group>

                    <Form.Group as={Col} md="6" controlId="formGridLastName">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type="text"  name="lastName" placeholder="Last Name" />
                    </Form.Group>
                </Form.Row>

                <Form.Row>
                    <Form.Group as={Col} controlId="formGridGender">
                        <Form.Label>Gender</Form.Label>
                        <Form.Control name="gender" as="select">
                            <option>Choose...</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </Form.Control>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPosition">
                    <Form.Label>Position</Form.Label>
                    <Form.Control name="position" as="select">
                            <option>Choose...</option>
                            <option value="guard">Guard</option>
                            <option value="forward">Forward</option>
                            <option value="center" >Center</option>
                        </Form.Control>
                    </Form.Group>


                    <Form.Group as={Col} controlId="formGridHeight">
                    <Form.Label>Height(in)</Form.Label>
                    <Form.Control type="number" name="height"/>
                    </Form.Group>
                </Form.Row>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        )
    }
}

export default CreateUser;