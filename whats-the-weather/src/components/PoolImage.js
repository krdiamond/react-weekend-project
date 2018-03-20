import React, { Component } from 'react';
import '../App.css';
import Clouds from '../components/Clouds';
import HiroshiNagaiDay from '../images/hiroshi_nagai_pool.jpg';
import HiroshiNagaiNight from '../images/hiroshi_nagai_pool_night.jpg';


// import boat from '../images/sailboat.png';

class PoolImage extends Component {

  state ={
    raining: false,
    boat: false
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
      <div className="image_container">
        <div className="actual_image">
          {this.props.weatherData.location === "" ? null :
            this.props.weatherData.daylight ?
              <img src={HiroshiNagaiDay} height="900" alt="Hiroshi Nagai Day"/>:
              <img src={HiroshiNagaiNight} height="900" alt="Hiroshi Nagai Night"/>}
        </div>
          {this.props.weatherData.cloudy ? <Clouds/> : null }
      </div>
    )}

}

export default PoolImage;


  // <div
  //     onMouseOver={this.handleMouseOver}
  //     className="empty_box">
  //     {this.state.boat?
  //         <img className="boat" src={boat} alt="boat"/>
  //     : null}
  // </div>
