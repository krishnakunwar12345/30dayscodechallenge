// Find out the element which has n/2 occurrence [1,2,2,2,1] n = 5
// You can find the element that occurs n/2 times in an array in JavaScript by first calculating the value of n/2 and then iterating through the array to count the occurrences of each element. Here's an example of how you can do this

function findHalfOccurrenceElement(arr) {
  const n = arr.length;
  const halfOccurrenceCount = n / 2;
  const elementCountMap = new Map();

  // Count the occurrences of each element in the array
  for (const element of arr) {
    if (elementCountMap.has(element)) {
      elementCountMap.set(element, elementCountMap.get(element) + 1);
    } else {
      elementCountMap.set(element, 1);
    }
  }

  // Find the element that occurs n/2 times
  for (const [element, count] of elementCountMap.entries()) {
    if (count === halfOccurrenceCount) {
      return element;
    }
  }

  // If no such element is found, return null or any other appropriate value
  return null;
}

const arr = [1, 2, 2, 2, 1];
const halfOccurrenceElement = findHalfOccurrenceElement(arr);
console.log("Element with n/2 occurrence:", halfOccurrenceElement);

/* In this code, we first calculate halfOccurrenceCount as n/2, where n is the length of the input array. Then, we create a Map called elementCountMap to store the count of each unique element in the array. 
Finally, we iterate through the map and return the element that occurs n/2 times.In this case, it would return 2 since it occurs twice in the array, which is half of the array length (5/2).*/
