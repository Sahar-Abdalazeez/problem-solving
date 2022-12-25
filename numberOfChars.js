//write a function that takes two params
//the first param is string 'one word'
//second param is a char
//calculate the number of char that appear in a string

function countChar(word, letter) {
  // i have three ways to solve this
  //1- first way usong loop

  //   let count = 0;
  //   for (let i = 0; i < word.length; i++) {
  //     if (word[i] === letter) {
  //       count++;
  //     }
  //   }
  //   console.log("count", count);

  //2-second way using regex
  //   const regex = new RegExp(letter, "g");
  //   console.log(word.match(regex).length);

  //3-third way using split it not to recommended
  let charNumber = word.split(letter).length - 1;
  console.log(charNumber);
}
countChar("sahar", "a");
