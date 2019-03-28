const leftRotation = require('../src/left-rotation-dvd');

const case1arr = [1, 2, 3, 4, 5]
const case1expect = [5, 1, 2, 3, 4]
const case2arr = [41, 73, 89, 7, 10, 1, 59, 58, 84, 77, 77, 97, 58, 1, 86, 58, 26, 10, 86, 51]
const case2expect = [77, 97, 58, 1, 86, 58, 26, 10, 86, 51, 41, 73, 89, 7, 10, 1, 59, 58, 84, 77]
const case3arr = [98, 67, 35, 1, 74, 79, 7, 26, 54, 63, 24, 17, 32, 81]
const case3expect = [26, 54, 63, 24, 17, 32, 81, 98, 67, 35, 1, 74, 79, 7]
const case4arr = [431, 397, 149, 275, 556, 362, 852, 789, 601, 357, 516, 575, 670, 507, 127, 888, 284, 405, 806, 27, 495, 879, 976, 467, 342, 356, 908, 750, 769, 947, 425, 643, 754, 396, 653, 595, 108, 75, 347, 394, 935, 252, 683, 966, 553, 724, 629, 567, 93, 494, 693, 965, 328, 187, 728, 389, 70, 288, 509, 252, 449]
const case4expect = [93, 494, 693, 965, 328, 187, 728, 389, 70, 288, 509, 252, 449, 431, 397, 149, 275, 556, 362, 852, 789, 601, 357, 516, 575, 670, 507, 127, 888, 284, 405, 806, 27, 495, 879, 976, 467, 342, 356, 908, 750, 769, 947, 425, 643, 754, 396, 653, 595, 108, 75, 347, 394, 935, 252, 683, 966, 553, 724, 629, 567]

describe('Array rotations', () => {

  test('test 1', () => { 
    expect(leftRotation(5, 4, case1arr)).toEqual(case1expect);
  })

  test('test 2', () => { 
    expect(leftRotation(20, 10, case2arr)).toEqual(case2expect);
  })
  
  test('test 3', () => { 
    expect(leftRotation(14, 7, case3arr)).toEqual(case3expect);
  })
  
  test('test 4', () => { 
    expect(leftRotation(61, 48, case4arr)).toEqual(case4expect);
  })
});