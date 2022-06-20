let x = 123456;

const toArray = () => {
	let t = Array.from(String(x), Number).reverse();
	console.log(t);
};
toArray();
