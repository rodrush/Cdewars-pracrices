// Complete the solution so that it returns true
// if the first argument(string) passed in ends with the 2nd argument (also a string).
// Examples:
// solution('abc', 'bc') // returns true
// solution('abc', 'd') // returns false
const endString = (a, b) => {
	let len = b.length;
	if (a.slice(a.length - len) === b) {
		return true;
	} else {
		return false;
	}
};
console.log(endString("abc", "bc"));
