/** 
declare func that accepts an input arr
    declare copy 
    iterate through arr at 0 index
        iterate through arr at 1 index
            if i > j 
                set copy to i 
                reassign i to j 
                reassign j to copy
    return arr 
*/
const bubbleSort = (arr) => {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
};

// test cases
// console.log(bubbleSort([1, 5, 32, 6, 3, 2]));

module.exports = {
  bubbleSort,
};
