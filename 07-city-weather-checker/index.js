import colors from 'colors';
import axios from 'axios';

const city = process.argv[2];
if (!city) {
	console.log('Please enter a valid city name.');
	process.exit(1);
}

const API_KEY = '4f198755899ea8ef932d9b97db72fc5e';
const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;
async function getWeather() {
	try {
		const response = await axios.get(url);
		return response.data;
	} catch {
		throw new Error(colors.red('Failed to get weather from API.'));
	}
}

// display weather
getWeather()
	.then(response => {
		console.log(colors.cyan(`Weather Report for ${response.name}`));
		console.log(colors.yellow(`Temperature: ${response.main.temp}°C`));
		console.log(colors.magenta(`Condition: ${response.weather[0].description}`));
		console.log(colors.green(`Humidity: ${response.main.humidity}%`));
	
});