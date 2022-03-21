let countUniqueValues = arr => {
  let i = 0;
  let j = 1;
  let counter = 0;
  while (j <= arr.length) {
    if (arr[i] === arr[j]){
      j++;
    }else{
      counter++;
      i = j;
    }
  }
  return counter
}

console.log(countUniqueValues([1,1,1,1,1,2]));
console.log(countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]));
console.log(countUniqueValues([]));
