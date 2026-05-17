//algorithms / algos
// - algorithms are a set of steps or instructions

//prompt: given a string, determine if it is a palindrome.
// - a palindrome is a string thats the same backwards and forwards
// - ignore spaces, punctuation, and case.

//step one: read the prompt carefully

//step two: identify inputs, outputs, and any edge cases
// - input: string
// - output: boolean
// - edge cases: spaces, punctuations, cases

//step three: write sample test cases to define the behavior of function or algorithm
// - an edge case is what your code is expected to handle, often a boundary that exposes flaws
// - test cases: "pizza" => false, "level" => true, "Level" => true
// - test cases: "race car" => true, "racecar" => true, "race.car" => true

//step four: break the problem into smaller, codeable steps (testable)
// - what can we do at a low level? no for loops, indexes etc.
// - find a way to remove spaces, punctuation, and lowercase the input string
// - often the beginning the code will begin with edge cases
// - iterate over the string
// - it has nothing to compare to, so we want to compare the first to last => inwards
// - if they are equal all the way then we have a palindrome if not then return false

//step five: code and test

function isPalindrome(str) {
  //remove spaces, punctuation, and lowercase the string
  // - generally do not want to mutate data unless you need it later
  const cleanStrCopy = str.replace(/[^a-zA-Z0-9]/g, "").towLowerCase();
  // NOTE: this is replacing string using regular expression - will learn more later
  let left = 0;
  let right = cleanStrCopy.length - 1;
  while (left < right) {
    //now we can test our iterations
    console.log("left", left, "right", right);
    if (cleanStrCopy[left] !== cleanStrCopy[right]) {
      return false;
    }
    left++;
    right--;
  }
  console.log("cleanStrCopy", cleanStrCopy);
  // - string before logging so you get a better view of whats happening
}

isPalindrome("race.car");
