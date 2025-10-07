# Del 2 – Løsningsforslag (lærer)

Nedenfor er én mulig løsning per oppgave i ren JavaScript. Hver har kort kommentar og eksempelutskrift.

---

### 1) Hilsen basert på brukernavn og rolle

```js
let brukernavn = "Ida";
let rolle = "student";

console.log(`Velkommen, ${brukernavn}! Rolle: ${rolle}`);
// Eksempelutskrift: Velkommen, Ida! Rolle: student
```

---

### 2) Enkel innlogging (passordsjekk)

```js
const lagretPassord = "Hemmel1g";
const inputPassord = "Hemmel1g"; // prøv å endre til noe annet

if (inputPassord === lagretPassord) {
  console.log("Innlogging vellykket");
} else {
  console.log("Feil passord");
}
// Eksempel: Innlogging vellykket
```

---

### 3) Passordregel: minimumslengde

```js
const passord = "kode1234"; // test også med kortere f.eks. "abc123"

if (passord.length >= 8) {
  console.log("Godkjent");
} else {
  console.log("For kort (minst 8)");
}
// Eksempel: Godkjent
```

---

### 4) PIN-forsøk med `while` (maks 3)

```js
const riktigPin = "4321";
const forsok = ["0000", "1234", "2580", "4321"];

let i = 0;
let funnet = false;

while (i < forsok.length && i < 3 && !funnet) {
  if (forsok[i] === riktigPin) {
    funnet = true; // fant riktig
    break;
  }
  i++;
}

if (funnet) {
  console.log(`Riktig PIN på forsøk ${i + 1}`);
} else {
  console.log("Tilgang nektet (maks 3 forsøk brukt eller ikke funnet)");
}
// Eksempel: Tilgang nektet (fordi riktig ligger på 4. posisjon)
```

---

### 5) Handleliste – legg til, fjern, tell

```js
let liste = ["brød", "melk"];

// 1) legg til "egg" sist
liste.push("egg");

// 2) fjern "melk" dersom den finnes
const idx = liste.indexOf("melk");
if (idx !== -1) {
  liste.splice(idx, 1);
}

// 3) skriv ut antall og hele lista
console.log(`Antall varer: ${liste.length}`);
console.log("Liste:", liste);
// Eksempel:
// Antall varer: 2
// Liste: [ 'brød', 'egg' ]
```

---

### 6) Funksjon: tell forekomster i handleliste

```js
function antallAv(liste, vare) {
  let antall = 0;
  for (let i = 0; i < liste.length; i++) {
    if (liste[i] === vare) {
      antall++;
    }
  }
  return antall;
}

// test
const handleliste = ["brød", "egg", "melk", "egg", "ost", "egg"];
console.log(antallAv(handleliste, "egg")); // 3
```

---

### 7) Funksjon: unike elementer

```js
function unike(liste) {
  const resultat = [];
  for (let i = 0; i < liste.length; i++) {
    const el = liste[i];

    // Sjekk manuelt om el allerede finnes i resultat
    let finnes = false;
    for (let j = 0; j < resultat.length; j++) {
      if (resultat[j] === el) {
        finnes = true;
        break;
      }
    }

    if (!finnes) {
      resultat.push(el);
    }
  }
  return resultat;
}

// Test
const data = ["melk", "brød", "melk", "ost", "egg", "ost", "egg"];
console.log(unike(data)); // [ 'melk', 'brød', 'ost', 'egg' ]
```