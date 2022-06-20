// Create a function which answers the question "Are you playing banjo?".
// If your name starts with the letter "R" or lower case "r", you are playing banjo!

// The function takes a name as its only argument, and returns one of the following strings:
// name + " plays banjo"
// name + " does not play banjo"
const jina = (str) => {
	if (str.charAt(0).toLowerCase() === "r") {
		return `${str} plays banjo`;
	} else {
		return `${str} does not play banjo`;
	}
};
console.log(jina("paul"));
