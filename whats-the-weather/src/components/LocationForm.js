import React, { Component } from 'react';
import '../App.css';
import {API_KEY} from "../api_key.js"

// presentational piece, needs state but presentational component
// not functional component


class LocationForm extends Component {

  state = {
    state: "",
    city: "",
  }

//when adding to an array, never manipulate state, make a copy first
//add to an array with the spread operator comma what you are adding ----
      //this.setState({
      //   key: [...this.state.key, what_you_are_adding]
      // })


  handleInputChange = event => {
    this.setState({
      [event.target.name]: event.target.value,
      // DYNAMICALLY SETS STATE BASED ON THE ENTIRE FORM'S INPUT, DO NOT FORGET TO INCLUDE NAME ON THE FORM AS A PROP
      // WILL TAKE EACH NAME AND DYNAMICALLY SET THE VALUE
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    //NEED TO INCLUDE INVENT SO THAT EVENT.PREVENTDEFAULT WORKS
    let location = this.state;
    //SETS THE FINAL STATE ON CLICK OF THE SUBMIT BUTTON AND THEN
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
