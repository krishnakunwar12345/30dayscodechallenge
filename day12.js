// Find the missing number in a given integer array of 1 to 100
function findMissingNumber(arr) {
    // Calculate the sum of the integers from 1 to 100
    const expectedSum = (100 * 101) / 2;
  
    // Calculate the actual sum of the elements in the array
    const actualSum = arr.reduce((acc, num) => acc + num, 0);
  
    // The missing number is the difference between the expected sum and the actual sum
    const missingNumber = expectedSum - actualSum;
  
    return missingNumber;
  }
  
  // Example usage:
  const integerArray = [1, 2, 3, 4, 5, /* ... */, 99, 100]; // This array is missing one number
  const missingNumber = findMissingNumber(integerArray);
  console.log("The missing number is:", missingNumber);
//   in this code, we first calculate the expected sum of integers from 1 to 100 using the formula for the sum of an arithmetic 
//   series (n * (n + 1) / 2). Then, we calculate the actual sum of the elements in the given array. 
//   The missing number is the difference between the expected sum and the actual sum


// Find a duplicate number in an array of integers
function findDuplicateNumber(arr) {
    const numSet = new Set();
  
    for (const num of arr) {
      if (numSet.has(num)) {
        return num; // Found a duplicate
      }
      numSet.add(num);
    }
  
    // If no duplicate is found, return null or any other suitable value
    return null;
  }
  
  // Example usage:
  const integeArray = [1, 2, 3, 4, 5, 3, 6]; // This array contains a duplicate (3)
  const duplicateNumber = findDuplicateNumber(integeArray);
  
  if (duplicateNumber !== null) {
    console.log("The duplicate number is:", duplicateNumber);
  } else {
    console.log("No duplicate number found in the array.");
  }
//   In this code, we use a Set called numSet to keep track of unique numbers encountered in the array. We iterate through the array, and for each number, we check if it's already in the set. If it is, we've found a duplicate and return that number. If not, we add it to the set. 
//   If no duplicates are found during the iteration, we return null (or you can choose another suitable value or message)


// Find all duplicate numbers in an array with multiple duplicates 
function findAllDuplicates(arr) {
    const numCount = {};
    const duplicates = [];
  
    // Count the occurrences of each number in the array
    for (const num of arr) {
      if (numCount[num]) {
        numCount[num]++;
      } else {
        numCount[num] = 1;
      }
    }
  
    // Find and store all numbers with more than one occurrence
    for (const num in numCount) {
      if (numCount[num] > 1) {
        duplicates.push(parseInt(num));
      }
    }
  
    return duplicates;
  }
  
  // Example usage:
  const integerArra = [1, 2, 3, 4, 5, 3, 6, 2, 5, 7, 8, 8];
  const duplicateNumbers = findAllDuplicates(integerArra);
  
  if (duplicateNumbers.length > 0) {
    console.log("The duplicate numbers are:", duplicateNumbers);
  } else {
    console.log("No duplicate numbers found in the array.");
  }
//   In this code, we first create an object called numCount to count the occurrences of each number in the array. 
//   Then, we iterate through the array and populate numCount. Finally, we iterate through numCount and find all numbers 
//   with more than one occurrence, storing them in the duplicates array. If no duplicates are found, the function 
//   returns an empty array.