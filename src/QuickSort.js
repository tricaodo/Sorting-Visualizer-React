import { swap } from "./helper";

async function QuickSort(array) {
  await quickSortHelper(array, 0, array.length - 1);
  return array;
}

async function quickSortHelper(array, startIdx, endIdx) {
  if (startIdx >= endIdx) return;
  let pivotIdx = startIdx;
  let leftIdx = startIdx + 1;
  let rightIdx = endIdx;

  const bars = document.getElementsByClassName("Visualizer-single-bar");

  const pivotStyle = bars[pivotIdx].style;
  const leftStyle = bars[leftIdx].style;
  const rightStyle = bars[rightIdx].style;

  leftStyle.backgroundColor = "purple";
  rightStyle.backgroundColor = "purple";
  pivotStyle.backgroundColor = "red";

  while (leftIdx <= rightIdx) {
    if (array[pivotIdx] < array[leftIdx] && array[pivotIdx] > array[rightIdx]) {
      await swap(array, leftIdx, rightIdx, 10);
      let height = leftStyle.height;
      leftStyle.height = rightStyle.height;
      rightStyle.height = height;
    }
    if (array[pivotIdx] >= array[leftIdx]) {
      leftIdx++;
    }
    if (array[pivotIdx] <= array[rightIdx]) {
      rightIdx--;
    }
  }
  await swap(array, pivotIdx, rightIdx, 10);
  let height = pivotStyle.height;
  pivotStyle.height = rightStyle.height;
  rightStyle.height = height;

  pivotStyle.backgroundColor = "aquamarine";
  rightStyle.backgroundColor = "aquamarine";
  leftStyle.backgroundColor = "aquamarine";

  await quickSortHelper(array, startIdx, rightIdx - 1, 100);
  await quickSortHelper(array, rightIdx + 1, endIdx, 100);
}

export { QuickSort };
