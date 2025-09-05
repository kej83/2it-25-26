# Handout: Handlekurv med meny

## Oppsett

1. Lag en ny fil, f.eks. `handlekurv.html`.
2. Lim inn koden under.
3. Åpne filen i en nettleser (Chrome/Edge/Firefox).
4. Når du åpner siden, starter menyen med `prompt()`.

---

## Startkode

```html
<!DOCTYPE html>
<html lang="no">
<head>
  <meta charset="UTF-8">
  <title>Handlekurv</title>
</head>
<body>
  <h1>Handlekurv</h1>
  <script>
    let produkter = ["Jakke", "Sko", "Lue"];
    let priser = [999, 799, 199];

    // Funksjoner – fyll inn selv
    function skrivUtHandlekurv() {
        // TODO: Skriv ut alle produkter og priser
    }

    function leggTilProdukt() {
        // TODO: Be brukeren om produktnavn og pris, legg til i arrays
    }

    function sumPriser() {
        // TODO: Summer alle priser i arrayen
    }

    function visTotal() {
        // TODO: Bruk sumPriser() og vis total
    }

    // Meny med while-løkke
    let kjør = true;
    while (kjør) {
      let valg = prompt(
        "MENY:\\n1 - Vis handlekurv\\n2 - Legg til produkt\\n3 - Se total pris\\n4 - Avslutt"
      );

      if (valg === "1") {
        skrivUtHandlekurv();
      } else if (valg === "2") {
        leggTilProdukt();
      } else if (valg === "3") {
        visTotal();
      } else if (valg === "4") {
        kjør = false;
        alert("Avslutter menyen");
      } else {
        alert("Ugyldig valg, prøv igjen");
      }
    }
  </script>
</body>
</html>
```

---

## Oppgaver

1. Fyll inn innholdet i funksjonene.
2. `skrivUtHandlekurv()` skal bruke en **løkke** til å skrive ut alle produkter med pris.
3. `leggTilProdukt()` skal bruke `prompt()` til å spørre om nytt produktnavn og pris, og så bruke `push()` til å legge til i begge arrays.
4. `sumPriser()` skal bruke en **for-løkke** til å summere opp alle priser.
5. `visTotal()` skal bruke `sumPriser()` og vise resultatet med `alert()`.
6. Test programmet ved å legge til flere produkter og sjekk om totalen oppdaterer seg.
7. (Utfordring) Legg til menyvalg for rabatt og mva.

---

👉 **Tips:** Husk at `prompt()` returnerer tekst. Hvis du ber om et tall (pris), må du gjøre det om til et tall med `Number(prompt(...))`.


