//DAY 28
//Rotate and array by k time
//Are = {1,2,3,4,5} to arr= {5,2,3,4,1}

/*To rotate an array by "k" times to the right, you can follow these steps:

1-Take the last "k" elements from the end of the array and move them to the front.
2-Take the remaining elements from the front of the array and move them to the end.
Here's a JavaScript function that does this:*/

function rotateArray(arr, k) {
    const n = arr.length;
    k = k % n; // Handle cases where k is greater than the array length
  
    // Use array slicing to rearrange the elements
    const rotatedPart = arr.slice(n - k);
    const restOfArray = arr.slice(0, n - k);
  
    return [...rotatedPart, ...restOfArray];
  }
  
  const originalArray = [1, 2, 3, 4, 5];
  const rotatedArray = rotateArray(originalArray, 1); // Rotate 1 time to the right
  console.log(rotatedArray);
  
/*In this example, rotateArray takes the original array and the number of rotations k as arguments. 
It uses array slicing to split the array into two parts and rearrange them to achieve the desired rotation.
If you want to rotate the array by 1 time to the right, as in your example, the output will be [5, 1, 2, 3, 4]. 
You can adjust the value of k to rotate the array by a different number of times.*/

