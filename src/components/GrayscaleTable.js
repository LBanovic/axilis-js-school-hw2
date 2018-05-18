import React from "react";
import ColorTable from "./ColorTable";
import Color from "color";
import {Link} from 'react-router-dom';

export default class Grayscale extends React.PureComponent {
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
        <h1 style={{ display: "inline-block", margin: "10px" }}>
          <Link to="/rgb"> RGB </Link>
        </h1>
        <h1 style={{ display: "inline-block", margin: "10px" }}>BW</h1>
        <Gray {...this.props} />
      </div>
    );
  }
}

let Gray = GrayscaleTable(ColorTable);

function GrayscaleTable(C) {
  return class extends React.PureComponent {

    render() {
      let colors = [];
      for(let c of this.props.colors){
        colors.push({id: c.id, color: Color(c.color).grayscale().string()});
      }
      return <ColorTable {...this.props} colors={colors}/>;
    }
  };
}
