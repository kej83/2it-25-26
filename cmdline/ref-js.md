### JavaScript Test Reference Sheet

This is a quick guide to common JavaScript methods. It's not exhaustive, but it covers functions that are often used with arrays, strings, and objects.

#### Array Methods 📚

* `push()`: Adds one or more elements to the **end** of an array and returns the new length.
* `pop()`: Removes the **last** element from an array and returns that element.
* `shift()`: Removes the **first** element from an array and returns that element.
* `unshift()`: Adds one or more elements to the **beginning** of an array and returns the new length.
* `length`: A property (not a method) that returns the number of elements in an array.
* `[index]`: The syntax used to access an element at a specific position (e.g., `myArray[0]` for the first element).

#### String Methods 📝

* `length`: A property that returns the number of characters in a string.
* `[index]`: The syntax used to access a character at a specific position (e.g., `myString[0]` for the first character).
* `split()`: Divides a string into an array of substrings. It takes a **separator** as an argument (e.g., `myString.split(',')` will split the string at every comma).
* `join()`: Joins all elements of an array into a single string. It takes a **separator** as an argument (e.g., `myArray.join('-')` will join the elements with a hyphen).
* `charAt(index)`: Returns the character at the specified index.
* `includes()`: Determines whether a string contains the characters of a specified string. Returns `true` or `false`.
* `toLowerCase() / toUpperCase()`: Converts a string to all lowercase or uppercase letters.

#### Object & General Methods ⚙️

* `Object.keys()`: Returns an array of a given object's own **property names**.
* `Object.values()`: Returns an array of a given object's own **property values**.
