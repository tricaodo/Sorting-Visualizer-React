let timeID;
function generateArray(size) {
  const array = [];
  for (let i = 0; i < size; i++) {
    const rand = Math.floor(Math.random() * 500) + 1;
    array.push(rand);
  }
  return array;
}

async function swap(array, i, j, delay) {
  timeID = await sleep(delay);
  let temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}

function sleep(time) {
  return new Promise(function(resolve) {
    setTimeout(resolve, time);
  });
}

function clearTimeout() {
  if (timeID) {
    clearTimeout(timeID);
  }
}

export { generateArray, swap, clearTimeout, sleep };
