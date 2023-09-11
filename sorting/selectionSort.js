/**
Selection sort works by dividing the input into a sorted and an unsorted region. 
It repeatedly selects the smallest (or largest, depending on the ordering) 
element from the unsorted region, and moves it to the end of the sorted region, 
until the entire array is sorted.
*/
const selectionSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[min] > arr[j]) {
        min = j;
      }
    }
    if (min !== i) {
      let temp = arr[i];
      arr[i] = arr[min];
      arr[min] = temp;
    }
  }
  return arr;
};

// test cases
// console.log(selectionSort([2, 1, 3, 4, 5, 2]));

module.exports = {
  selectionSort,
};
