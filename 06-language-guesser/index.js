import { franc } from 'franc';
import langs from 'langs';
import colors from 'colors'

const input = process.argv[2];
if (!input) {
	console.log('Please provide a text to detect input.');
	process.exit(1);
}

const langCode = franc(input);
if (langCode === 'und') {
	console.log('Sorry, I can’t determine what language this is.');
} else {
	const language = langs.where('3', langCode);
	const coloredOutput = colors.rainbow(language.name)
	console.log(`Language detected as ${coloredOutput}`);
}