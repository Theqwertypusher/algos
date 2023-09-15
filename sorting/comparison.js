const bubbleSort = require("./bubbleSort.js").bubbleSort;
const insertionSort = require("./insertionSort.js").insertionSort;
const selectionSort = require("./selectionSort.js").selectionSort;
const mergeSort = require("./mergeSort.js").mergeSort;
const quickSort = require("./quickSort.js").quickSort;

const getPerformance = require("../utils/performance.js").getPerformance;

getPerformance(bubbleSort);
getPerformance(insertionSort);
getPerformance(selectionSort);
getPerformance(mergeSort);
getPerformance(quickSort);
