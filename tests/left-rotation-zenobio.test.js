const leftRotation = require('../src/left-rotation-zenobio');

const FIRST_CASE = {
  entry: [
    1, 2, 3, 4, 5
  ],
  return: [
    5, 1, 2, 3, 4
  ]
}
const SECOND_CASE = {
  entry: [
    41, 73, 89, 7, 10, 1, 59, 58, 84, 77, 77, 97, 58, 1, 86, 58, 26, 10, 86, 51
  ],
  return: [
    77,97,58,1,86,58,26,10,86,51,41,73,89,7,10,1,59,58,84,77
  ]
}
const THIRD_CASE = {
  entry: [
    98, 67, 35, 1, 74, 79, 7, 26, 54, 63, 24, 17, 32, 81
  ],
  return: [
    26,54,63,24,17,32,81,98,67,35,1,74,79,7
  ]
}
const FOURTH_CASE = {
  entry: [
    431,397,149,275,556,362,852,789,601,357,516,575,670,507,127,
    888,284,405,806,27,495,879,976,467,342,356,908,750,769,947,
    425,643,754,396,653,595,108,75,347,394,935,252,683,966,553,
    724,629,567,93,494,693,965,328,187,728,389,70,288,509,252,449
  ],
  return: [
    93,494,693,965,328,187,728,389,70,288,509,252,449,431,397,
    149,275,556,362,852,789,601,357,516,575,670,507,127,888,
    284,405,806,27,495,879,976,467,342,356,908,750,769,947,425,
    643,754,396,653,595,108,75,347,394,935,252,683,966,553,724,629,567
  ]
}

describe("Expected return to match the mocked retun", () => {
  it('First Case with 5 quantity - 4 rotation', () => {
    expect(leftRotation(5, 4, FIRST_CASE.entry)).toEqual(FIRST_CASE.return);
  });

  it('Second Case with 20 quantity - 10 rotation', () => {
    expect(leftRotation(20, 10, SECOND_CASE.entry)).toEqual(SECOND_CASE.return);
  });

  it('Third Case with 14 quantity - 7 rotation', () => {
    expect(leftRotation(14, 7, THIRD_CASE.entry)).toEqual(THIRD_CASE.return);
  });

  it('Fourth Case with 61 quantity - 48 rotation', () => {
    expect(leftRotation(61, 48, FOURTH_CASE.entry)).toEqual(FOURTH_CASE.return);
  });
});

describe("Expected a NULL return in all cases", () => {
  it('with a empty input', () =>{
    expect(leftRotation()).toBe(null);
  });

  it('with quantity minor than one', () => {
    expect(leftRotation(0)).toBe(null);
  });

  it('with rotation minor than one', () => {
    expect(leftRotation(1, 0)).toBe(null);
  });
  
  it('with rotation bigger than quantity', () => {
    expect(leftRotation(1, 3)).toBe(null);
  });
})
