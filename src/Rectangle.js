import React, { Component } from "react";
import { BubbleSort } from "./BubbleSort";
import "./Rectangle.css";

const PRIMARY_COLOR = "aquamarine";
const PROCESSING_COLOR = "red";
const SPEED_MS = 1;

class Rectangle extends Component {
  constructor() {
    super();
    this.state = {
      array: []
    };
    this.generateArray = this.generateArray.bind(this);
    this.bubbleSort = this.bubbleSort.bind(this);
  }

  generateArray() {
    const size = 200;
    const newArr = [];
    for (let i = 0; i < size; i++) {
      const rand = Math.floor(Math.random() * 300) + 1;
      newArr.push(rand);
    }
    this.setState({ array: newArr });
  }

  async bubbleSort() {
    const { array } = this.state;

    for (let i = array.length; i > 0; i--) {
      for (let j = 0; j < i - 1; j++) {
        const barEl = document.getElementsByClassName("single-bar");
        const bar1Style = barEl[j].style;
        const bar2Style = barEl[j + 1].style;
        if (array[j] > array[j + 1]) {
          bar1Style.backgroundColor = PROCESSING_COLOR;
          bar2Style.backgroundColor = PROCESSING_COLOR;
          await this.swap(array, j, j + 1);
          let height = bar1Style.height;
          bar1Style.height = bar2Style.height;
          bar2Style.height = height;
          bar1Style.backgroundColor = PRIMARY_COLOR;
          bar2Style.backgroundColor = PRIMARY_COLOR;
        }
      }
    }
    this.setState({ array: array });
  }
  async swap(array, i, j) {
    await this.sleep(1);
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }

  sleep(time) {
    return new Promise(function(resolve) {
      setTimeout(resolve, time);
    });
  }

  render() {
    const { array } = this.state;
    const rectEle = array.map((value, idx) => (
      <div
        className="single-bar"
        style={{ height: `${value}px`, backgroundColor: `${PRIMARY_COLOR}` }}
        key={idx}
      ></div>
    ));
    return (
      <div className="Rectangle-body">
        <div className="Rectangle-container">
          {rectEle}
          <button onClick={this.generateArray}>Generate Array</button>
          <button onClick={this.bubbleSort}>Sort</button>
        </div>
      </div>
    );
  }
}

export default Rectangle;
