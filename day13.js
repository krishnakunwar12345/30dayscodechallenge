// Find Common element in 2 array
// using loop:You can iterate through one of the arrays and check if each element exists in the other array. Here's an example using a loop
function findCommonElements(arr1, arr2) {
    const commonElements = [];
  
    for (const element of arr1) {
      if (arr2.includes(element)) {
        commonElements.push(element);
      }
    }
  
    return commonElements;
  }
  
  // Example usage:
  const array1 = [1, 2, 3, 4, 5];
  const array2 = [3, 4, 5, 6, 7];
  const commonElements = findCommonElements(array1, array2);
  
  console.log("Common elements are:", commonElements);


  
// Find sum of two array is equal or not and return the array with bigger sum
// Calculate the sums of both arrays.
// Compare the sums to check if they are equal.
// Return the array with the bigger sum.
function compareArraySums(arr1, arr2) {
    const sum1 = arr1.reduce((acc, num) => acc + num, 0);
    const sum2 = arr2.reduce((acc, num) => acc + num, 0);
  
    if (sum1 === sum2) {
      return "Both arrays have equal sums.";
    } else if (sum1 > sum2) {
      return arr1;
    } else {
      return arr2;
    }
  }
  
  // Example usage:
  const arra1 = [1, 2, 3, 4, 5];
  const arra2 = [3, 4, 5, 6, 7];
  const result = compareArraySums(arra1, arra2);
  
  console.log("Result:", result);
