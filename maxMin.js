// Max or min in an non-empty array
let arr = [4, 6, 2, 1, 9, 63, -134, 566];
const max = (arr) => {
	return Math.max(...arr);
};

let t = max(arr);
console.log(t);

const min = (arr) => Math.min(...arr);
console.log(min(arr));
