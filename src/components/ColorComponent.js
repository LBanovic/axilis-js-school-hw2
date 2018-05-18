import React from "react";

class ColorComponent extends React.PureComponent {

  render() {
    return (
      <div
        style={{ backgroundColor: this.props.color }}
        onClick={this.onClick}
      />
    );
  }

  onClick = () => {
    this.props.onClick(this.props.color, this.props.id);
  };
}

export default ColorComponent;
