// 1. **Array Access:** Create an array `fruits` containing: `"Apple", "Banana", "Cherry", "Date", "Elderberry"`.
// * **Task:** Log the 1st and 5th items.
// * **Expected Output:** `Apple`, `Elderberry`

const fruits = ["Apple", "Banana", "Cherry", "Date", "Elderberry"];
console.log(fruits[0], fruits[4]);

// 2. **Object Properties:** Create an object `book` with: `title: "The Hobbit"`, `author: "J.R.R. Tolkien"`, and `pages: 310`.
// * **Task:** Log a sentence: "[Title] was written by [Author]."
// * **Expected Output:** `The Hobbit was written by J.R.R. Tolkien.`
const book = {
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    pages: 310
};

console.log(`${book.title} was written by ${book["author"]}.`)

// 4. **Property Update:** Use the `book` object from Exercise 2.
// * **Task:** Change `pages` to `320` and add a new boolean property `isRead: true`. Log the object.
// * **Expected Output:** `{ title: 'The Hobbit', author: 'J.R.R. Tolkien', pages: 320, isRead: true }`
book.pages = 320;
console.log(book.pages);
book.isRead = true;
console.log(book);

// 5. **Basic Function:** Write a function `multiply(a, b)` that returns the product.
// * **Task:** Log the result of `multiply(6, 7)`.
// * **Expected Output:** `42`
function multiply(a, b) {
    let prod = a * b;
    return prod;
}
console.log(multiply(6, 7));
