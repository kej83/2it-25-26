### JavaScript Basics Test

This test is designed to assess your understanding of fundamental JavaScript concepts, including variables, if-else statements, loops, arrays, objects, and functions. Good luck\! 🚀

-----

### Section 1: Code Output Prediction (10 Questions)

**Instructions:** Read the following code snippets and determine what the output will be.

1.  What is the output of the program?

<!-- end list -->

```javascript
let a = 5;
let b = 10;
let c = "5";
let result = (a == c) && (a !== b);
console.log(result);
```

2.  What is the output of the program?

<!-- end list -->

```javascript
let count = 0;
while (count < 5) {
  if (count === 2) {
    count++;
    continue;
  }
  count++;
}
console.log(count);
```

3.  What is the output of the program?

<!-- end list -->

```javascript
let arr = [1, 2, 3];
arr.push(4);
arr.shift();
let output = arr.length;
console.log(output);
```

4.  What is the output of the program?

<!-- end list -->

```javascript
let myObject = {
  name: "Charlie",
  age: 42,
  city: "New York"
};
delete myObject.city;
console.log(myObject.city);
```

5.  What is the output of the program?

<!-- end list -->

```javascript
let num = 15;
let message = "";
if (num % 5 === 0) {
  message = "Fizz";
} else if (num % 3 === 0) {
  message = "Buzz";
} else {
  message = "Neither";
}
console.log(message);
```

6.  What is the output of the program?

<!-- end list -->

```javascript
let data = [
  { id: 1, value: 5 },
  { id: 2, value: 10 },
  { id: 3, value: 15 }
];
let sum = 0;
for (let i = 0; i < data.length; i++) {
  if (data[i].id % 2 === 0) {
    sum += data[i].value;
  }
}
console.log(sum);
```

7.  What is the output of the program?

<!-- end list -->

```javascript
function greet(name = "Guest") {
  return "Hello, " + name + "!";
}
let greeting1 = greet("Dave");
let greeting2 = greet();
console.log(greeting1 + " " + greeting2);
```

8.  What is the output of the program?

<!-- end list -->

```javascript
let x = 10;
let y = x++;
let z = ++x;
console.log(y + z);
```

9.  What is the output of the program?

<!-- end list -->

```javascript
let numbers = [5, 8, 2, 10];
let largest = 0;
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > largest) {
    largest = numbers[i];
  }
}
console.log(largest);
```

10. What is the output of the program?

<!-- end list -->

```javascript
let student = {
  name: "Bob",
  scores: {
    math: 90,
    science: 85
  }
};
let mathScore = student.scores.math;
console.log(mathScore);
```

-----

### Section 2: Code Completion (5 Questions)

**Instructions:** Complete the following code snippets by writing the missing code in the blank spaces.

11. Complete the `getAverage` function to calculate and return the average of the numbers in the array.

<!-- end list -->

```javascript
function getAverage(arr) {
  let sum = 0;
  // Missing code: loop through the array and add each number to sum
  
  // Missing code: return the average
}
```

12. Complete the program to create an object, add a new property, and then delete a property.

<!-- end list -->

```javascript
let user = {
  firstName: "Jane",
  lastName: "Doe"
};

// Missing code: add a new property 'age' with a value of 25

// Missing code: delete the 'lastName' property

console.log(user);
```

13. Complete the program to check if an object-array contains an object with a specific `id`. The program should log "Found" or "Not Found".

<!-- end list -->

```javascript
let users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" }
];
let targetId = 2;
let found = false;

// Missing code: loop through the users array

// Missing code: inside the loop, check if the current user's id matches targetId and set found to true if it does

if (found) {
  console.log("Found");
} else {
  console.log("Not Found");
}
```

14. Complete the function `reverseString` to return a string with all its characters in reverse order.

<!-- end list -->

```javascript
function reverseString(str) {
  let reversed = "";
  // Missing code: loop through the string from the last character to the first

  // Missing code: inside the loop, add each character to the reversed string

  return reversed;
}
```

15. Complete the program to create a new array containing only the even numbers from the `numbers` array.

<!-- end list -->

```javascript
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let evenNumbers = [];

// Missing code: loop through the numbers array

// Missing code: inside the loop, check if the number is even and add it to the evenNumbers array

console.log(evenNumbers);
```

-----

### Section 3: Algorithmic Thinking (5 Questions)

**Instructions:** Write a complete JavaScript program to solve the following problems.

16. Write a program that calculates the average of all numbers in a given array.

17. Write a program that takes a string as input and returns the string with all its characters in reverse order.

18. Write a program that checks if a given number is a prime number.

19. Write a program that finds the largest number in an array of numbers.

20. Write a program that counts the number of times a specific character appears in a string.