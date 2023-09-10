/**
Builds up the sort by gradually creating a larger left half which is always sorted
*/
const insertionSort = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    let temp = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > temp) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = temp;
  }
  return arr;
};

// test cases
console.log(insertionSort([2, 1, 3, 4, 5, 2]));
