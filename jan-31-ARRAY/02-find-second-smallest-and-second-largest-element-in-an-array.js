// Problem Heading: Find Second Smallest and Second Largest Element in an array.

// Problem Statement: Given an array of positive integers arr[], return the second largest element from the array. If the second largest element doesn't exist then return -1.
// Note: The second largest element should not be equal to the largest element.

// Examples:
// Input: arr[] = [12, 35, 1, 10, 34, 1]
// Output: 34
// Explanation: The largest element of the array is 35 and the second largest element is 34.

// Input: arr[] = [10, 5, 10]
// Output: 5
// Explanation: The largest element of the array is 10 and the second largest element is 5.

// Input: arr[] = [10, 10, 10]
// Output: -1
// Explanation: The largest element of the array is 10 and the second largest element does not exist.

const array1 = [10, 5, 10];
const array2 = [1];
const array3 = [10, 10, 10];
const array4 = [28004,23544,32504,29493,17013,17850,18952,12089,5126,10353]

// Method 1: Using sorting
function findSecondLargestElements(arr) {
  // Code Here
  if (arr.length < 2) {
    return -1;
  }

  // sort and get the second element from the back
  arr.sort((a, b) => a - b);

  // loop to find the second shortest number.
  for (let i = arr.length - 1; i > 0; i--) {
    if (arr[i] > arr[i - 1]) {
      return arr[i - 1];
    }
  }

  return -1;
}

const answer1 = findSecondLargestElements(array1);
const answer2 = findSecondLargestElements(array2);
const answer3 = findSecondLargestElements(array3);
const answer8 = findSecondLargestElements(array4)

console.log(`Solution for the array ${array1} is : `, answer1);
console.log(`Solution for the array ${array2} is : `, answer2);
console.log(`Solution for the array ${array3} is : `, answer3);
console.log(`Solution for the array ${array4} is : `, answer8);





// Method 2: Without using sorting.
function findSecondLargestElementsMethod2(arr) {
	if(arr.length < 2){
		return -1;
	}

	let largestElement = arr[1];
	let secondLargestElement = arr[0];

	if(arr[0] >= arr[1]){
		largestElement = arr[0]
		secondLargestElement = arr[1]
	}

	for (let i = 0; i < arr.length; i++) {
		if(arr[i] > largestElement){
			secondLargestElement = largestElement;
			largestElement = arr[i];
		}else if(arr[i] > secondLargestElement && arr[i] !== largestElement){
			secondLargestElement = arr[i]
		}
	}

	if(largestElement === secondLargestElement){
		return -1;
	}

	return secondLargestElement;
}

const answer4 = findSecondLargestElementsMethod2(array1);
const answer5 = findSecondLargestElementsMethod2(array2);
const answer6 = findSecondLargestElementsMethod2(array3);
const answer7 = findSecondLargestElementsMethod2(array4);

console.log(`Solution for the array ${array1} is : `, answer4);
console.log(`Solution for the array ${array2} is : `, answer5);
// console.log(`Solution for the array ${array3} is : `, answer6);
console.log(`Solution for the array ${array4} is : `, answer7);