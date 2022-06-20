// Build a function that returns an array of integers from n to 1 where n>0.

const returnInt = (n) => {
	let arr = [];
	let init = 0;
	while (init <= n) {
		arr.push(init);
		init++;
	}
	return arr.reverse();
};
let t = returnInt(5);
console.log(t);
// let arr = String(init)
// 			.split("")
// 			.map((init) => {
// 				return parseInt(init);
// 			});
// 		console.log(arr);
// 		init++;
