function isPalindrome(word) {
  const originalWord = word.toLowerCase();
  /*split, reverse, join to make new word*/
  const newWord = originalWord.split("").reverse().join("");
//now set Boolean to return; should return false/true
 return newWord === originalWord;
}

/* 
convert word to all lowercase
turn string into a an array with substrings (aka, turn each letter 
  in the word into it's own string)
reverse the array 
join the array
set the new string to equal the old one to check if it's true/false (Boolean!)

*/

/*
  Add written explanation of your solution here
*/

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
