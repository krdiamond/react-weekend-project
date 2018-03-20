import React, { Component } from 'react';
import '../App.css';
import boat from '../images/sailboat.png';


class Boat extends Component {

  state = {
    boat: false
  }

  handleMouseOver = () => {
    this.setState({
      boat: true
    })
  }

  render() {
    return (
     <div onMouseOver={this.handleMouseOver} className="empty_box" >
       {this.state.boat ? <img src={boat} className="boat" alt="boat"/> : null}
     </div>
    )
  }
}

export default Boat;
