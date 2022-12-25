//write factorial function

function factorial(num) {
  //1- using loop
  //   let result = 1;
  //   for (let i = num; i >= 1; i--) {
  //     result = result * i;
  //   }
  //   console.log("result", result);

  // 2 - using recusion : function that calls it self
  //basecaase
  if (num === 0) {
    return 1;
  }
  return num * factorial(num - 1);
  // return 5*factorial(4)//24*5
  //----------- //return 4 * factorial(3);//24
  //- -------------------------return 3 * factorial(2);//6
  //----------------------------------------return 2 * factorial(1);//2
  //---------------------------------------------------return 1 * factorial(0);//1
}

console.log(factorial(5));
