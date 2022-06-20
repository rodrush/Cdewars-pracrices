// Write a function to convert a name into initials.
// This kata strictly takes two words with one
// space in between them.The output should be two capital letters with a dot separating them.
// Sam Harris => S.H

// patrick feeney => P.F

const ini = (name) => {
	let a = name.split("");
	let b = a.splice(0, a.indexOf(" "));
	a.splice(0, 1);
	let c = b[0].toUpperCase();
	let d = a[0].toUpperCase();
	console.log(`${c}.${d}`);
};
ini(`Sam Harris`);
