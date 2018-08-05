import React, { Component } from 'react';
import '../App.css';
import Clouds from '../components/Clouds';
import Boat from '../components/boat';
import HiroshiNagaiDay from '../images/hiroshi_nagai_pool.jpg';
import HiroshiNagaiNight from '../images/hiroshi_nagai_pool_night.jpg';

// this should be a function and not a class because it doesn't have a state, classes do not have state
// this is a presentational component

class PoolImage extends Component {


  render() {
    return (
      <div className="image_container">
        <div className="actual_image">
          {this.props.weatherData.location === "" ? null :
            this.props.weatherData.daylight ?
              <div><img src={HiroshiNagaiDay} height="900" alt="Hiroshi Nagai Day"/> <Boat/> </div>:
              <img src={HiroshiNagaiNight} height="900" alt="Hiroshi Nagai Night"/>}
        </div>

          {this.props.weatherData.cloudy ? <Clouds /> : null }

      </div>
    )}

}

export default PoolImage;
