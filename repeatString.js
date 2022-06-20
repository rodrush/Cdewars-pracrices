function repeatString(n, s) {
	let i = 0;
	while (i < n) {
		console.log(s);
		i++;
	}
}
repeatString(3, "yeah");

function repeatStr(n, s) {
	console.log(s.repeat(n));
}
repeatStr(3, "yeah");
