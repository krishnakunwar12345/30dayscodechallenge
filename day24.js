/*Find if elements that can make key = 10 
arr[1,2,3,4,5]*/

/*You can find if there are elements in the given array that can make a key of 10 by iterating through the array and checking for pairs of elements whose sum is equal to 10. 
Here's a JavaScript function that does this:javascript*/

function hasPairWithSum(arr, key) {
    const numSet = new Set();
  
    for (let i = 0; i < arr.length; i++) {
      const complement = key - arr[i];
      
      if (numSet.has(complement)) {
        return true; // Found a pair that adds up to the key
      }
  
      numSet.add(arr[i]);
    }
  
    return false; // No pair found
  }
  
  const arr = [1, 2, 3, 4, 5];
  const key = 10;
  
  if (hasPairWithSum(arr, key)) {
    console.log("There are elements that can make the key of 10.");
  } else {
    console.log("There are no elements that can make the key of 10.");
  }
 
  
/*This code defines a hasPairWithSum function that uses a Set to keep track of elements seen so far. 
It iterates through the array and checks if the complement of the current element (i.e., key - arr[i]) is already in the Set.
 If it is, that means a pair of elements has been found that adds up to the key, and the function returns true. 
 If no such pair is found after iterating through the entire array, the function returns false.*/















