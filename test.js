var minCost = function (colors, neededTime) {
  let i = 0;
  let j = 1;
  let sum = 0;
  while (j < colors.length) {
    if (colors[i] === colors[j]) {
      if (neededTime[i] < neededTime[j]) {
        sum += neededTime[i];
        i++;
        j++;
      } else {
        sum += neededTime[j];
        j++;
      }
    }else{
      i++;
      j++;
    }
  }
  return sum;
};

console.log(minCost("abaac",[1,2,3,4,5]));
