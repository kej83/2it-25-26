## Using native node modules

### Example 1: file system (fs)

1. Open the link. [nodejs filesystem](https://nodejs.org/docs/latest-v23.x/api/fs.html) 
2. Make a new js-file.
3. Write the code `const fs = require("fs");`
4. [Writefile docs](https://nodejs.org/docs/latest-v23.x/api/fs.html#fswritefilefile-data-options-callback)  show that the syntax is `fs.writeFile(file, data[, options], callback)`.
5. Example code below: 
```js
const fs = require("fs");

fs.writeFile("message.txt", "hello from NodeJS!", (err) => {
  if (err) throw err;
  console.log('The file has been saved!');
});
```
6. In the terminal open the directory with the js file.
7. type `node filename.js` to run the file.

## Exercise 1: read file
Look at docs: [readfile docs](https://nodejs.org/docs/latest-v23.x/api/fs.html#fsreadfilepath-options-callback).

Do this
1. Change the `message.txt` by adding a new line with i.e. "yo from tha hood". Save it.
2. Figure out how to add a readfile function to print the file contents to the terminal.
3. Comment out the writefile function before you run it.
4. Hint: add the utf8 encoding as an option. Try without to see raw buffer output.