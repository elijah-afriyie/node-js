# LANGUAGE GUESSER

---
langs package: https://www.npmjs.com/package/langs
franc package: https://www.npmjs.com/package/franc

### **Question:**

Create a Node.js program that detects the **language** of a given text entered through the **command line**.

Your program should:

1. Accept user input (a sentence or paragraph) as a command-line argument.
2. Use a language detection package to identify the language.
3. Use another package to convert the detected language code (like `"eng"`) into a readable full name (like `"English"`).
4. Use a color styling package to display the language name in colorful text in the terminal.
5. If the user doesn’t provide input, display a clear error message and exit.
6. If the language cannot be identified, show a fallback message saying so.

---

### **Expected Example Result:**

If the user runs:

```
node app.js "Bonjour tout le monde, comment ça va ?"
```

The console might show something like:

```
Language detected as French
```

*(where the word “French” appears in rainbow colors)*

If the user runs the program without input:

```
node app.js
```

The console should show:

```
Please provide a text to detect input.
```

If the text is too short or unclear to detect language (for example, `"asdfgh"`), it should show:

```
Sorry, I can’t determine what language this is.
```

---