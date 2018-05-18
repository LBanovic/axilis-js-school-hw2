import React from "react";
import ColorTable from "./ColorTable";
import ColorPicker from "./ColorPicker";
import {Link} from 'react-router-dom';

export default class RGB extends React.PureComponent {
  
  setChosenColor = (color) =>{
    this.setState({
      chosenColor: color
    })
  }

  state = {
    chosenColor: null
  };

  render() {
    return (
      <div
        className="container"
        style={{
          margin: "0",
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)"
        }}
      >
        <h1 style={{display:'inline-block' , margin:'10px'}}> RGB </h1>
        <h1 style={{display:'inline-block' , margin:'10px'}}> <Link to="/bw"> BW </Link></h1>
        
        <ColorTable
          chosenColor={this.state.chosenColor}
          colors={this.props.colors}
          changeColor={this.props.changeColor}
        />

        <h1>
          <ColorPicker setChosenColor={this.setChosenColor} colors={this.props.otherColors} />
        </h1>
      </div>
    );
  }
}
