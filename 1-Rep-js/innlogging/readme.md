# Oppgave

## Innlogging med to arrayer

```js
let brukere = ["jens", "arne"];
let passord = ["jens123", "arne234"];
```

## Innlogging med objektarray

```js
let brukere = [
    {
        "username":"jens",
        "password":"jens123"
    },
    {
        "username":"arne",
        "password":"arne234"
    }
];
brukere[0]["password"];  //jens123
```

## Ekstraoppgaver
Ta utgangspunkt i objektarray-strukturen.
1. Legg til mulighet for å legge til nye brukere. både html og js må endres.
2. Legg til funksjonalitet for å slette en bruker.
3. Legg til funksjonalitet for å vise oversikt over brukerne.
4. Ekstra: Dersom en bruker , f.eks. jens, taster feil passord 3 ganger. Må han vente 1 minutt før han får lov til å forsøke på nytt.