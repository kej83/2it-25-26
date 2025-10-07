# Del 2 – Kodeoppgaver

**Format:** Ren JavaScript (ingen HTML/DOM). Skal være kjørbart vha. Node eller nettleser-konsollen.
---

### 1) Hilsen basert på brukernavn og rolle

**Mål:** Variabler og streng.

* **Oppgave:** Lag variablene `brukernavn` og `rolle` (f.eks. `"student"` eller `"admin"`). Skriv ut:
  `Velkommen, <brukernavn>! Rolle: <rolle>`.

```js
let brukernavn = "Ida";
let rolle = "student";
// skriv koden din her
```

---

### 2) Enkel innlogging (passordsjekk)

**Mål:** if/else, sammenligning av strenger.

* **Oppgave:** Sammenlign `lagretPassord` og `inputPassord`. Skriv `“Innlogging vellykket”` eller `“Feil passord”`.

```js
const lagretPassord = "Hemmel1g";
const inputPassord = "Hemmel1g";
// if/else her
```

---

### 3) Passordregel: minimumslengde

**Mål:** Strenglengde + if/else.

* **Oppgave:** Sjekk at `passord` er minst 8 tegn.
  Skriv `“Godkjent”` ellers `“For kort (minst 8)”`.

```js
const passord = "kode1234";
// din kode her
```

---

### 4) PIN-forsøk med `while`

**Mål:** `while`-løkke, stoppbetingelser.

* **Oppgave:** Gitt `riktigPin` og en liste `forsok = ["0000","1234","2580","4321"]`.
  Gå gjennom forsøkene med `while` til riktig PIN er funnet **eller** du har brukt maks 3 forsøk. Skriv resultatet.

```js
const riktigPin = "4321";
const forsok = ["0000","1234","2580","4321"];
// while: stopp ved treff eller når 3 forsøk er brukt
```

---

### 5) Handleliste – legg til, fjern, tell

**Mål:** Enkle array-operasjoner.

* **Oppgave:** Start med `let liste = ["brød","melk"];`

  1. Legg til `"egg"` på slutten.
  2. Fjern `"melk"` dersom den finnes.
  3. Skriv ut antall varer og hele lista.

```js
let liste = ["brød","melk"];
// 1) push
// 2) finn index og splice hvis funnet
// 3) logg antall og innhold
```

---

### 6) Funksjon: tell forekomster i handleliste

**Mål:** Funksjon + løkke over array.

* **Oppgave:** Skriv `antallAv(liste, vare)` som teller hvor mange ganger `vare` finnes i lista (uten å bruke høyereordensmetoder). Test funksjonen.

```js
function antallAv(liste, vare) {
  // løkk gjennom lista og tell
}

const handleliste = ["brød","egg","melk","egg","ost","egg"];
console.log(antallAv(handleliste, "egg")); // forventet: 3
```

---

### 7) Funksjon: unike elementer (uten `Set`)

**Mål:** Funksjon + løkke over array.

* **Oppgave:** Skriv `unike(liste)` som returnerer en **ny** liste med elementer uten duplikater, i samme rekkefølge som de først forekommer. Ikke bruk `Set`, `map`, `filter` eller `reduce`.

```js
function unike(liste) {
   // TODO
}

// test
const data = ["melk","brød","melk","ost","egg","ost","egg"];
console.log(unike(data)); // forventet: ["melk","brød","ost","egg"]
```