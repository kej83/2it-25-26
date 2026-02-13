# hybelhus.py - Et uferdig system for administrasjon av studentboliger

# Oppstartsfunksjon: Oppretter data-strukturen og fyller den med startverdier
def generer_hybelhus():
    """
    Oppretter et hybelhus med 3 etasjer.
    Hver etasje har rom (f.eks. 101, 102...).
    Hvert rom starter med en liste over studenter (maks 3).
    """
    hus = {}
    import random
    
    for etasje in range(1, 4):
        hus[etasje] = {}
        antall_rom = random.randint(8, 12)
        for r in range(1, antall_rom + 1):
            rom_nummer = (etasje * 100) + r
            # Tilfeldig fylling: Noen er tomme, noen har 1-3 studenter
            tilfelle = random.random()
            if tilfelle < 0.2: # 20% sjanse for tomt rom
                studenter = []
            elif tilfelle < 0.6:
                studenter = ["Student A"]
            else:
                studenter = ["Student A", "Student B"]
            
            hus[etasje][rom_nummer] = studenter
    return hus

# --- OPPGAVER FOR ELEVENE: FYLL INN LOGIKKEN I FUNKSJONENE UNDER ---

def vis_alle_rom(data):
    """Skriver ut en oversikt over alle rom og hvem som bor der."""
    print("\n--- Oversikt over hybelhuset ---")
    # TODO: Loop gjennom etasjer og rom, skriv ut romnummer og beboere
    pass

def flytt_inn(data):
    """Spør om navn og romnr, og legger studenten til hvis det er plass (maks 3)."""
    # TODO: Be om input for navn og romnummer. 
    # Sjekk om rommet eksisterer og om det er ledig plass.
    pass

def flytt_ut(data):
    """Fjerner en student fra et bestemt rom basert på navn."""
    # TODO: Be om navn og romnummer, fjern studenten fra lista i det rommet.
    pass

def finn_student(data):
    """Søker etter en student ved navn og returnerer romnummeret."""
    # TODO: Loop gjennom alt for å finne studenten, skriv ut romnummeret.
    pass

def tell_ledige_plasser(data):
    """Beregner og skriver ut totalt antall ledige sengeplasser i huset."""
    # TODO: Tell hvor mange ledige "slots" (3 minus antall beboere) som finnes totalt.
    pass

def oversikt_etasje(data):
    """Viser status kun for en spesifikk etasje valgt av brukeren."""
    # TODO: Be om etasje (1-3) og vis kun rommene der.
    pass

def lagre_til_fil(data):
    """Lagrer hus-oversikten til en tekstfil."""
    # TODO: Skriv dataene til 'hybelstatus.txt' på en ryddig måte.
    pass

def slett_alle_i_rom(data):
    """Tømmer et helt rom for studenter (f.eks. ved utvask)."""
    # TODO: Be om romnummer og sett lista for dette rommet til å være tom [].
    pass

# --- HJELPEFUNKSJONER ---

def valider_rom(data, rom_nr):
    """Hjelpefunksjon: Sjekker om et romnummer faktisk eksisterer i huset."""
    # TODO: Returner True hvis rommet finnes, ellers False.
    return True

# --- HOVEDMENY ---

def meny():
    hus_data = generer_hybelhus()
    
    while True:
        print("\n=== VELKOMMEN TIL STUDENTBYEN ===")
        print("1. Vis alle rom")
        print("2. Flytt inn student")
        print("3. Flytt ut student")
        print("4. Finn student (søk)")
        print("5. Se statistikk (ledige plasser)")
        print("6. Vis bestemt etasje")
        print("7. Tøm et rom helt")
        print("8. Lagre oversikt til fil")
        print("9. Avslutt")
        
        valg = input("\nVelg handling (1-9): ")
        
        if valg == "1": vis_alle_rom(hus_data)
        elif valg == "2": flytt_inn(hus_data)
        elif valg == "3": flytt_ut(hus_data)
        elif valg == "4": finn_student(hus_data)
        elif valg == "5": tell_ledige_plasser(hus_data)
        elif valg == "6": oversikt_etasje(hus_data)
        elif valg == "7": slett_alle_i_rom(hus_data)
        elif valg == "8": lagre_til_fil(hus_data)
        elif valg == "9": 
            print("Program avsluttes. Ha en fin dag!")
            break
        else:
            print("Ugyldig valg, prøv igjen.")

if __name__ == "__main__":
    meny()


### Tips til elevene for å komme i gang:

# * **Datastrukturen:** `data` er en ordbok der nøklene er etasjenummer (1, 2, 3). Verdien til hver etasje er en ny ordbok med romnummer som nøkler.
# * **Eksempel:** For å få tak i studentene på rom 101, skriver man `data[1][101]`. Dette gir deg en `liste`.
# * **Løkker:** For å vise alle rom må man bruke en "nøstet" løkke:

for etasje, rommene in data.items():
    for rom_nr, studenter in rommene.items():
        # Her kan du printe ut informasjonen
