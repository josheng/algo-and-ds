function linearSearch(arr, num) {
  // add whatever parameters you deem necessary - good luck!
  for (let number of arr) {
    if (number === num) {
      return arr.indexOf(number)
    }
    // console.log(number);
  }
  return -1
}

console.log(linearSearch([10,15,20,25,30], 15));
