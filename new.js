//*Function that takes a number, doubles it and returns the doubled number */
const doublo = (num) => {
	return (num *= 2);
};

let t = doublo(2);
console.log(t);

//*Function that takes a number n and add all the numbers up to n */
const addi = (num) => {
	let total = 0;
	for (let i = 1; i <= num; i++) {
		total += i;
	}

	console.log(total);
};
addi(10);
