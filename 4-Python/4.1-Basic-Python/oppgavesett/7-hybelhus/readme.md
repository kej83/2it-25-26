# Intro Python vs Javascript
Siden elevene dine er vant til JavaScript, er den største overgangen ofte fraværet av krøllparenteser `{}` og semikolon `;`, samt hvordan Python bruker innrykk (whitespace) for å definere blokker med kode.

Her er et referanseark skreddersydd for overgangen fra JS til Python.

---

## 🐍 Python Referanseark (for JS-utviklere)

I Python bruker vi **innrykk** (tab eller 4 mellomrom) i stedet for `{ }` for å vise hva som tilhører en funksjon eller en løkke.

### 1. Variabler og Datatyper

I Python trenger du ikke `let`, `const` eller `var`.

```python
navn = "Marius"          # String
alder = 21               # Integer
høyde = 1.85             # Float
er_student = True        # Boolean (Merk stor forbokstav!)

```

### 2. Lister og Ordbøker (Arrays & Objects)

Python bruker **Lists** for det JS kaller Arrays, og **Dictionaries** for det JS kaller Objekter.

```python
# Liste (Array)
studenter = ["Ali", "Lise"]
studenter.append("Per")  # Som .push() i JS
print(studenter[0])      # Henter ut "Ali"

# Dictionary (Object)
rom = {
    101: ["Ali", "Lise"],
    102: []
}
print(rom[101])          # Henter ut lista med studenter på rom 101

```

### 3. Funksjoner

I stedet for `function minFunksjon() { ... }`, bruker vi `def`.

```python
def sjekk_plass(rom_liste):
    if len(rom_liste) < 3:
        return True
    else:
        return False

```

### 4. Løkker (Loops)

Python har ikke den tradisjonelle `for(i=0; i<n; i++)`-løkka. Vi går som regel rett gjennom samlinger.

```python
# Gå gjennom en liste (som .forEach i JS)
for student in studenter:
    print(student)

# Gå gjennom en Dictionary (nøkkel og verdi)
for rom_nr, beboere in rom.items():
    print(f"På rom {rom_nr} bor det: {beboere}")

```

### 5. Logikk og Sammenligning

| Operasjon | JavaScript | Python |
| --- | --- | --- |
| Logisk OG | `&&` | `and` |
| Logisk ELLER | ` |  |
| Logisk IKKE | `!` | `not` |
| Lengde | `.length` | `len(variabel)` |
| Print til konsoll | `console.log()` | `print()` |

---

### 6. Nyttige kommandoer for oppgaven

Disse vil elevene trenge for å løse "Hybelhus"-oppgaven:

* **`input("Tekst her")`**: Henter tekst fra brukeren (tilsvarer `prompt`).
* **`int()`**: Gjør om en tekststreng til et heltall (viktig for romnummer!).
* **`f"Tekst {variabel}"`**: En "f-string" brukes for å putte variabler rett inn i tekst (tilsvarer backticks `` `` i JS).
* **`range(1, 4)`**: Lager en rekke med tall fra og med 1, til (men ikke med) 4.
* **`del liste[index]`** eller **`.remove("navn")`**: Fjerner elementer fra en liste.

---

### Et lite tips til elevene:

Hvis de får en `KeyError`, betyr det ofte at de prøver å hente et romnummer som ikke finnes i ordboken. Be dem bruke `if rom_nummer in data[etasje]:` for å sjekke om rommet eksisterer før de prøver å endre på det.