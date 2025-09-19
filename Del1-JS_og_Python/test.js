let fib = [0, 1];

let next = fib[0] + fib[1];
// legg til tallet i arrayet
fib.push(next);

next = fib[1] + fib[2];
fib.push(next);

next = fib[2] + fib[3];
fib.push(next);

console.log(fib);