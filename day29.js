//DAY 29
//Find Maximum element of an array [1,2,3,4,5]

/* You can find the maximum element of an array in JavaScript by using the Math.max function or by manually iterating through the array. Here are two ways to do it:
Method 1: Using Math.max with the spread operator:*/
const arr = [1, 2, 3, 4, 5];
const maxElement = Math.max(...arr);
console.log(maxElement);

/*Method 2: Using a loop to manually find the maximum element*/
const arry = [1, 2, 3, 4, 5];
let maxulement = arry[0]; // Assume the first element is the maximum

for (let i = 1; i < arry.length; i++) {
  if (arr[i] > maxulement) {
    maxulement = arry[i];
  }
}

console.log(maxulement);


//Find the 2nd max element of an array without using any predefined question [1,2,3,4,5] , [1,2,4,4,5] , [1,2,4,3,5]

/*You can find the second maximum element of an array without using any predefined functions in JavaScript by iterating 
through the array and keeping track of both the maximum and second maximum values. Here's how you can do it:*/
function findSecondMax(arr){
    let max = -Infinity; // Initialize max to megative infinity
    let secondMax = -Infinity; // Initialize secondMax to negative infinity

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            // If the current element is greater than the current max, update both max and secondMax
            secondMax = max;
            max = arr[i];
        } else if (arr[i] > secondMax && arr[i] !== max) {
            // If the current element is greater than the current secondMax but not equal to max, update secondMax
            secondMax = arr[i]; 
        }
    }

    return secondMax;
}

const arr1 = [1,2,3,4,5];
const arr2 = [1,2,4,4,5];
const arr3 = [1,2,4,3,5];

const secondMax1 = findSecondMax(arr1);
const secondMax2 = findSecondMax(arr2);
const secondMax3 = findSecondMax(arr3);

console.log(secondMax1);
console.log(secondMax2);
console.log(secondMax3);

/*This findSecondMax function will work 
for any array and will return the second maximum element without using any predefined functions like Math.max.*/
