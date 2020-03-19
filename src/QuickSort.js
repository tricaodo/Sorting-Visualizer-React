import { swap, sleep } from "./helper";

function QuickSort(array){
    quickSortHelper(array, 0, array.length - 1);
    return array;
}

function quickSortHelper(array, startIdx, endIdx){
    if(startIdx <= endIdx) return;
    let pivotIdx = startIdx;
    let leftIdx = startIdx + 1;
    let rightIdx = endIdx;

    while(leftIdx <= rightIdx){
        if(array[pivotIdx] <= array[leftIdx] && array[pivotIdx] > array[rightIdx]){
            swap(array, leftIdx, rightIdx);
        }
        if(array[pivotIdx] >= array[leftIdx]){
            leftIdx++;
        }
        if(array[pivotIdx] <= array[rightIdx]){
            rightIdx--;
        }
    }
    swap(array, pivotIdx, rightIdx);
    // const leftRemainingSubArray = pivotIdx - 1 - startIdx < end - (pivotIdx + 1);
    quickSortHelper(array, startIdx, pivotIdx - 1);
    quickSortHelper(array, pivotIdx + 1, endIdx);
}