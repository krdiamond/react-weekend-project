import React, { Component } from 'react';
import '../App.css';

class AddressLocationForm extends Component {

  state = {
    city: "",
    state: ""
  }

  handleSubmit = event => {
    event.preventDefault();
    let location = this.state;
    this.props.addLocation(location);
  };

  handleInputChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };


  render() {
    return (
      <div className="address_form">
        <form onSubmit={this.handleSubmit}>
            <input
              onChange={this.handleInputChange}
              type="text"
              name="state"
              placeholder="State"/>
            <input
              onChange={this.handleInputChange}
              type="text"
              name="city"
              placeholder="City"/>
          <input
            type="submit"
            value="Input Location"/>
        </form>
      </div>
    );
  }
}

export default AddressLocationForm;
