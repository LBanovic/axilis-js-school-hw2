import React from "react";
import ColorComponent from "./ColorComponent";
import App from "../App";

class ColorTable extends React.PureComponent {
  render() {
    return (
      <div
        className="container"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(10,1fr)",
          gridTemplateRows: "repeat(10,1fr)",
          width: this.state.width,
          height: this.state.height,
          borderWidth: "5px",
          borderStyle: "solid"
        }}
      >
        {this.props.colors.map(c => (
          <ColorComponent
            key={c.id}
            color={c.color}
            id={c.id}
            onClick={this.changeColor}
          />
        ))}
      </div>
    );
  }

  constructor() {
    super();
    this.state = {
      width: App.fractionOfWindow(2).width,
      height: App.fractionOfWindow(2).height
    };
  }

  componentDidMount = () => {
    window.onresize = ev => {
      this.setState({
        width: App.fractionOfWindow(2).width,
        height: App.fractionOfWindow(2).height
      });
    };
  }

  changeColor = (color, id) => {
    if (this.props.chosenColor != null) {
      this.props.changeColor(this.props.chosenColor, id);
    }
  };
}
export default ColorTable;
