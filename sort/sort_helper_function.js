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
console.log(slice_array([5, 1, 1, 2, 0, 0]));

// MERGE SORT ENDS
