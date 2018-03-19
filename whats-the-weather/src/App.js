import React, { Component } from 'react';
import './App.css';
import WeatherStats from './components/WeatherStats';
import AddressLocationForm from './components/AddressLocationForm';
import { Route } from 'react-router-dom';


class App extends Component {

  state = {
      state: "",
      city: "",
      timeWeather: [],
      allOtherWeather: [],
      daylight: "",
      cloudy: ""
    }


// componentDidMount= () => {
//   this.fetchWeather()
// }

  fetchWeather = () => {
    let URL = "http://api.wunderground.com/api/" + API_KEY + `/hourly/q/${this.state.state}/${this.state.city}.json`;
    fetch(`${URL}`)
       .then(res => res.json())
       .then(json => this.setTheWeatherState(json));
  }

  setTheWeatherState = (json) => {
    this.setState({
      timeWeather: json.hourly_forecast[0]['FCTTIME'],
      allOtherWeather: json.hourly_forecast[0],
    });
    this.setDayLight()
    this.isItCloudy()
    console.log(json)
  }

  setDayLight = () => {
    let hour = this.state.timeWeather.hour
    if(hour <= 7 || hour >= 19){
      this.setState({
        daylight: false
      }, () => console.log(this.state.daylight))
    }
    else {
      this.setState({
        daylight: true
      })
    }
  }

  isItCloudy = () => {
    if(this.state.allOtherWeather.condition.includes('Cloudy') ||
     this.state.allOtherWeather.condition.includes('Overcast')) {
      this.setState({
        cloudy: true
      });
    }
    else {
      this.setState({
        cloudy: false
      });
    }
  }

  addLocation = location => {
      this.setState({
        city: location.city,
        state: location.state
      }, () => this.fetchWeather());
    };


  render() {
    return (
      <div className="app">
        <AddressLocationForm
          addLocation={this.addLocation}/>
        {(this.state.state === "" && this.state.city ==="") ? null:
          <WeatherStats
          timeWeatherProps={this.state.timeWeather}
          allOtherWeatherProps={this.state.allOtherWeather}
          daylightProps={this.state.daylight}
          cloudy={this.state.cloudy}/>}
      </div>
    );
  }
}

export default App;
