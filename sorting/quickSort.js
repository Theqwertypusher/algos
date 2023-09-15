const partition = (arr, low, high) => {
  const pivot = arr[high]; // last element is pivot
  let i = low - 1; // Index of the smaller element

  for (let j = low; j < high; j++) {
    // If the current element is smaller than or equal to the pivot
    if (arr[j] <= pivot) {
      i++;
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }

  [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];

  return i + 1; // Return the partitioning index
};

const quickSort = (arr, low = 0, high = arr.length - 1) => {
  if (low < high) {
    const pi = partition(arr, low, high);

    // Recursively sort elements before and after the partition
    quickSort(arr, low, pi - 1);
    quickSort(arr, pi + 1, high);
  }
  return arr;
};

const array = [3, 2, 4];
console.log(quickSort(array));

module.exports = { quickSort };
