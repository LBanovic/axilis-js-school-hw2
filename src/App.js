import React, { Component } from "react";
import "./App.css";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Grayscale from "./components/GrayscaleTable";
import RGB from "./components/RGB";

class App extends Component {
  static colors = [];
  static otherColors = [];

  static initColors() {
    for (let i = 0; i < 100; i++)
      App.colors.push({ id: i, color: App.getRandomColor() });
    for (let i = 0; i < 10; i++) {
      App.otherColors.push({ id: i, color: App.getRandomColor() });
    }
  }

  constructor() {
    super();
    if (App.colors.length < 100) App.initColors();

    this.state = {
      colors: App.colors,
      otherColors: App.otherColors
    };
  }

  changeColor = (color, id) => {
    this.setState({
      colors: this.state.colors.map(
        c => {
          if (c.id !== id) return c;
          else return { ...c, color: color };
        },
        () => {}
      )
    });
  };

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route
            exact
            path="/bw"
            render={props => (
              <Grayscale {...props} colors={this.state.colors} />
            )}
          />
          <Route
            path="/"
            render={props => (
              <RGB
                {...props}
                colors={this.state.colors}
                otherColors={this.state.otherColors}
                changeColor={this.changeColor}
              />
            )}
          />
        </Switch>
      </BrowserRouter>
    );
  }

  static getRandomColor() {
    let terminals = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 3; i++) {
      color += terminals[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  static fractionOfWindow(coeff) {
    return {
      width:
        (window.innerWidth < window.innerHeight
          ? window.innerWidth
          : window.innerHeight) / coeff,
      height:
        (window.innerWidth < window.innerHeight
          ? window.innerWidth
          : window.innerHeight) / coeff
    };
  }
}

export default App;
