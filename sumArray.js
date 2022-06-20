// Write a function that takes an array of numbers and returns the sum of the numbers.
// The numbers can be negative or non-integer.
// If the array does not contain any numbers then you should return 0.
// Input: [1, 5.2, 4, 0, -1]
// Output: 9.2

// Input: []
// Output: 0

// Input: [-2.398]
// Output: -2.398
// * Using for loop*/
const sumArr = (arr) => {
	let sum = 0;
	if (arr.length === 0) {
		console.log(0);
	} else {
		for (let i = 0; i < arr.length; i++) {
			sum += arr[i];
		}
		console.log(sum);
	}
};
sumArr([1, 5.2, 4, 0, -1]);

// *Using the reduce function */
const sumArr2 = (arr) => {
	console.log(arr.reduce((a, b) => a + b, 0));
};
sumArr2([1, 5.2, 4, 0, -1]);
