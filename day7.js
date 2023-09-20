// Sum of an array
// you can use various methods such as a "for" loop th "reduce()" method or the foreach() method.
// using "for" method
function sumArrayWithForLoop(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
    return sum;
  }
  
  const numbers = [1, 2, 3, 4, 5];
  const total = sumArrayWithForLoop(numbers);
  console.log(`The sum is: ${total}`);

  
// Write a program to merge 2 Array
// using concat() method
function mergeArrays(array1, array2) {
    return array1.concat(array2);
  }
  
  const array1 = [1, 2, 3];
  const array2 = [4, 5, 6];
  const mergedArray = mergeArrays(array1, array2);
  console.log(mergedArray);
  

// Write a program to find even and odd no in a array
function findEvenAndOddNumber(arr) {
    const evenNumber = [];
    const oddNumber = [];
  
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 === 0) {
        evenNumber.push(arr[i]);
      } else {
        oddNumber.push(arr[i]);
      }
    }
  
    return { even: evenNumber, odd: oddNumber };
  }
  
  const number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const result = findEvenAndOddNumber(number);
  
  console.log('Even numbers:', result.even);
  console.log('Odd numbers:', result.odd);
  