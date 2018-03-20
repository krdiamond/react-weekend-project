import React, { Component } from 'react';
import '../App.css';

class LocationForm extends Component {

  state = {
    state: "",
    city: "",
  }

  handleInputChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    let location = this.state;
    this.props.grabWeather(location);
  };


  render() {
    return (
      <div className="location_form">
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

export default LocationForm;
