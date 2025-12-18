# 🏨 Handout – Enkelt bookingsystem i Python (liste)

## Mål

Du skal lage et enkelt **hotell-bookingsystem** i Python ved å bruke:

* `list`
* `for`-løkker
* `while`-løkke
* `if / else`
* funksjoner
* `input()` og `print()`

Du skal **ikke bruke dictionary (`dict`)**.

---

## Hvordan hotellet fungerer

* Hotellet har **8 rom**
* Alle rom lagres i **én liste**
* **Index 0 = rom 1**, index 1 = rom 2 osv.
* Et rom er:

  * `None` → ledig
  * `"Navn"` → booket
* Ved booking lagres **kun fornavn**

---

## Oppgaver (gjør dem i denne rekkefølgen)

### Oppgave 1 – Forstå datastrukturen

Se på hotell-listen i koden:

* Finn ut hva `None` betyr
* Finn ut hvordan du regner om fra **index → romnummer**
* Finn ut hvordan du regner om fra **romnummer → index**

---

### Oppgave 2 – Vis antall opptatte rom

Lag funksjonen `vis_antall_opptatte_rom`:

* Gå gjennom listen
* Tell hvor mange rom som **ikke** er `None`
* Skriv ut antallet

---

### Oppgave 3 – Vis antall ledige rom

Lag funksjonen `vis_antall_ledige_rom`:

* Gå gjennom listen
* Tell hvor mange rom som er `None`
* Skriv ut antallet

---

### Oppgave 4 – Søk på gjest

Lag funksjonen `sok_pa_gjest`:

* Spør brukeren om et fornavn
* Søk gjennom listen
* Hvis navnet finnes:

  * Skriv ut hvilket rom gjesten bor på
* Hvis navnet ikke finnes:

  * Skriv ut en passende melding

---

### Oppgave 5 – Book rom

Lag funksjonen `book_rom`:

* Spør brukeren om fornavn
* Finn **første ledige rom**
* Legg inn navnet i listen
* Hvis alle rom er opptatt:

  * Skriv ut en beskjed

---

### Oppgave 6 – Sjekk ut av rom

Lag funksjonen `sjekk_ut`:

* Spør etter romnummer (1–8)
* Regn om til index
* Hvis rommet er opptatt:

  * Sett plassen i listen til `None`
* Hvis rommet er ledig:

  * Skriv ut en melding

---

### Oppgave 7 – Endre rom (vanskeligst)

Lag funksjonen `endre_rom`:

* Spør etter romnummeret gjesten er på
* Spør etter nytt romnummer
* Regn om til index
* Regler:

  * Det gamle rommet må være opptatt
  * Det nye rommet må være ledig
* Flytt navnet fra gammelt rom til nytt rom

---

## Startkode (all kode samlet)

```python
# bookingsystem.py

def lag_hotell():
    hotell = [None] * 8
    return hotell


def legg_inn_startbookinger(hotell):
    hotell[0] = "Nora"   # rom 1
    hotell[2] = "Emil"   # rom 3
    hotell[5] = "Sara"   # rom 6
    hotell[7] = "Odin"   # rom 8


def vis_oversikt(hotell):
    print("\n--- ROMOVERSIKT ---")
    for i in range(len(hotell)):
        romnr = i + 1
        if hotell[i] is None:
            print(f"Rom {romnr}: LEDIG")
        else:
            print(f"Rom {romnr}: OPPTATT av {hotell[i]}")
    print("-------------------\n")


def vis_antall_opptatte_rom(hotell):
    # OPPGAVE 2
    pass


def vis_antall_ledige_rom(hotell):
    # OPPGAVE 3
    pass


def sok_pa_gjest(hotell):
    # OPPGAVE 4
    pass


def book_rom(hotell):
    # OPPGAVE 5
    pass


def sjekk_ut(hotell):
    # OPPGAVE 6
    pass


def endre_rom(hotell):
    # OPPGAVE 7
    pass


def skriv_meny():
    print("=== BOOKINGSYSTEM ===")
    print("1) Vis oversikt")
    print("2) Vis antall opptatte rom")
    print("3) Vis antall ledige rom")
    print("4) Søk på gjest")
    print("5) Book rom")
    print("6) Sjekk ut av rom")
    print("7) Endre rom")
    print("0) Avslutt")


def main():
    hotell = lag_hotell()
    legg_inn_startbookinger(hotell)

    valg = -1
    while valg != 0:
        skriv_meny()
        valg = int(input("Velg: "))

        if valg == 1:
            vis_oversikt(hotell)
        elif valg == 2:
            vis_antall_opptatte_rom(hotell)
        elif valg == 3:
            vis_antall_ledige_rom(hotell)
        elif valg == 4:
            sok_pa_gjest(hotell)
        elif valg == 5:
            book_rom(hotell)
        elif valg == 6:
            sjekk_ut(hotell)
        elif valg == 7:
            endre_rom(hotell)
        elif valg == 0:
            print("Avslutter...")
        else:
            print("Ugyldig valg")


main()
```

