import React, { Component } from "react";
import { generateArray } from "./helper";

class Visualizer extends Component {
  static defaultProps = {
    PRIMARY_COLOR: "aquamarine"
  };
  constructor() {
    super();
    this.state = {
      speed: 10,
      size: 20,
      array: []
    };
    this.handleGenerate = this.handleGenerate.bind(this);
    this.handleSort = this.handleSort.bind(this);
  }

  handleGenerate() {
    this.setState({ array: generateArray(this.state.size) });
  }

  handleSort() {
    const { array } = this.state;
    for (let i = array.length; i > 0; i--) {
      for (let j = 0; j < i - 1; j++) {
        if (array[j] > array[j + 1]) {
          this.swap(array, j, j + 1);
        }
      }
    }
  }

  swap(array, i, j) {
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }

  render() {
    const { array } = this.state;
    const { PRIMARY_COLOR } = this.props;
    const rectEle = array.map((value, idx) => (
      <div
        className="Visualizer-single-bar"
        style={{ height: `${value}px`, backgroundColor: `${PRIMARY_COLOR}` }}
        key={idx}
      ></div>
    ));
    const arrayBars = document.getElementsByClassName("Visualizer-single-bar");
    console.log(arrayBars);
    return (
      <div className="Visualizer">
        <div className="Visualizer-container">
          <div className="Visualizer-bars">{rectEle}</div>
          <div className="Visualizer-buttons">
            <button onClick={this.handleGenerate}>Generate Array</button>
            <button onClick={this.handleSort}>Sort</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Visualizer;
