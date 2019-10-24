import React from 'react';
import axios from 'axios';
import { Card,ListGroup,ListGroupItem, CardDeck, Button } from 'react-bootstrap';


class Boys extends React.Component {
    constructor(props) {
        super(props);

        this.state= {
            users:[]
        }

        this.deleteExercise = this.deleteExercise.bind(this)

    }

    componentDidMount() {
        axios.get('/users/')
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
                    {users.map((usersBoys, index) => (
                        <div key={index} className="card-container col-sm-12 col-md-3">
                            <CardDeck >
                                <Card>
                                    <Card.Img variant="top" className="card-image" src="https://images.unsplash.com/photo-1537815749002-de6a533c64db?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1145&q=80" />
                                    <Card.Body>
                                        <Card.Title>{usersBoys.firstName} {usersBoys.lastName}</Card.Title>
                                        <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                        </Card.Text>
                                    </Card.Body>
                                    <ListGroup className="list-group-flush">
                                        <ListGroupItem>Age: {usersBoys.age}</ListGroupItem>
                                        <ListGroupItem>Height: {usersBoys.height}in.</ListGroupItem>
                                        <ListGroupItem>Position: {usersBoys.position}</ListGroupItem>
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

export default Boys;