import React, { Component } from 'react';
import './App.css';
import PoolImage from './components/PoolImage';
import CarImage from './components/CarImage';
import NotFound from './components/NotFound';
import LocationForm from './components/LocationForm';
import { Route, Switch } from 'react-router-dom';
import {API_KEY} from "./api_key.js"


class App extends Component {

  state = {
      timeData: [],
      allData: [],
      daylight: "",
      cloudy: "",
      location: "",
    }

// ------ used for testing -------- //

// componentDidMount= () => {
//   this.fetchWeather()
// }

//VIRTUAL DOM - STORED IN MEMORY, REACT COMPARES WHATS THERE AND WHATS NOT THERE, CHECKS TO FIND ANY MIS MATCHES AND UPDATES THE ACTUAL DOM
// WILL MOUNT FIRES RIGHT BEFORE - DO NOT USE
// DID MOUNT FIRES AFTER RENDER - DOM SHOULD BE BUILT FIRST BEFORE YOU TRY TO CHANGE WHATS ON THE PAGE, BEST WAY TO START A FETCH

//TO PASS PROPS FROM 3 LEVELS DOWN WITH MAYBE A FUNCTION OR SOME INFO, THE PROPS NEED TO BE PASSED TO EACH PARENT UNTIL IT GETS WHERE IT NEEDS TO GO
// MAYBE IT NEEDS TO GO ALL THE WAY UP TO THE APP

//FOR A FILTER, SEARCH AND SEE IF IT'S INCLDUED, AND THEN CHANGE THE STATE TO DISPLAY THE FILTERED RESULTS INSTEAD OF OTHER RESULTS

// ------ used for testing -------- //

  fetchWeather = (location) => {
    let URL = "http://api.wunderground.com/api/" + API_KEY + `/hourly/q/${location.state}/${location.city}.json`;
    fetch(`${URL}`)
       .then(res => res.json())
       .then(json => this.setTheWeatherState(json,location));
  }

  setTheWeatherState = (json,location) => {
    this.setState({
      location: location,
      timeData: json.hourly_forecast[0]['FCTTIME'],
      allData: json.hourly_forecast[0],
    });
    this.setDayLight()
    this.isItCloudy()
  }

  setDayLight = () => {
    let hour = this.state.timeData.hour
    if(hour <= 7 || hour >= 19){
      this.setState({
        daylight: false
      })
    }
    else {
      this.setState({
        daylight: true
      })
    }
  }

  isItCloudy = () => {
    if(this.state.allData.condition.includes('Cloudy') ||
     this.state.allData.condition.includes('Overcast') ||
      this.state.allData.condition.includes('Snow') ||
       this.state.allData.condition.includes('Rain')) {
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


  render() {
    return (
      <div className="app">
        <LocationForm grabWeather={this.fetchWeather}/>
        <Switch>
          <Route exact path="/" render={()=><PoolImage weatherData={this.state}/>}/>
          <Route path="/pool" render={()=><PoolImage weatherData={this.state}/>}/>
          <Route path="/car" render={()=><CarImage weatherData={this.state}/>}/>
          <Route component={NotFound}/>
        </Switch>
      </div>

    );
  }
}

export default App;
