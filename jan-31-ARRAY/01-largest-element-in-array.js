// Question: Given an array, we have to find the largest element in the array.
// Example: arr[] = {2,5,1,3,0}; O/p: 5

// METHOD: 1 Linear search
// TIME COMPLEXITY: O(n)
const arr1 = [2,5,1,3,0];
const arr2 = [8,10,5,7,9];

function findLargestNumber(numbersList) {
	let largestNumber = numbersList[0];
	for(let i = 1 ; i < numbersList.length; i++){
		if(numbersList[i] > largestNumber){
			largestNumber = numbersList[i];
		}
	}
	return largestNumber;
}

const largestNumber = findLargestNumber(arr1);
const largestNumber2 = findLargestNumber(arr2); 
console.log(`The largest number in the array: ${arr1} is: ` , largestNumber);
console.log(`The largest number in the array: ${arr2} is: ` , largestNumber2);





// METHOD 2: Sorting.
// TIME COMPLEXITY: O(nlog(n))
function sortArray(numbersList){
	numbersList.sort((a,b) => a - b);
	return numbersList[numbersList.length - 1]
}

const largestNumberFromMethod2 = sortArray(arr1);
console.log(`The largest number in the array: ${arr1} is: `, largestNumberFromMethod2)

