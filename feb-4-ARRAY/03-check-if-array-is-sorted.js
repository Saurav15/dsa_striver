// Check if an Array is Sorted

// Problem Statement: Given an array of size n, write a program to check if the given array is sorted in (ascending / Increasing / Non-decreasing) order or not. If the array is sorted then return True, Else return False.

// Example 1:
// Input:
//  N = 5, array[] = {1,2,3,4,5}
// Output:
// True.
// Explanation:
//  The given array is sorted i.e Every element in the array is smaller than or equals to its next values, So the answer is True.

// Example 2:
// Input:
//  N = 5, array[] = {5,4,6,7,8}
// Output:
// False.
// Explanation:
//  The given array is Not sorted i.e Every element in the array is not smaller than or equal to its next values, So the answer is False.


const arr1 = [1,2,3,4,5];
const arr2 = [5,4,6,7,8];
const arr3 = [5];
const arr4 = [3,4,5,1,2];

function isArraySorted(arr) {
    let isArraySorted = true;
    for (let i = 0; i < arr.length - 1; i++) {
        if(arr[i] > arr[i+1]){
            isArraySorted = false;
            break;
        }
    }
    return isArraySorted;
}

const answer1 = isArraySorted(arr1);
const answer2 = isArraySorted(arr2);
const answer3 = isArraySorted(arr3);
const answer4 = isArraySorted(arr4);

console.log(`Is array ${arr1} sorted: `, answer1);
console.log(`Is array ${arr2} sorted: `, answer2);
console.log(`Is array ${arr3} sorted: `, answer3);
console.log(`Is array ${arr4} sorted: `, answer4);