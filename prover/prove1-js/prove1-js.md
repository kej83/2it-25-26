# Flervalgssprøve i JavaScript (30 spørsmål)

**Temaer:** variabler, if/else-logikk, løkker, funksjoner, arrays og objekter.
**Instruks:** Velg riktig alternativ (A–D) og kryss av på svararket.

---

### 1) Hva blir verdien av `x`?

```js
let x = 5;
x = x + 2 * 3;
console.log(x);
```

A) 21
B) 11
C) 16
D) 10

---

### 2) Hvilken linje er en gyldig variabeldeklarasjon?

A) `let 2navn = "Ida"`
B) `const PI = 3.14`
C) `var for = 1`
D) `let navn-1 = "Ali"`

---

### 3) Hva skriver koden?

```js
console.log(typeof null);
```

A) `"null"`
B) `"undefined"`
C) `"object"`
D) `"number"`

---

### 4) Hva logger koden?

```js
let a = 7;
if (a % 2 === 0) {
  console.log("Partall");
} else {
  console.log("Oddetall");
}
```

A) Feil
B) Ingenting
C) "Partall"
D) "Oddetall"

---

### 5) Hva er resultatet?

```js
console.log(2 == "2", 2 === "2");
```

A) `false true`
B) `true true`
C) `false false`
D) `true false`

---

### 6) Hva blir `sum`?

```js
let sum = 0;
for (let i = 0; i < 3; i++) {
  sum += i;
}
console.log(sum);
```

A) 6
B) 3
C) 2
D) 1

---

### 7) Hvilken løkke itererer **verdiene** i et array `arr`?

A) `for (let i in arr)`
B) `while (i < arr.length)`
C) `for (let v of arr)`
D) `for (let i = 0; i <= arr.length; i++)`

---

### 8) Hva returnerer funksjonskallet?

```js
function f(a = 10) { return a * 2; }
f();
```

A) `undefined`
B) `10`
C) `20`
D) Feilkast

---

### 9) Hva er resultatet?

```js
const add = (a, b) => a + b;
console.log(add(2, 3));
```

A) `5`
B) `"23"`
C) `NaN`
D) `undefined`

---

### 10) Hva logger koden?

```js
console.log(x);
var x = 5;
```

A) `5`
B) `undefined`
C) Feil (ReferenceError)
D) `null`

---

### 11) Hva skjer her?

```js
if (true) {
  let x = 1;
}
console.log(x);
```

A) Logger `1`
B) Logger `undefined`
C) ReferenceError
D) Logger `0`

---

### 12) Hva returnerer `push`?

```js
const a = [1,2,3];
console.log(a.push(4));
```

A) Det nye elementet (`4`)
B) `true`
C) Den nye lengden (`4`)
D) `undefined`

---

### 13) Hva gjør `pop()`?

A) Legger til et element i starten
B) Fjerner og returnerer siste element
C) Sorterer arrayet
D) Returnerer lengden

---

### 14) Hva returnerer koden?

```js
[1,2,3].includes(2)
```

A) `2`
B) `true`
C) `false`
D) `undefined`

---

### 15) Hvordan leser du egenskapen med mellomrom?

```js
const person = { "full name": "Ava" };
```

A) `person.full name`
B) `person.full_name`
C) `person["full name"]`
D) `person('full name')`

---

### 16) Hva gjør `delete`?

```js
const o = { a:1, b:2 };
delete o.a;
```

A) Setter `a` til `null`
B) Fjerner `a`-egenskapen
C) Kaster feil
D) Låser objektet

---

### 17) Hva logger koden?

```js
const a = { n: 1 };
const b = a;
b.n = 2;
console.log(a.n);
```

A) `1`
B) `2`
C) `undefined`
D) Feil

---

### 18) Hva blir verdien av `x`?

```js
const { x } = { x:1, y:2 };
```

A) `{ x:1 }`
B) `1`
C) `2`
D) `undefined`

---

### 19) Hva blir `b`?

```js
const a = [1,2];
const b = [...a, 3];
```

A) `[1,2]`
B) `[3,1,2]`
C) `[1,2,3]`
D) `[[1,2],3]`

---

### 20) Hva skrives til konsollen?

```js
for (let i = 3; i > 0; i--) {
  if (i === 2) continue;
  console.log(i);
}
```

A) 3 og deretter 2
B) Kun 2
C) 3 og deretter 1
D) 1, 2 og 3

---

### 21) Hva blir `sum` etter løkken?

```js
let n = 1, sum = 0;
while (n <= 3) {
  sum += n;
  n++;
}
console.log(sum);
```

A) 3
B) 4
C) 6
D) 7

---

### 22) Hvor mange ganger logger denne koden?

```js
let k = 5;
do {
  console.log("Hei");
} while (k < 3);
```

A) 0 ganger
B) 1 gang
C) 3 ganger
D) Uendelig

---

### 23) Hva skrives ut?

```js
for (let i = 0; i < 4; i++) {
  if (i === 2) break;
  console.log(i);
}
```

A) 0, 1
B) 0, 1, 2
C) 2, 3
D) 1, 2, 3

---

### 24) Hva blir verdien av `msg`?

```js
const age = 16;
const msg = age >= 18 ? "Voksen" : "Barn";
```

A) `"Voksen"`
B) `"Barn"`
C) `true`
D) `undefined`

---

### 25) Hvilken løkke brukes for å iterere **nøkler** i et objekt?

A) `for...of`
B) `for...in`
C) `while`
D) `do...while`

---

### 26) Hva logger koden?

```js
console.log(Boolean("0"));
```

A) `false`
B) `true`
C) `"0"`
D) `0`

---

### 27) Hva logger koden?

```js
const name = "Ada";
console.log(`Hi ${name}`);
```

A) `Hi ${name}`
B) `"Hi " + name`
C) `Hi Ada`
D) `AdaHi`

---

### 28) Hva logger koden?

```js
console.log(null || "x");
```

A) `null`
B) `""`
C) `"x"`
D) `undefined`

---

### 29) Hva skjer her?

```js
const obj = { a: 1 };
obj.a = 2;
console.log(obj.a);
```

A) Kaster feil fordi `const`
B) Logger `1`
C) Logger `2`
D) Logger `undefined`

---

### 30) Hva blir arrayet etter koden?

```js
const arr = [1,2,3,4];
arr.splice(1,2);
console.log(arr);
```

A) `[1,2,4]`
B) `[2,3]`
C) `[1,4]`
D) `[1,3,4]`

---
