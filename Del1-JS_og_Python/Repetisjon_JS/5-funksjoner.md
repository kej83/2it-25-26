# Heftet: Funksjoner i JavaScript (Selvstudie)

**Mål:** Øve på funksjoner slik vi har gått gjennom i timene. Vi ser på funksjoner som skriver ut, funksjoner med input og returverdier, bruk av if-else, løkker og arrays. De siste oppgavene kombinerer funksjoner og arrays. Til slutt lager vi en liten handlekurv med to arrays (produkter og priser).

---

## Del 1: Eksempler (15 stk)

### Eksempel 1: Enkel funksjon uten input eller retur

```javascript
function hei() {
    console.log("morn på deg");
}
hei();
```

### Eksempel 2: Funksjon med én parameter

```javascript
function heiNavn(navn) {
    console.log("morn på " + navn);
    console.log(`morn på ${navn}, jeg liker deg`);
}
heiNavn("jens");
```

### Eksempel 3: Funksjon med flere parametere

```javascript
function fylleFemti(navn, alder) {
    let aarNaa = 2025;
    let aarTilFemti = 50 - alder;
    let aar50 = aarNaa + aarTilFemti;
    console.log(`Hei ${navn}, du fyller 50 år i ${aar50}.`);
}
fylleFemti('jens', 20);
```

### Eksempel 4: Funksjon som returnerer verdi

```javascript
function kast() {
    return Math.floor(Math.random()*6) + 1;
}
console.log(kast());
```

### Eksempel 5: Funksjon med parametere og retur

```javascript
function gange(tallA, tallB) {
    return tallA * tallB;
}
console.log(gange(3, 5));
```

### Eksempel 6: If-else i funksjon

```javascript
function erMyndig(alder) {
    if (alder >= 18) {
        return true;
    } else {
        return false;
    }
}
console.log(erMyndig(20)); // true
console.log(erMyndig(15)); // false
```

### Eksempel 7: Funksjon som skriver ut mange ganger med løkke

```javascript
function heiFlereGanger(antall) {
    for (let i = 0; i < antall; i++) {
        console.log("Hei!");
    }
}
heiFlereGanger(3);
```

### Eksempel 8: Array med navn

```javascript
let ansatte = ["arne", "per", "bo", "ea"];
function finnNavn(navn) {
    let index = ansatte.indexOf(navn);
    if (index === -1) {
        return false;
    } else {
        return true;
    }
}
console.log(finnNavn("per"));
```

### Eksempel 9: Array som parameter

```javascript
function finnNavnTo(navn, navneArray) {
    let index = navneArray.indexOf(navn);
    if (index === -1) {
        return false;
    } else {
        return true;
    }
}
console.log(finnNavnTo("jens", ["per", "bo", "ea"]));
```

### Eksempel 10: Funksjon som teller antall elementer i array

```javascript
function tellAntall(arr) {
    return arr.length;
}
console.log(tellAntall([1,2,3,4]));
```

### Eksempel 11: Funksjon som finner største tall i array

```javascript
function finnStorst(arr) {
    let storst = arr[0];
    for (let i=1; i<arr.length; i++) {
        if (arr[i] > storst) {
            storst = arr[i];
        }
    }
    return storst;
}
console.log(finnStorst([3,7,2,9,5]));
```

### Eksempel 12: Funksjon som summerer array

```javascript
function summerArray(arr) {
    let sum = 0;
    for (let i=0; i<arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}
console.log(summerArray([2,4,6]));
```

### Eksempel 13: Funksjon som teller hvor mange som er over 18 år

```javascript
function tellMyndige(alderArray) {
    let teller = 0;
    for (let i=0; i<alderArray.length; i++) {
        if (alderArray[i] >= 18) {
            teller++;
        }
    }
    return teller;
}
console.log(tellMyndige([12, 20, 30, 15, 18]));
```

### Eksempel 14: Funksjon som skriver ut alle elementer i array

```javascript
function skrivUtArray(arr) {
    for (let i=0; i<arr.length; i++) {
        console.log(arr[i]);
    }
}
skrivUtArray(["a", "b", "c"]);
```

### Eksempel 15: Funksjon med if-else og løkke

```javascript
function finnOgTell(navn, arr) {
    let teller = 0;
    for (let i=0; i<arr.length; i++) {
        if (arr[i] === navn) {
            teller++;
        }
    }
    if (teller > 0) {
        console.log(`${navn} finnes ${teller} gang(er).`);
    } else {
        console.log(`${navn} finnes ikke.`);
    }
}
finnOgTell("per", ["per","ea","bo","per"]);
```

---

## Del 2: Oppgaver (15 stk)

1. Lag en funksjon `hallo()` som skriver ut en hilsen.
2. Lag `halloNavn(navn)` som tar inn et navn og skriver ut en setning.
3. Lag `fylleHundre(navn, alder)` som regner ut hvilket år personen fyller 100 år.
4. Skriv `pluss(a,b)` som returnerer summen.
5. Lag `trekkFra(a,b)` som returnerer differansen.
6. Lag en funksjon `erPartall(n)` som returnerer true/false.
7. Lag en funksjon `kastTerning()` som returnerer et tall mellom 1 og 6.
8. Skriv `skrivUtFlereGanger(txt, antall)` som skriver ut en tekst mange ganger.
9. Lag `finnMinste(arr)` som finner minste tall i et array.
10. Lag `summerArray(arr)` og test med forskjellige arrays.
11. Lag `tellStorreEnn10(arr)` som teller hvor mange tall som er større enn 10.
12. Lag `tellNavn(navn, arr)` som teller hvor mange ganger et navn forekommer.
13. Lag `skrivUtAlle(arr)` som skriver ut alle elementene i arrayet.
14. Lag `gjennomsnitt(arr)` som regner ut gjennomsnittet av tallene.
15. Lag `snuArray(arr)` som skriver ut elementene i motsatt rekkefølge.

---