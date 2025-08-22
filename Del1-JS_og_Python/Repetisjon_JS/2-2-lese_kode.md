# Handout: Variabler, if/else og løkker (uten arrays)

**Mål:** Øve på å lese og forstå kode med **variabler**, **if/else** og **løkker** (for/while) – **uten** arrays, objekter eller funksjoner.

**Arbeidsmåte:** Jobb i par. Les koden, forklar for hverandre hva som skjer linje for linje, og **diskuter** hva som blir resultatet eller hva som evt. er feil i koden.

Alle kodestykker er rene Node.js‑programmer og kan kopieres til en `.js`‑fil. Men **prøv å gjette først** før dere kjører.

---

## Del A – «Hva blir skrevet ut?» (15 oppgaver)

*Oppgave: Les koden og skriv nøyaktig hva som blir skrevet ut i riktig rekkefølge.*

### 1

```js
let x = 3;
if (x > 2) {
  console.log("A");
}
console.log("B");
```

**Forventet output:**

---

### 2

```js
let n = 5;
while (n > 2) {
  console.log(n);
  n = n - 2;
}
```

**Forventet output:**

---

### 3

```js
let a = 10;
if (a % 2 === 0) {
  console.log("partall");
} else {
  console.log("oddetall");
}
console.log("slutt");
```

**Forventet output:**

---

### 4

```js
let s = "Hi";
let i = 0;
while (i < 3) {
  s = s + "!";
  i = i + 1;
}
console.log(s);
```

**Forventet output:**

---

### 5

```js
let x = 0;
for (let i = 1; i <= 3; i = i + 1) {
  x = x + i;
}
console.log(x);
```

**Forventet output:**

---

### 6

```js
let msg = "ok";
if (msg === "OK") {
  console.log("match1");
} else if (msg === "ok") {
  console.log("match2");
} else {
  console.log("no");
}
```

**Forventet output:**

---

### 7

```js
let x = 2;
let y = 5;
if (x * y > 10) {
  console.log("stor");
}
if (x + y > 6) {
  console.log("pluss");
} else {
  console.log("ikke pluss");
}
```

**Forventet output:**

---

### 8

```js
let out = "";
for (let i = 1; i <= 4; i = i + 1) {
  if (i % 2 === 0) {
    out = out + i;
  }
}
console.log(out);
```

**Forventet output:**

---

### 9

```js
let i = 3;
while (i >= 0) {
  console.log("i=" + i);
  i = i - 1;
}
console.log("boom");
```

**Forventet output:**

---

### 10

```js
let n = 6;
let txt = "";
for (let i = 1; i <= n; i = i + 1) {
  if (i === 3) {
    txt = txt + "X";
  } else {
    txt = txt + "-";
  }
}
console.log(txt);
```

**Forventet output:**

---

### 11

```js
let a = 4;
let b = 4;
if (a > b) {
  console.log("a");
} else if (b > a) {
  console.log("b");
} else {
  console.log("like");
}
```

**Forventet output:**

---

### 12

```js
let n = 1;
let s = "";
while (n < 5) {
  s = s + n;
  n = n + 2;
}
console.log(s);
```

**Forventet output:**

---

### 13

```js
let t = "Hei";
if (t.length >= 3) {
  console.log("lang nok");
}
if (t === "hei") {
  console.log("match");
} else {
  console.log("ingen match");
}
```

**Forventet output:**

---

### 14

```js
let k = 5;
for (let i = 5; i > 0; i = i - 1) {
  if (i < k) {
    console.log(i);
  }
}
```

**Forventet output:**

---

### 15

```js
let sum = 0;
for (let i = 1; i <= 5; i = i + 1) {
  if (i % 2 !== 0) {
    sum = sum + i;
  }
}
console.log("sum=" + sum);
```

**Forventet output:**

---

## Del B – «Finn feilen» (15 oppgaver)

*Oppgave: Finn og forklar **alle** feil (syntaks og logikk). Foreslå rettet kode.*

### 1 (syntaks)

```js
let x = 3
if (x > 2) {
  console.log("ok")
// mangler }
```

---

### 2 (syntaks)

```js
let a = 1;
let b = 2;
if a > b) {
  console.log("a");
}
```

---

### 3 (syntaks)

```js
let name = "Ida";
if (name === "Ida") {
  console.log("Hei")
} else (
  console.log("Nei")
)
```

---

### 4 (logikk)

```js
let n = 10;
if (n % 2 = 0) {
  console.log("partall");
} else {
  console.log("oddetall");
}
```

---

### 5 (logikk)

```js
let age = 18;
if (age > 18) {
  console.log("myndig");
} else {
  console.log("ikke myndig");
}
```

---

### 6 (syntaks)

```js
let i = 0;
while i < 3 {
  console.log(i);
  i = i + 1;
}
```

---

### 7 (logikk)

```js
let x = 5;
let y = 5;
if (x > y) {
  console.log("x");
} else if (x > y) {
  console.log("y");
} else {
  console.log("like");
}
```

---

### 8 (syntaks)

```js
for (let i = 0; i < 3; i + 1) {
  console.log(i)
}
```

---

### 9 (logikk)

```js
let s = "Hei";
if (s === "hei" || s === "HEI") {
  console.log("match");
} else {
  console.log("ingen");
}
```

---

### 10 (syntaks)

```js
let n = 3;
for (let i = 1; i <= n; i++)
  console.log(i);
  console.log("ferdig");
```

---

### 11 (logikk)

```js
let score = 75;
if (score >= 90) {
  console.log("A");
} else if (score >= 80) {
  console.log("B");
} else if (score >= 70) {
  console.log("F");
} else {
  console.log("C");
}
```

---

### 12 (syntaks)

```js
let n = 5
while (n > 0) {
  console.log(n);
  n = n - 1
}
console.log("slutt")
```

---

### 13 (logikk)

```js
let pass = "abc123";
let input = "abc123";
if (input = pass) {
  console.log("riktig");
} else {
  console.log("feil");
}
```

---

### 14 (syntaks + logikk)

```js
let x = 0;
for (let i = 1; i <= 3; i = i + 1) {
  x = x + i;
}
if (x = 6) {
  console.log("riktig sum");
} else {
  console.log("feil sum");
}
```

---

### 15 (logikk)

```js
let n = 4;
if (n < 10)
  if (n > 5)
    console.log("mellom");
else
  console.log("annet");
```

---

## Diskusjonsspørsmål (bruk underveis)

* Hvilke linjer endrer verdier, og hvilke **sjekker** verdier?
* Hvorfor er `===` tryggere enn `==` i disse oppgavene?
* Hvordan kan små logiske feil oppstå selv om koden «kjører»?

**Tips:** Når dere står fast, skriv variabelverdier på papir etter hver linje.
