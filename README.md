# workshop test 01

# Left Rotation

A left rotation operation on an array of size *n* shifts each of the array's elements *1* unit to the left. For example, if *[1, 2, 3 , 4, 5]* left rotations are performed on array *[1, 2, 3, 4, 5]*, then the array would become *[3, 4, 5, 1, 2]*.

Given an array of *n* integers and a number, *d*, perform *d* left rotations on the array. Then print the updated array as a single line of space-separated integers.

**Input Format**

The first line contains two space-separated integers denoting the respective values of *n* (the number of integers) and *d* (the number of left rotations you must perform). 
The second line contains *n* space-separated integers describing the respective elements of the array's initial state.

**Constraints**

- 1 <= n <= 10^5
- 1 <= d <=n
- 1 <= a*i* <= 10^6


**Output Format**

Print a single line of  space-separated integers denoting the final state of the array after performing  left rotations.

**Sample Input**

```
5
4
1 2 3 4 5
```

**Sample Output**

```
5 1 2 3 4
```

**Explanation**

When we perform  left rotations, the array undergoes the following sequence of changes:

*[1, 2, 3, 4, 5]* -> *[2, 3, 4, 5, 1]* -> *[3, 4, 5, 1, 2]* -> *[4, 5, 1, 2, 3]* -> *[5, 1, 2, 3, 4]*

Thus, we print the array's final state as a single line of space-separated values, which is **5 1 2 3 4.**

**Code**

```javascript
function leftRotation(quant, rotation, list) {
  
}
```


**Tests Cases**

### Case 1

Input
```
5 4
1 2 3 4 5
```

Expect
```
5 1 2 3 4
```

### Case 2

Input
```
20 10
41 73 89 7 10 1 59 58 84 77 77 97 58 1 86 58 26 10 86 51
```

Expect
```
77 97 58 1 86 58 26 10 86 51 41 73 89 7 10 1 59 58 84 77
```

### Case 3

Input
```
14 7
98 67 35 1 74 79 7 26 54 63 24 17 32 81
```

Expect
```
26 54 63 24 17 32 81 98 67 35 1 74 79 7
```


### Case 4

Input
```
61 48
431 397 149 275 556 362 852 789 601 357 516 575 670 507 127 888 284 405 806 27 495 879 976 467 342 356 908 750 769 947 425 643 754 396 653 595 108 75 347 394 935 252 683 966 553 724 629 567 93 494 693 965 328 187 728 389 70 288 509 252 449
```

Expect
```
93 494 693 965 328 187 728 389 70 288 509 252 449 431 397 149 275 556 362 852 789 601 357 516 575 670 507 127 888 284 405 806 27 495 879 976 467 342 356 908 750 769 947 425 643 754 396 653 595 108 75 347 394 935 252 683 966 553 724 629 567
```


**Author Challenge** 

saikiran9194 -> https://www.hackerrank.com/profile/saikiran9194

