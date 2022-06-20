// Write a function findNeedle() that takes
// an array full of junk but containing one "needle"

// After your function finds the needle it should return a message (as a string) that says:

// "found the needle at position " plus the index it found the needle, so:

// Example(Input --> Output)

// ["hay", "junk", "hay", "hay", "moreJunk",
// "needle", "randomJunk"] --> "found the needle at position 5"
const needle = (haystack) => {
	// let a = haystack.find((element) => element === "neddle");
	// let b = haystack.findIndex((element) => element === "needle");
	return `found the ${haystack.find(
		(element) => element === "needle"
	)} at position ${haystack.findIndex((element) => element === "needle")}`;
};
console.log(
	needle(["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"])
);
