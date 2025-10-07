# Fibonacci
Oppgave: Skriv ferdig funksjonen slik at den skriver ut fibonacci tallfølgen.

0, 1, 1, 2, 3, 5, 8, ...
Hvert tall er summen av de to forrige

Flytdiagram for koden:
* [Flytdiagram fibonacci-algoritme](https://drive.google.com/file/d/1g8vVtqhSj44vcElfc-HK0nMbecteW8Yg/view)


```js
function fibonacciGenerator (n) {
//Do NOT change any of the code above 👆
    
    //Write your code here:
    if (n === 1) {
        return [0];
    } else if (n === 2) {
        return [0, 1];
    } else if (n > 2) {
        // TODO
    } else {
        return "Ugyldig verdi. må ha n >= 1";
    }
    
    
    
    
    
    
    //Return an array of fibonacci numbers starting from 0.
    
//Do NOT change any of the code below 👇
}
// Test
let output = fibonacciGenerator(5)
console.log(output)  // [0, 1, 1, 2, 3]
console.log(fibonacciGenerator(2));  // [0, 1]
```

```js
// Logikk her: Se mønsteret og forsøk å få dette
// inn i en løkke
let fib = [0, 1];

let next = fib[0] + fib[1];
// legg til tallet i arrayet
fib.push(next);

next = fib[1] + fib[2];
fib.push(next);

next = fib[2] + fib[3];
fib.push(next);

console.log(fib);
```