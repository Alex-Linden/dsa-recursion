/** product: calculate the product of an array of numbers. */

function product(nums) {
  if (nums.length === 0) return 1;

  return nums.pop() * product(nums);

}

/** longest: return the length of the longest word in an array of words. */

function longest(words) {
  if (words.length === 0) return 0;

  let length = words.pop().length;
  let length2 = longest(words);
  if (length < length2) {
    length = length2;
  }
  return length;

}

/** everyOther: return a string with every other letter. */

function everyOther(str) {
  if (str.length === 0) return "";

  return str[0] + everyOther(str.slice(2));

}

/** find: return boolean depending on if val exists in array or not. */

function find(arr, val) {
  if (arr.length === 0) return false;

  if (arr[0] === val) {
    return true;
  } else {
    return find(arr.slice(1), val);
  }

}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str) {
  if (str.length <= 1) return true;

  if (str[0] === str[str.length - 1]) {
    isPalindrome(str.slice(1, str.length - 2));
  } else {
    return false;
  }
  return true;
}

/** revString: return a copy of a string, but in reverse. */

function revString(str) {
  if (str.length === 0) return '';

  return str[str.length - 1] + revString(str.slice(0, str.length - 1));

}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val) {
  if (arr.length === 0) return -1;

  let i = 0;

  if (arr[0] === val) {
    return i;
  } else {
    let j = findIndex(arr.slice(1), val);
    if (j < 0) {
      return j;
    } else {
      return 1 + j;
    }
  }

}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {
  let strings = [];
  for (let key in obj) {
    if (typeof obj[key] === 'object') {
      strings.push(...gatherStrings(obj[key]));
    } else if (typeof obj[key] === 'string') {
      strings.push(obj[key]);
      console.log(strings);
    }
  }
  return strings;
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

// function binarySearch(arr, val) {
//   if(arr.length === 0) return -1;
//   if (arr.length === 1) return 0;

//   if(arr[Math.floor(arr.length/2)] > val){
//     return binarySearch(arr.slice(arr.length/2, arr.length/2), val)
//   } else if(arr[arr.length/2] < val){
//     return binarySearch(arr.slice(arr.length/2), val)
//   }

// }

// you might find this problem easier if you change the function signature to:
//
function binarySearch(arr, val, left = 0, right = arr.length) {
  debugger;
  if (left > right) return -1;

  let middle = Math.floor((left + right) / 2);
  if (arr[middle] === val) {
    return middle;
  } else if (arr[middle] > val) {
    return binarySearch(arr, val, left, middle - 1);
  } else {
    return binarySearch(arr, val, middle + 1, right);
  }
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
