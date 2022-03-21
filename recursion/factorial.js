let factorial = num => {
  if (num === 1 || num === 0) return 1;

  return num * factorial(num-1);
}

console.log(factorial(4));

//return 4 * factorial(3)
              //return 3 * factorial(2)
                            //return 2 * factorial(1)
                                          //return 1 * factorial(0)

//return 4 * 5
              //return 3 * 2 = 5
                            //return 2 * 1 = 2
                                          //return 1 * 1 = 1
