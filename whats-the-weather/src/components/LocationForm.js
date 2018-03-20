import React, { Component } from 'react';
import '../App.css';
import {API_KEY} from "../api_key.js"

class LocationForm extends Component {

  state = {
    state: "",
    city: "",
    inputLocations: [
      {state: "NY",
      city: "New York"},
      {state: "WA",
      city: "Seattle"},
      {state: "CA",
      city: "San Francisco"},
      {state: "JP",
      city: "Tokyo"},
      {state: "AZ",
      city: "Tucson"},
      {state: "WY",
      city: "jackson hole"},
      {state: "NJ",
      city: "Clifton"},
    ],
  }

  handleInputChange = event => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    let location = this.state;
    this.props.grabWeather(location);
  };


  findCloudyCity = () => {
    this.state.inputLocations.map(each_location =>
      this.fetchWeather(each_location)
    )

  }


  fetchWeather = (each_location) => {
    console.log(each_location.state)
    let URL = "http://api.wunderground.com/api/" + API_KEY + `/hourly/q/${each_location.state}/${each_location.city}.json`;
    fetch(`${URL}`)
       .then(res => res.json())
       .then(json => console.log(json));
  }


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
        <div>{this.findCloudyCity()}</div>
      </div>
    );
  }
}

export default LocationForm;
