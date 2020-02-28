function generateArray(size) {
  const array = [];
  for (let i = 0; i < size; i++) {
    const rand = Math.floor(Math.random() * 500) + 1;
    array.push(rand);
  }
  return array;
}

export {generateArray};
