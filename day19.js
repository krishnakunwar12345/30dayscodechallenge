/* Put all negative no on the left side of array [-1,-1,0,9,-6
 To orearrange an array in JavaScript so that all negative numbers are on the left side, you can use a simple sorting 
 function. Here's one way to do it*/
function rearrangeArray(arr) {
  const negativeNumbers = arr.filter(num => num < 0);
  const nonNegativeNumbers = arr.filter(num => num >= 0);
  return negativeNumbers.concat(nonNegativeNumbers);
}

const originalArray = [-1, -1, 0, 9, -6];
const rearrangedArray = rearrangeArray(originalArray);
console.log(rearrangedArray);


/*In this code, we first use the filter method to create two separate arrays: 
one containing all the negative numbers and another containing all the non-negative numbers. 
Then, we use the concat method to combine these two arrays, with the negative numbers appearing first. 
This results in the desired rearranged array with negative numbers on the left side*/

