import React, { Component } from 'react';
import '../App.css';
import HiroshiNagaiDay from '../images/hiroshi_nagai_pool.jpg';
import HiroshiNagaiNight from '../images/hiroshi_nagai_pool_night.jpg';
import cloud from '../images/cloud.png';
import rain from '../images/raining.gif';
import boat from '../images/sailboat.png';
import burger from '../images/burger.png';

class WeatherStats extends Component {

  state ={
    raining: false,
    boat: false
  }

  handleCloudClick = () => {
    this.setState({
      raining: !this.state.raining
    })
  }

  handleMouseOver = () => {
    if(this.props.daylightProps === true){
      this.setState({
        boat: true
      })
    }
  }

  render() {
    return (
      <div className="weather_stats">
          <div>
              {this.props.daylightProps ?
                <div>
                  <img src={HiroshiNagaiDay} height="900" alt="Hiroshi Nagai"/>

                </div>
              : <img src={HiroshiNagaiNight} height="900" alt="Hiroshi Nagai Night"/>}
          </div>
          <div
              onMouseOver={this.handleMouseOver}
              className="empty_box">
              {this.state.boat?
                  <img className="boat" src={boat} alt="boat"/>
              : null}
          </div>
          <div>
            {this.state.raining?
              <div className="clouds_box">
                <img className="rain" src={rain} alt="rain"/>
            </div>
            : null}
          </div>
          <div>
            {this.props.cloudy ?
              <div className="clouds_box">
                <img onClick={this.handleCloudClick} id="cloud1" className="cloud" src={cloud} alt="cloud"/>
                <img onClick={this.handleCloudClick} id="cloud2" className="cloud" src={cloud} alt="cloud"/>
                <img onClick={this.handleCloudClick} id="cloud3" className="cloud" src={cloud} alt="cloud"/>
            </div>
            : null}
          </div>
      </div>
    );
  }
}

export default WeatherStats;


// <h1>Hour - {this.props.timeWeatherProps.hour}:{this.props.timeWeatherProps.min}</h1>
// <h1>Day or Night? - {this.props.daylightProps ? "Day" : "Night"}</h1>
//
                  // <img src={burger} className="burger" height="30" alt="Burger"/>
