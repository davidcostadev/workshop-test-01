// function
function leftRotation(quant, rotation, arr) {
  if(
    quant < 1 || quant > Math.pow(10,5) ||
    rotation < 1 || rotation > quant ||
    arr.length < 1 || arr.length > Math.pow(10, 6) ||
    arr.length > quant || arr.length < quant
    )
  {
    return null;
  }

  for(let i=0; i < rotation; i++) {
    let taken = arr.shift();
      arr.push(taken);
  }
  return arr;
}

module.exports = leftRotation;
