import React, { Component } from "react";
function BubbleSort(array) {
  // const{arrays} = this.state;
  console.log(array);
  for (let i = array.length; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      if (array[j] > array[j + 1]) {
        let temp = array[j];
        setTimeout(() => {
            array[j] = array[j + 1];
            array[j + 1] = temp;
        }, i * 3000);
      }
    }
  }
  console.log(array);
}

export { BubbleSort };
