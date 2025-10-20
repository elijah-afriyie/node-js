# CITY WEATHER CHECKER

---
weather api: https://openweathermap.org/
colors package: https://www.npmjs.com/package/colors

### **Question:**

Create a Node.js program that takes a **city name** as a command-line argument and returns the **current weather information** (temperature, description, and humidity) in a **stylish, colored output** on the terminal.

You must use:

* One npm package to **fetch** data from an API.
* One npm package to **format** numbers (like temperature).
* One npm package to **colorize or style** the output.

If the user does not provide a city name, show an error message and exit.
If the API doesn’t recognize the city, handle it gracefully and show a clear message.

---

### **Expected Example Result:**

If the user runs:

```
node app.js "Paris"
```

The console might show something like:

```
Weather Report for Paris
Temperature: 18.6°C
Condition: Clear Sky
Humidity: 45%
```

—with each line styled in different colors (for example, yellow for temperature, blue for humidity, etc.).