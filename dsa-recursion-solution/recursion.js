/** product: calculate the product of an array of numbers. */

function product(nums) {
  // base case: product of an empty list is 1
  if (nums.length === 0) return 1;

  return nums[0] * product(nums.slice(1));
}

// another possibility, using idx to track where we are in nums:
//
// function product(nums, idx = 0) {
//   if (idx === nums.length) return 1;
//   return nums[idx] * product(nums, idx + 1);
// }


/** longest: return the length of the longest word in an array of words. */

function longest(words) {
  // base case: longest word in empty list is 0

  if (words.length === 0) return 0;
  const thisLength = words[0].length;
  return Math.max(thisLength, longest(words.slice(1)));
}

// another possibility:
//
// function longest(words, idx = 0) {
//   if (idx === words.length) return 0;
//   const thisLength = words[idx].length;
//   return Math.max(thisLength, longest(words, idx + 1));


/** everyOther: return a string with every other letter. */

function everyOther(str) {
  if (str === "") return "";

  return str[0] + everyOther(str.slice(2));
}

// another possibility, going up & using idx to keep track of where we are
//
// function everyOther(str, idx = 0, newStr = "") {
//   if (idx >= str.length) return newStr;
//   newStr += str[idx];
//   return everyOther(str, idx + 2, newStr);
// }


/** find: return t/f is val is in arr. */

function find(arr, val) {
  // base cases:
  if (arr.length === 0) return false;  // never found
  if (arr[0] === val) return true;  // found it!

  return find(arr.slice(1), val);
}


/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str) {
  // base cases:
  if (str.length < 2) return true;  // we won!
  if (str[0] !== str[str.length - 1]) return false;  // we lost!

  // recursive case: keep checking
  return isPalindrome(str.slice(1, str.length - 1));
}

// another possibility:
//
// function isPalindrome(str, idx = 0) {
//   let leftIdx = idx;
//   let rightIdx = str.length - idx - 1;
//   if (leftIdx >= rightIdx) return true;
//   if (str[leftIdx] !== str[rightIdx]) return false;
//   return isPalindrome(str, idx + 1);
// }


/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val) {
  // base cases:
  if (arr.length === 0) return -1;
  if (arr[0] === val) return 0;  // we found it at "position 0"

  const got = findIndex(arr.slice(1), val);
  // subtle part: since we didn't find it here, add 1 to where the next func
  // found it, which will keep track of how many times we "climbed down"
  // once we got the answer
  return got === -1 ? -1 : got + 1;
}

// another possibility:
//
// function findIndex(arr, val, idx = 0) {
//   if (idx === arr.length) return -1;
//   if (arr[idx] === val) return idx;
//   return findIndex(arr, val, idx + 1);
// }

/** revString: return a copy of a string, but in reverse. */

function revString(str) {
  // base case
  if (str === "") return "";

  return revString(str.slice(1)) + str[0];
}

// another possibility:
//
// function revString(str, idx = 0, newStr = "") {
//   if (newStr.length === str.length) return newStr;
//   newStr += str[str.length - 1 - idx];
//   return revString(str, idx + 1, newStr);
// }


/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {
  let stringArr = [];
  for (let key in obj) {
    if (typeof obj[key] === "string") stringArr.push(obj[key]);
    if (typeof obj[key] === "object") stringArr.push(...gatherStrings(obj[key]));
  }
  return stringArr;
}


/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val, left = 0, right = arr.length) {
  if (left > right) {
    return -1;
  }
  let middle = Math.floor((right + left) / 2);
  if (arr[middle] === val) {
    return middle;
  }
  if (arr[middle] > val) {
    return binarySearch(arr, val, left, middle - 1);
  }
  return binarySearch(arr, val, middle + 1, right);
}


module.exports = {
  product,
  longest,
  everyOther,
  find,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};
