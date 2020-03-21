import React, { Component } from "react";
import "./Visualizer.css";
import { generateArray, clearTimeout } from "./helper";
import { BubbleSort } from "./BubbleSort";
import { QuickSort } from "./QuickSort";

class Visualizer extends Component {
  static defaultProps = {
    PRIMARY_COLOR: "aquamarine"
  };
  constructor() {
    super();
    this.state = {
      speed: 10,
      size: 100,
      sorted: false,
      array: []
    };
    this.handleGenerate = this.handleGenerate.bind(this);
    this.handleSort = this.handleSort.bind(this);
    this.handleClear = this.handleClear.bind(this);
  }

  handleGenerate() {
    this.setState({ array: generateArray(this.state.size), sorted: false });
  }

  handleSort() {
    // maybe switch
    // BubbleSort(this.state.array);
    // console.log(this.state.array);

    const newArray = QuickSort(this.state.array);
    console.log(newArray);

    this.setState({ sorted: true });
  }

  handleClear() {
    clearTimeout();
  }

  render() {
    const { array, sorted } = this.state;
    const { PRIMARY_COLOR } = this.props;
    const bars = array.map((value, idx) => (
      <div
        className="Visualizer-single-bar"
        style={{ height: `${value}px`, backgroundColor: `${PRIMARY_COLOR}` }}
        key={idx}
      ></div>
    ));
    return (
      <div className="Visualizer">
        <div className="Visualizer-container">
          <div className="Visualizer-bars">{bars}</div>
          <div className="Visualizer-buttons">
            <button onClick={this.handleGenerate}>Generate Array</button>
            <button onClick={this.handleSort} disabled={sorted}>
              Sort
            </button>
            <button onClick={this.handleClear} disabled={!sorted}>
              Clear
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Visualizer;
