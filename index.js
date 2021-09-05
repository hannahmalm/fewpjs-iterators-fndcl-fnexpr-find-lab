// Write a function called superbowlWin() in index.js that: 
//* Receives 1 argument, an Array of JavaScript Objects *
// Each object has two properties: year and result * Use find() to test each Object to see if the result is "W" 
//— a win! * superbowlWin() should return the year when the win occurred (if it occurred at all!). 
//If no win is found, it should return, sadly, undefined

//the Array of Javascript objects is called record
const record = [
    {year: "2018", result: "L"},
    {year: "2017", result: "W"},
    {year: "2016", result: "N/A"}
    //...
  ]

 //1. Create a new function called superbowlWin 
 //2. pass in the argument of the Array - in this case the array is called "record", so pass in record
 //3. use let - let allows you to declare variables that are limited to the scope of a block statement, or expression on which it is used,
    // use let to create a new variable called result 
    // we are doing this to store the logic into the result variable to use later
//4. Within let, find the individual record
  //.find () the record where (=>) the record.result = W
  // use === because its the strongest and wont bring back w or W unless its a string - equal value and equal type
  // Example of .find => const result = inventory.find( ({ name }) => name === 'cherries' );
  // now we have found the record with the result of W and have saved it into a variable
//5. explicitly return the result and use a terniary operator
  //terniary operator = variablename = (condition) ? value1:value2
  // return the result - either the result year or undefined if the record has no Wins

function superbowlWin (record) {
   let result = record.find( record => record.result === "W")
   return result ? result.year : undefined
  }
