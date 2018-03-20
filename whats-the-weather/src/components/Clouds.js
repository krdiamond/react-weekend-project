import React, { Component } from 'react';
import '../App.css';
import cloud from '../images/cloud.png';
import rain from '../images/raining.gif';


class Clouds extends Component {

  state = {
    raining: false
  }

  handleCloudClick = () => {
    this.setState({
      raining: !this.state.raining
    })
  }

  render() {
    return (
     <div >
       <img onClick={this.handleCloudClick} id="cloud1" src={cloud} className="clouds" alt="cloud"/>
       <img onClick={this.handleCloudClick} id="cloud2" src={cloud} className="clouds" alt="cloud"/>
       <img onClick={this.handleCloudClick} id="cloud3" src={cloud} className="clouds" alt="cloud"/>
       {this.state.raining ? <img className="rain" src={rain} alt="rain"/> : null}
     </div>
    )
  }
}

export default Clouds;
