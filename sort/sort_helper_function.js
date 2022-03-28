// MERGE SORT BEGINS
let merge_array = (arr1, arr2) => {
  //empty array to store the new array
  let new_arr = [];
  //index counter to iterate thru the array
  let i = 0;
  let j = 0;
  // start the comparison of the array
  // break when either one of the array is done iterating
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      // push to new array if smaller
      new_arr.push(arr1[i]);
      // increase the counter for next iteration of comparison
      i++;
    }else {
      new_arr.push(arr2[j]);
      j++;
    }
  }
  // while loop to clean up the rest
  while (i < arr1.length) {
    new_arr.push(arr1[i]);
    i++;
  }
  // will not trigger if there is no more since j will be more then the length
  while (j < arr2.length) {
    new_arr.push(arr2[j]);
    j++;
  }
  // console.log("sending back " + new_arr);
  return new_arr;

}

// slice array down to 1 each recursively
let slice_array = arr => {
  // console.log("receiving arr" + arr);
  // base case to break the recursion when array only left 1 length
  if (arr.length <= 1) return arr;
  // break the array in half with mid point
  let mid = Math.floor(arr.length/2);

  // start recursion here until array length is 1
  // always resolve the left side first due to order

  let left = slice_array(arr.slice(0,mid));
  let right = slice_array(arr.slice(mid));

  // console.log("sending L to merg " + left);
  // console.log("sending R to merg " + right);

  //at the end of recusion will return the new array coming from merge_array
  return merge_array(left,right);

}

// console.log(slice_array([6,2,4,3,1,9,0,5,8,7,-2,-9,100,72,88,33,-69,0,1,5]));
// console.log(slice_array([5, 1, 1, 2, 0, 0]));

// MERGE SORT ENDS

// QUICK SORT BEGINS

// 3 params, the array, start index and end index
function pivot(arr, start = 0, end = arr.length - 1) {
  // swapper function
  // to swap the position of the smaller item to the front
  const swap = (arr, index1, index2) => {
    [arr[index1], arr[index2]] = [arr[index2], arr[index1]];
  };

  // We are assuming the pivot is always the first element
  let pivot = arr[start];
  let swapIndex = start;

  // loop thru the array, starting from index 1
  for (let i = start + 1; i <= end; i++) {
    // if the pivot is greater then the element
    if (pivot > arr[i]) {
      //increment my swap index
      swapIndex++;
      // proceed to swap the element that is inside the array
      swap(arr, swapIndex, i);
    }
  }

  // Swap the pivot position from the start to the new index position
  // the position will be in its location
  swap(arr, start, swapIndex);

  // return the swap index
  // array will be swapped permanently in place
  return swapIndex;
}


function quickSort(arr, left = 0, right = arr.length - 1) {
  // this is the base case
  // only continue if left is smaller then right
  if (left < right) {
    // call pivot function and receive the swap index
    let pivotIndex = pivot(arr, left, right) //3
    //send the array to the left of swap index to recursive check
    quickSort(arr, left, pivotIndex - 1);
    //send the array to the right of swap index to recursive check
    quickSort(arr, pivotIndex + 1, right);
  }
  // return the sorted array
  return arr;
}

// quickSort([100, -3, 2, 4, 6, 9, 1, 2, 5, 3, 23])

// QUICK SORT ENDS

// RADIX SORT BEGINS

// get the digit at its ith position
// only work for base 10 number
// i = position, i.e i = 0, num = 12345 will return 5, i = 1 return 4 etc
function getDigit(num, i) {
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

// count how many digit is in the number
function digitCount(num) {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

// find out what is the most digits, which will be used as the number of iteration
function mostDigits(nums) {
  let maxDigits = 0;
  for (let i = 0; i < nums.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(nums[i]));
  }
  return maxDigits;
}


function radixSort(nums) {
  // this will set the number of loops
  let maxDigitCount = mostDigits(nums);
  // loop thru base on the highest number of digits
  for (let k = 0; k < maxDigitCount; k++) {
    // create a array with 10 subarray
    let digitBuckets = Array.from({ length: 10 }, () => []);
    // loop thru the array
    for (let i = 0; i < nums.length; i++) {
      // find out the i position digit
      let digit = getDigit(nums[i], k);
      // push it into its respective subarray
      digitBuckets[digit].push(nums[i]);
    }
    // combine the subarray into 1 full array, similar to ruby flatten
    nums = [].concat(...digitBuckets);
  }
  return nums;
}

radixSort([23, 345, 5467, 12, 2345, 9852])

// RADIX SORT ENDS
