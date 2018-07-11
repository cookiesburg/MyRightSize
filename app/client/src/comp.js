import React, {Component} from 'react';
import axios from 'axios';

export default class Comp extends Component {
  state = {
    shirts: [],
  }
  componentDidMount() {
    axios.get('http://localhost:3001/api/v1/shirts.json')
        .then(response => {
            console.log(response)
            this.setState({
                shirts: response.data
            })
        })
        .catch(error => console.log(error))
  }

  render() {
    return(
      <p>sdf</p>

    );
  }
}
