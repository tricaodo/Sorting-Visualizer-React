import { swap, sleep } from "./helper";

async function QuickSort(bars) {
  await quickSortHelper(bars, 0, bars.length - 1);
  return bars;
}

async function quickSortHelper(bars, startIdx, endIdx) {
  if (startIdx >= endIdx) return;
  let pivotIdx = startIdx;
  let leftIdx = startIdx + 1;
  let rightIdx = endIdx;

  const pivotStyle = bars[pivotIdx].style;
  const leftStyle = bars[leftIdx].style;
  const rightStyle = bars[rightIdx].style;

  leftStyle.backgroundColor = "yellow";
  rightStyle.backgroundColor = "yellow";
  pivotStyle.backgroundColor = "red";

  const pivotHeight = pivotStyle.height.split("px")[0];
  const leftHeight = leftStyle.height.split("px")[0];
  const rightHeight = rightStyle.height.split("px")[0];

  while (leftIdx <= rightIdx) {
    if (pivotHeight < leftHeight && pivotHeight > rightHeight) {
      // await swap(bars, leftIdx, rightIdx, 50);
      swap(bars, leftIdx, rightIdx, 50);
    }
    if (pivotHeight >= leftHeight) {
      leftIdx++;
    }
    if (pivotHeight <= rightHeight) {
      rightIdx--;
    }
  }
  pivotStyle.backgroundColor = "aquamarine";
  rightStyle.backgroundColor = "aquamarine";
  leftStyle.backgroundColor = "aquamarine";

  // Promise.all(
  //   await quickSortHelper(bars, startIdx, rightIdx - 1),
  //   await quickSortHelper(bars, rightIdx + 1, endIdx)
  // );
}

export { QuickSort };
