// function
function leftRotation(quant, rotation, arr) {
  for (let i = 1; i <= rotation; i = i + 1) {
    const firstElement = arr.shift();
    arr.push(firstElement);
  }
  return arr;
}

module.exports = leftRotation;
