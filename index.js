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
  We need to take the word and first set it to all lowercase (assuming that the word
is not all lowercase already) using the .LowerCase() method, and set it equal to a new 
variable. Next, we create another new variable that takes the originalWord and 
splits in into an array of letters in the string, reverses the new array,
then joins it using the .split(), .reverse(), .join() methods.
 (I forgot to put "" in as the argument
for the .split() and .join() methods and was recieving errors due to it not splitting
the word properly. Oops! Lesson learned.)
Lastly, we take the originalWord and newWord(reversed originalWord) and return the 
Boolean value of the two. Woo!
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
