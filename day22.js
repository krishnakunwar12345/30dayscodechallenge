// Find out if an array is sorted or not  [1,2,3,4,3,5] , [3,4,5,6,9] return true if array is sorted or return false if not.

function isSorted(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      return false; // If you find an element out of order, return false
    }
  }
  return true; // If the loop completes, the array is sorted
}

// Example usage:
const array1 = [1, 2, 3, 4, 3, 5];
const array2 = [3, 4, 5, 6, 9];

console.log(isSorted(array1));
console.log(isSorted(array2));

/*This isSorted function iterates through the array and checks if each element is greater than or equal to the next one.
If it finds an element that is out of order, it returns false. If it completes the loop without finding any such elements,
it returns true, indicating that the array is sorted.*/
