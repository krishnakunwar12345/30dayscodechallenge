/*Find if array is sorted or not if yes then return 1 else return -1
arr[1,2,3,4,5]
arr[2,3,4,5,1]*/

/*You can determine if an array is sorted in JavaScript by iterating through the elements and 
comparing each element with the next one. If all elements are in non-decreasing order (i.e., 
each element is less than or equal to the next one), the array is sorted. Here's a JavaScript function to do that*/

function isSorted(arr){
    for (let i = 0; i < arr.length - 1; i++){
        if(arr[i] > arr[i + 1]){
            return -1; // The array is not sorted
        }
    }
    return 1; //The array is sorted
}
const arr1 = [1,2,3,4,5];
const arr2 = [2,3,4,5,1];

console.log(isSorted(arr1));
console.log(isSorted(arr2));

/*This code defines an 'isSorted' function that returns '1' if the array
is sorted and '-1' if its Not. you can call this function with your arrays to
determine if they are sorted or not.*/




