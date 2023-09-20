// Sum of an array  merged array 
// A[] = {1,1,1,1,1}
// B[] = {2,2,2,2,2}
function sumOfMergedArrays(arrA, arrB) {
    // Merge the arrays using the spread operator
    const mergedArray = [...arrA, ...arrB];
    
    // Calculate the sum of elements in the merged array using the reduce() method
    const sum = mergedArray.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    
    return sum;
  }
  
  const A = [1, 1, 1, 1, 1];
  const B = [2, 2, 2, 2, 2];
  
  const totalSum = sumOfMergedArrays(A, B);
  console.log(`The sum of the merged array is: ${totalSum}`);
  

// Write a program to find the product of 2 merged Array  
// C[] = {0,1,2,3,4,5}
// D[] = {5,4,3,2,1,0}
function productOfMergedArrays(arrC, arrD) {
    // Merge the arrays using the spread operator
    const mergedArray = [...arrC, ...arrD];
    
    // Initialize a variable to store the product
    let product = 1;
    
    // Calculate the product of elements in the merged array
    for (let i = 0; i < mergedArray.length; i++) {
      product *= mergedArray[i];
    }
    
    return product;
  }
  
  const C = [0, 1, 2, 3, 4, 5];
  const D = [5, 4, 3, 2, 1, 0];
  
  const totalProduct = productOfMergedArrays(C, D);
  console.log(`The product of the merged arrays is: ${totalProduct}`);
  

// Write a program to find Prime in an array 
// Testcase 1 : 
// A[] = {1,2,5,4,0}
// Testcase 2:
// A[] = {1,2,3,4,5}
function isPrime(number) {
    if (number <= 1) {
      return false;
    }
    
    if (number <= 3) {
      return true;
    }
    
    if (number % 2 === 0 || number % 3 === 0) {
      return false;
    }
    
    for (let i = 5; i * i <= number; i += 6) {
      if (number % i === 0 || number % (i + 2) === 0) {
        return false;
      }
    }
    
    return true;
  }
  
  function findPrimesInArray(arr) {
    const primeNumbers = arr.filter(isPrime);
    return primeNumbers;
  }
  
  const testArray1 = [1, 2, 5, 4, 0];
  const testArray2 = [1, 2, 3, 4, 5];
  
  const primesInArray1 = findPrimesInArray(testArray1);
  const primesInArray2 = findPrimesInArray(testArray2);
  
  console.log('Prime numbers in Testcase 1:', primesInArray1);
  console.log('Prime numbers in Testcase 2:', primesInArray2);
  