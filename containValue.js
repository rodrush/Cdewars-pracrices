// Check if an array containsvalue x
let arr = [45, 6, 7, -7, 20, "yeah", "7"];
let arr2 = ["what", "a", "great", "kata"];
const ch = (a, x) => {
	let t = false;
	for (let i = 0; i < a.length; i++) {
		if (a[i] == x) {
			return true;
		}
		return t;
	}
	// if (a.includes(x)) {
	// 	console.log(true);
	// } else {
	// 	console.log(false);
	// }
};

let r = ch(arr2, "kat");
console.log(r);
