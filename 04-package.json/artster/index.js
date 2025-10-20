import figlet from "figlet";
import colors from "colors";

async function doStuff() {
	const inputText = process.argv[2] || 'Hello World';
	const text = await figlet.text(inputText);
	console.log(text.rainbow);
}

doStuff();

// run node index.js 'I love Stacey'