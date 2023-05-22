function isPalindrome(word) {
  // Write your algorithm here

  //  // Convert the word to lowercase
  word = word.toLowerCase();

  //  // Reverse word to read it in backward
  const reverseword = word.split('').reverse().join('');

    // Compare the original word with the reversed word
  if (word === reverseword) {
    return true;
  } else {
    return false;
  }
  

}
console.log(isPalindrome("mom"));
console.log(isPalindrome("Kande"))
console.log(isPalindrome("racecar"))
/* 
  Add your pseudocode here
*/
//read the word forward and backward to verify that it it the same word.
/*
  Add written explanation of your solution here
*/ //the function isPalindrom takes the string "word" as argument.
//  it converts that string into lowercase using toLowerCase('');
//  It splits the string and reverses it then joins it using split(), reverse(), and join() to have the word in the other direction.
//   It finally compares the two words to if they are equal or not using the if, else statement

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
