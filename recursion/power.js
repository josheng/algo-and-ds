let power = (num1, num2) => {
  if (num2 === 0) return 1;

  return num1 * (power(num1, num2-1))
// return 2 * (power(2,3))
//              return 2 * (power(2,2))
//                            return 2 * (power(2,1))
            //                            return 2 * (power(2,0))

// return 2 * (8) = 16
//              return 2 * (4) = 8
//                            return 2 * (2) = 4
            //                            return 2
}

console.log(power(2,4));
