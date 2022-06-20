// Complete the function so
// that it finds the average of the three scores passed
// to it and returns the letter value associated with that grade.

// Numerical Score	Letter Grade
// 90 <= score <= 100	'A'
// 80 <= score < 90	'B'
// 70 <= score < 80	'C'
// 60 <= score < 70	'D'
// 0 <= score < 60	'F'
// Tested values are all between 0 and 100.
// Theres is no need to check for negative values or values greater than 100.

const grade = (s1, s2, s3) => {
	let ava = (s1 + s2 + s3) / 3;
	console.log(ava);
	if (ava >= 0 && ava < 60) {
		return "F";
	} else if (ava >= 60 && ava < 70) {
		return "D";
	} else if (ava >= 70 && ava < 80) {
		return "C";
	} else if (ava >= 80 && ava < 90) {
		return "B";
	} else if (ava >= 90 && ava <= 100) {
		return "A";
	} else {
		return "more the 100 or less the zero";
	}
};
console.log(grade(84, 68, 85));
