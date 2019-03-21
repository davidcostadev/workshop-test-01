// function
function leftRotation(quant, rotation, arr) {
  
  let arrayParameter = arr || [];

  if(
    quant < 1 || quant > Math.pow(10,5) ||
    rotation < 1 || rotation > quant ||
    arrayParameter.length < 1 || arrayParameter.length > Math.pow(10, 6) ||
    arrayParameter.length > quant || arrayParameter.length < quant
    )
  {
    return null;
  }

  for(let i=0; i < rotation; i++) {
    let taken = arrayParameter.shift();
      arrayParameter.push(taken);
  }
  return arrayParameter;
}

module.exports = leftRotation;