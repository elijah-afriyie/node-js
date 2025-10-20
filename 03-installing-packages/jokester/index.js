import jokes from 'give-me-a-joke';
import colors from 'colors';
import otpGenerator from 'otp-generator';

jokes.getRandomDadJoke((joke) => {
	console.log(joke.rainbow);
});

const newPassword = otpGenerator.generate(10, {upperCaseAlphabets: true, lowerCaseAlphabets: true, digits: true, specialChars: true})
console.log(`Password generated: ${newPassword}`.rainbow);

