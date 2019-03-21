const leftRotation = require('../src/left-rotation-zenobio');

// VALID RETURN EXPECTED
it('To shift the values from the right to the left', () => {
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
  expect(leftRotation(5, 4, FIRST_CASE.entry)).toEqual(FIRST_CASE.return);
  expect(leftRotation(20, 10, SECOND_CASE.entry)).toEqual(SECOND_CASE.return);
  expect(leftRotation(14, 7, THIRD_CASE.entry)).toEqual(THIRD_CASE.return);
  expect(leftRotation(61, 48, FOURTH_CASE.entry)).toEqual(FOURTH_CASE.return);
});

// EXPECTED NULL
it('Expect NULL to be returned', () =>{
  
  // no parameters
  expect(leftRotation()).toBe(null);
  // items (quant) < 1
  expect(leftRotation(0)).toBe(null);
  // rotation < 1
  expect(leftRotation(1, 0)).toBe(null);
  // rotation > items (quant)
  expect(leftRotation(1, 2)).toBe(null);
});
