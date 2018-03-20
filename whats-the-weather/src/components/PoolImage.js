import React, { Component } from 'react';
import '../App.css';
import Clouds from '../components/Clouds';
import Boat from '../components/boat';
import HiroshiNagaiDay from '../images/hiroshi_nagai_pool.jpg';
import HiroshiNagaiNight from '../images/hiroshi_nagai_pool_night.jpg';



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
