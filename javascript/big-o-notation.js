//big O notation: allows us to express efficiency or complexity of an algorithm solution
// - describes both time(speed) and space(memory) efficiency
// - it explains how well a solution works under various conditions

//relates to two key things:
// [1] the input size
// [2] the number of operations / amount of memory needed

//Common Complexities:

//Constant O(1): the input size does not impact the number of operations needed to perform
// ex:
// input: 10 elements output: 2 operations === input: 20 elements output: 2 operations
// - number of operations the same regardless of input

//Logarithmic O(log n): fewer actions to handle a larger input
// ex:
// input: 10 / input: 50 / input: 100 => operations: 10 / operations: 30 / operations: 40
// - the larger the input the more efficient it becomes

//Linear O(n): direct relationship between input and computations
// ex:
// input: 20 operations: 30 / input: 40 operations: 60

//Squared O(n-squared) / quadratic O(n^2): an increase of input operations grow exponentially
// ex:
// input: 100 operations: 1000 / input: 1000 operations 1000000

//Demonstrations:

//O(n-squared) / O(n^2):
function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    // runs n times
    for (let j = 0; j < arr.length - 1 - i; j++) {
      // runs ~n times for each i
      if (arr[j] > arr[j + 1]) {
        // swap
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

//O(n * log n)
function mergeSort(arr) {
  if (arr.length <= 1) return arr; // base case

  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));

  return merge(left, right);
}

function merge(left, right) {
  const result = [];
  let i = 0,
    j = 0;

  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      result.push(left[i]);
      i++;
    } else {
      result.push(right[j]);
      j++;
    }
  }

  return result.concat(left.slice(i)).concat(right.slice(j));
}

//O(1)
function getLowestValue(sortedArray) {
  return sortedArray[0];
}
