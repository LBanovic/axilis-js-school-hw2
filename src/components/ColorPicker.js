import React from "react";
import ColorComponent from "./ColorComponent";
import App from "../App";

class ColorPicker extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      width: App.fractionOfWindow(2).width,
      height: App.fractionOfWindow(20).height
    };
  }

  render() {
    return (
      <div
        className="container"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(10,1fr)",
          gridAutoRows: "auto",
          width: this.state.width,
          height: this.state.height,
          borderWidth: '5px',
          borderStyle: 'solid'
        }}
      >
        {this.props.colors.map(t => (
          <ColorComponent
            key={t.id}
            color={t.color}
            onClick={this.onClick}
            id={t.id}
          />
        ))}
      </div>
    );
  }

  onClick = (color, id) => {
    for (let i of this.props.colors) {
      if (i.id === id) {
        this.props.setChosenColor(color);
      }
    }
  };

  componentDidMount() {
    window.onresize = ev => {
      this.setState({
        width: App.fractionOfWindow(2).width,
        height: App.fractionOfWindow(20).height
      });
    };
  }
}

export default ColorPicker;
