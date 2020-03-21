import { swap, sleep } from "./helper";
async function BubbleSort(array) {
  const bars = document.getElementsByClassName("Visualizer-single-bar");
  for (let i = array.length; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      const bar1Style = bars[j].style;
      const bar2Style = bars[j + 1].style;
      bar1Style.backgroundColor = "#eeeeee";
      bar2Style.backgroundColor = "red";
      if (array[j] > array[j + 1]) {
        bar1Style.backgroundColor = "green";
        await swap(array, j, j + 1);
        let height = bar1Style.height;
        bar1Style.height = bar2Style.height;
        bar2Style.height = height;
      }
      bar1Style.backgroundColor = "aquamarine";
      bar2Style.backgroundColor = "aquamarine";
    }
  }
}

export { BubbleSort };
