//write a function that take n as parameter and sum from 1 to n
//write function that sum all number between1 and n
const root = document.getElementById("root");

function sumToN(n) {
  //this is the loop way
  //   let result = 0;
  //   for (let i = 1; i <= n; i++) {
  //     result += i;
  //   }

  //mathematical way which is simple and less complexity
  result = (n * (n + 1)) / 2;
  //   console.log("result", result);
}
sumToN(3);
