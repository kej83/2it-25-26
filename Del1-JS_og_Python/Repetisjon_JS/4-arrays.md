# Array-oppgaver

Bruk chatgpt eller liknende som hjelp og til å hjelpe deg til å forstå kode der du er usikker.

### 1) `length` – tell elementer

```js
// Gitt:
const produkter = ["mus", "tastatur", "skjerm", "webkamera"];

// TODO: Skriv ut "Antall produkter: X" der X er lengden.
```

### 2) `at()` – hent elementer fra slutt

```js
// Gitt:
const byer = ["Oslo", "Bergen", "Trondheim", "Stavanger", "Tromsø"];

// TODO: Logg siste by og nest siste ved å bruke .at(-1) og .at(-2).
```

### 3) `join()` – formater liste pent

```js
// Gitt:
const handleliste = ["melk", "brød", "ost"];

// TODO: Skriv ut listen som:
// - melk
// - brød
// - ost
// Tips: bruk .join("\n- ") og én console.log.
```

### 4) `push()` og `pop()` – “angre” i handlekurv

```js
// Gitt:
const kurv = ["bukse", "genser"];
// TODO: Legg til to varer med push, angre siste med pop.
// Logg endelig innhold i kurven.
```

### 5) `unshift()` og `shift()` – kø og VIP

```js
// Gitt:
const ko = ["Ida", "Ali", "Sana"];

// TODO: Slipp inn en "VIP" først i køen med unshift, betjen første kunde med shift.
// Logg hvem som ble betjent og hvem som står igjen.
```

### 6) `includes()` / `indexOf()` – sørg for at “lader” er med

```js
// Gitt:
const sekk = ["pc", "notatbok", "penn"];

// TODO: Hvis "lader" ikke finnes, legg den til (push).
// Logg hele lista og skriv også hvilken indeks "lader" har etterpå.
```

### 7) `slice()` – ta ut deler av en liste

```js
// Gitt:
const poeng = [120, 90, 310, 240, 150];

// TODO: Lag et nytt array med de TRE første verdiene i "poeng" ved å bruke slice.
// Logg begge: originalen og det nye arrayet.
```

💡 Forklaring:

* `slice(start, slutt)` lager en kopi av en del av arrayet.
* Original-arrayet endres ikke.


### 8) `splice()` – rett stavefeil i gjesteliste

```js
// Gitt:
const gjester = ["Lina", "Kari", "Mrakus", "Sara"];

// TODO: Bytt ut "Mrakus" med "Markus" ved å bruke splice på riktig indeks.
// Logg listen etter rettingen.
```

### 9) `sort()` – sorter navn (æøå) og tall

```js
// Gitt:
const navn = ["Åse", "Ola", "Ægir", "Kari", "Øyvind"];
const tall = [12, 5, 100, 42];

// TODO: Sorter navn alfabetisk norsk med localeCompare("nb").
// TODO: Sorter tall stigende (numerisk).
// Logg begge resultatene.
```

---

## Løkker + arrays

### 10) For-løkke: total og snittpris

```js
// Gitt:
const priser = [199, 349, 99, 149, 499];

// TODO: Bruk en for-løkke til å regne ut total og gjennomsnittspris.
// Logg: "Total: X", "Snitt: Y".
```

### 11) While-løkke: filtrer verdier > 10

```js
// Gitt:
const verdier = [3, 18, 7, 25, 11, 4];
const overTi = [];

// TODO: Bruk while-løkke til å gå gjennom "verdier" og putt alle > 10 i "overTi" (push).
// Logg resultatet.
```

### 12) For-of: tell forekomster av bokstav

```js
// Gitt:
const bokstaver = ["a", "b", "a", "c", "a", "b"];

// TODO: Bruk for-of til å telle hvor mange ganger "a" forekommer.
// Logg: 'Antall "a": X'
```

### 13) Bygg nytt array: lengden av hvert ord

```js
// Gitt:
const ord = ["hei", "programmering", "js", "array"];
const lengder = [];

// TODO: Bruk en for-løkke til å fylle "lengder" med lengden av hvert ord.
// Logg både "ord" og "lengder".
```

### 14) Finn min/max og indeks (én pass)

```js
// Gitt:
const temperaturer = [12, 7, 14, 3, 9, 15];

// TODO: Bruk én for-løkke til å finne minste og største verdi og deres indekser.
// Logg f.eks. "Min 3 @ index 3, Max 15 @ index 5".
```

### 15) Frekvenstabell for navn (objekt som map)

```js
// Gitt:
const deltakere = ["Ida", "Ali", "Ida", "Sara", "Ali", "Ali"];
const frekvens = {}; // { navn: antall }

// TODO: Bruk for-of til å bygge frekvenstabellen i "frekvens".
// Logg objektet, og logg også navnet som forekommer flest ganger (finn i en ny løkke).
```