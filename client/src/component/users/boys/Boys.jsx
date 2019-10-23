import React from 'react';
import axios from 'axios';


class Boys extends React.Component {
    constructor(props) {
        super(props);

        this.state= {
            users:[]
        }
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

      render() {
          const { users } = this.state;

          return(
              <>
                <div className="boys-container">
                    {users.map((usersBoys, index) => (
                        <div key={index} className="con">
                            <h5>{usersBoys.firstName}</h5>
                        </div>

                    ))}
                </div>
              </>
          )
      }

}

export default Boys;