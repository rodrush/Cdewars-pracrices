// Given a non-empty array of integers,
// return the result of multiplying the values together in order. Example:

// [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24

const arr = (x) => {
	return x.reduce((a, b) => a * b);
};
console.log(arr([1, 2, 3, 4]));
