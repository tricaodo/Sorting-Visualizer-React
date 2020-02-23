import React, { Component } from "react";
import { BubbleSort } from "./BubbleSort";
import "./Rectangle.css";

class Rectangle extends Component {
  constructor() {
    super();
    this.state = {
      arrays: []
    };
    this.generateArray = this.generateArray.bind(this);
    this.bubbleSort = this.bubbleSort.bind(this);
  }

  generateArray() {
    const size = 20;
    const newArr = [];
    for (let i = 0; i < size; i++) {
      const rand = Math.floor(Math.random() * 300) + 1;
      newArr.push(rand);
    }
    this.setState({ arrays: newArr });
  }

  bubbleSort(){
    BubbleSort(this.state.arrays);
  }

  render() {
    const { arrays } = this.state;
    const rectEle = arrays.map((value, idx) => (
      <div className="single-rect" style={{ height: `${value}px` }} key={idx}>
        {value}
      </div>
    ));
    return (
      <div className="Rectangle">
        <div className="container">{rectEle}</div>
        <button onClick={this.generateArray}>Generate Array</button>
        <button onClick={this.bubbleSort}>Sort</button>
      </div>
    );
  }
}

export default Rectangle;
