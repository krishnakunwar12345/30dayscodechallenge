// Find common elements in an array 
// "filter()" method and the "includes()" method to find th common elements between two arrays
function findCommonElements(array1, array2) {
    // use the filter() method to create a new array
    const CommonElements = array1.filter(element => array2.includes(element));
    return CommonElements;   
}
const array1 = [1,2,3,4,5,];
const array2 = [3,4,5,6,7,];
const CommonElemetsArray = findCommonElements(array1, array2);
console.log(CommonElemetsArray);


// Find missing no in array
function findMissingNumber(arr) {
    const n = arr.length + 1; // The expected length of the array
    const expectedSum = (n * (n + 1)) / 2; // Sum of all numbers from 1 to n
    const actualSum = arr.reduce((acc, num) => acc + num, 0); // Sum of numbers in the array
    const missingNumber = expectedSum - actualSum;
    return missingNumber;
  }
  
  const numbers = [1, 2, 3, 5, 6, 7, 8];
  const missingNumber = findMissingNumber(numbers);
  console.log(`The missing number is: ${missingNumber}`);

  
// Find the element that appears once in sorted array 
function findSingleElement(arr) {
    let left = 0;
    let right = arr.length - 1;
  
    while (left < right) {
      const mid = Math.floor((left + right) / 2);
  
      // Check if the middle element is equal to its neighbors
      if (arr[mid] !== arr[mid - 1] && arr[mid] !== arr[mid + 1]) {
        return arr[mid]; // Found the element that appears only once
      }
  
      // If the middle element is equal to its left neighbor,
      // the single element is on the right side of the array
      if (arr[mid] === arr[mid - 1]) {
        left = mid + 1;
      } else {
        // Otherwise, it's on the left side
        right = mid - 1;
      }
    }
  
    // If we didn't find a single element in the loop, return the element at 'left'
    return arr[left];
  }
  
  const sortedArray = [1, 1, 2, 2, 3, 3, 4, 4, 5, 6, 6, 7, 7];
  const singleElement = findSingleElement(sortedArray);
  console.log(`The element that appears only once is: ${singleElement}`);
  