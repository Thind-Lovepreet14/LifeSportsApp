import React from 'react';
import axios from 'axios';
import { Card,ListGroup,ListGroupItem, CardDeck, Button } from 'react-bootstrap';


class Girls extends React.Component {
    constructor(props) {
        super(props);

        this.state= {
            users:[]
        }

        this.deleteExercise = this.deleteExercise.bind(this)

    }

    componentDidMount() {
        axios.get('/users/gender/female')
          .then(
              (res) => {
                  this.setState({
                      users: res.data
                  })
              })
          .catch((error) => {
            console.log(error);
          })
    
      }

      deleteExercise(id) {
        axios.delete('/users/'+id)
          .then(response => { console.log(response.data)});
    
        this.setState({
          users: this.state.users.filter(el => el._id !== id)
        })
      }

      render() {
          const { users } = this.state;

          return(
              <>
                <div className="boys-container row">
                    {users.map((usersGirls, index) => (
                        <div key={index} className="card-container col-sm-12 col-md-3">
                            <CardDeck >
                                <Card>
                                    <Card.Img variant="top" className="card-image" src="https://images.unsplash.com/photo-1472698938026-79bed881e5b7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" />
                                    <Card.Body>
                                        <Card.Title>{usersGirls.firstName} {usersGirls.lastName}</Card.Title>
                                        <Card.Text>
                                        Tellus pellentesque eu tincidunt tortor aliquam nulla.
                                        </Card.Text>
                                    </Card.Body>
                                    <ListGroup className="list-group-flush">
                                        <ListGroupItem>Age: {usersGirls.age}</ListGroupItem>
                                        <ListGroupItem>Height: {usersGirls.height}in.</ListGroupItem>
                                        <ListGroupItem>Position: {usersGirls.position}</ListGroupItem>
                                    </ListGroup>
                                    <Card.Body>
                                        <Button variant="outline-danger" deleteExercise={this.deleteExercise} key={users._id} onClick={() => { this.deleteExercise(users._id) }}>Delete</Button>
                                    </Card.Body>
                                </Card>
                                </CardDeck>
                        </div>
                    ))}
                </div>
              </>
          )
      }

}

export default Girls;