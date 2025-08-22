# If-Else i JavaScript (Node.js)

Dette heftet gir en innføring i `if-else` i JavaScript, uten løkker eller arrays. Fokus er på:

* variabler
* datatyper (tall, streng, boolean)
* logikk
* enkle `if`, `else if`, `else`

Strukturen er:

* Eksempel → Oppgave som ligner på eksemplet.
* Eksempel 1–5 med oppgaver 1–5 (oppgave 5 bruker `process.argv`).
* Eksempel 6 + Oppgave 6 handler om å lese flere argumenter.
* Oppgave 7–15 uten eksempler, økende vanskelighetsgrad. Oppgave 13–15 introduserer nye ting elevene må finne ut av.

Alle filer kjøres i **Node.js**:

```bash
node filnavn.js
```

---

## Eksempel 1 – Sjekk om tall er positivt

```js
const num = 7;
if (num > 0) {
  console.log("Tallet er positivt");
} else {
  console.log("Tallet er null eller negativt");
}
```

### Oppgave 1

Lag et program som sjekker om et tall er negativt eller null.

---

## Eksempel 2 – Oddetall eller partall

```js
const n = 12;
if (n % 2 === 0) {
  console.log("Partall");
} else {
  console.log("Oddetall");
}
```

### Oppgave 2

Lag et program som sjekker om et tall er delelig med 5.

---

## Eksempel 3 – Karaktergrense

```js
const score = 82;
if (score >= 90) {
  console.log("A");
} else if (score >= 80) {
  console.log("B");
} else if (score >= 70) {
  console.log("C");
} else {
  console.log("F");
}
```

### Oppgave 3

Lag et program som gir karakter etter en enkel skala:

* 50 eller mer = "Bestått"
* ellers = "Ikke bestått"

---

## Eksempel 4 – Sjekk strenglengde

```js
const word = "Javascript";
if (word.length > 5) {
  console.log("Langt ord");
} else {
  console.log("Kort ord");
}
```

### Oppgave 4

Lag et program som sjekker om en tekst inneholder mer enn 10 tegn.

---

## Eksempel 5 – Bruk av `process.argv`

```js
// Kjør: node ex5.js 18
const age = Number(process.argv[2]);
if (age >= 18) {
  console.log("Du er myndig");
} else {
  console.log("Du er ikke myndig");
}
```

### Oppgave 5

Lag et program som leser inn et tall fra kommandolinjen og skriver ut om tallet er større enn 100.

---

## Eksempel 6 – Flere argumenter

```js
// Kjør: node ex6.js 12 20
const a = Number(process.argv[2]);
const b = Number(process.argv[3]);
if (a > b) {
  console.log(a + " er størst");
} else if (b > a) {
  console.log(b + " er størst");
} else {
  console.log("De er like");
}
```

### Oppgave 6

Lag et program som leser inn to tall fra kommandolinjen og skriver ut hvilket som er minst.

---

## Oppgaver 7–15 (stigende vanskelighetsgrad)

### Oppgave 7

Skriv ut en melding om et tall er innenfor intervallet 0–10.

### Oppgave 8

Sjekk om et tall er både større enn 50 og et partall.

### Oppgave 9

Sjekk om et tall er delelig med både 2 og 3.

### Oppgave 10

Les inn en streng og sjekk om den er tom eller ikke.

### Oppgave 11

Les inn to tall og sjekk om differansen mellom dem er mindre enn 5.

### Oppgave 12

Les inn tre tall og skriv ut hvilket som er størst.

### Oppgave 13 (nytt konsept: `toLowerCase()`)

Les inn en tekst og sjekk om den er lik "ja" uansett om brukeren skriver store eller små bokstaver.

### Oppgave 14 (nytt konsept: `includes()`)

Les inn en tekst og sjekk om den inneholder ordet "ok".

### Oppgave 15 (nytt konsept: `trim()`)

Les inn en tekst og sjekk om den bare består av mellomrom (hint: bruk `trim()`).

---