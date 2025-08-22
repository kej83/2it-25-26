## Oppgavehefte – 20 oppgaver for og while loops

## Eksempler
# Løkker i JavaScript

### Eksempel 1: Skriv ut tall 1 til 5

```js
for (let i = 1; i <= 5; i++) {
  console.log(i);
}
```

### Eksempel 2: Summer elementer i et array

```js
const arr = [2, 4, 6, 8];
let sum = 0;
for (let i = 0; i < arr.length; i++) {
  sum = sum + arr[i];
}
console.log("Sum:", sum);
```

### Eksempel 3: Tell ned fra 10 til 1 (while)

```js
let n = 10;
while (n > 0) {
  console.log(n);
  n = n - 1;
}
```

### Eksempel 4: Skriv ut annenhver verdi i array

```js
const nums = [10, 20, 30, 40, 50, 60];
for (let i = 0; i < nums.length; i += 2) {
  console.log(nums[i]);
}
```

### Eksempel 5 (med `process.argv`): Ganger opp et tall

```js
// Kjør: node example5.js 7
const n = Number(process.argv[2]);
for (let i = 1; i <= 10; i++) {
  console.log(n + " x " + i + " = " + (n * i));
}
```

## OPPGAVER

### Nivå 1 – Grunnleggende (uten `process.argv`)

1. Skriv ut tallene 1 til 10 med en `for`‑løkke.
2. Skriv ut tallene fra 10 ned til 1 med en `while`‑løkke.
3. Skriv ut alle partall mellom 0 og 20.
4. Skriv ut summen av tallene i et array.
5. Skriv ut det største tallet i et array.
6. Skriv ut det minste tallet i et array.
7. Tell hvor mange elementer i et array som er større enn 10.
8. Skriv ut hvert tegn i en streng, ett per linje.
9. Snu rekkefølgen på et array og skriv det ut.
10. Lag et nytt array som inneholder bare oddetallene fra et annet array.

### Nivå 2 – Middels (med `process.argv`)

11. Les inn et tall `n` og skriv ut tallene 1 til `n`.
12. Les inn et tall `n` og summer tallene fra 1 til `n`.
13. Les inn et tall `n` og skriv ut alle partall til `n`.
14. Les inn et tall `n` og regn ut og skriv ut gangetabellen for dette tallet. f.eks. hvis n=2, så skal programmet skrive ut 2\*1 = 2, 2\*2 = 4 osv.
15. Les inn et tall `n` og skriv ut tallrekken 1, 2, 4, 8, ... opp til `n`.
16. Les inn en streng og tell hvor mange bokstaver `a` den inneholder.
17. Les inn en streng og skriv den baklengs.
18. Les inn en liste med tall (kommaseparert) og finn summen.
19. Les inn en liste med tall (kommaseparert) og finn det største tallet.
20. Les inn en liste med tall (kommaseparert) og lag et nytt array med bare tall større enn 5.

---





