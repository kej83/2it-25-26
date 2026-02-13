import random

# --- GLOBAL VARIABEL ---
hus_data = []

def generer_hybelhus():
    """
    Oppretter et hybelhus som en liste med ordbøker.
    Hver ordbok representerer et rom:
    {"etasje": 1, "romnr": 101, "studenter": ["Navn", "Navn"]}
    """
    midlertidig_hus = []
    
    for etasje in range(1, 4):
        antall_rom = random.randint(8, 12)
        for r in range(1, antall_rom + 1):
            rom_nummer = (etasje * 100) + r
            
            # Tilfeldig fylling av studenter
            tilfelle = random.random()
            if tilfelle < 0.2:
                beboere = []
            elif tilfelle < 0.6:
                beboere = ["Student A"]
            else:
                beboere = ["Student A", "Student B"]
            
            # Lager selve "rom-objektet" (ordboken)
            nytt_rom = {
                "etasje": etasje,
                "romnr": rom_nummer,
                "studenter": beboere
            }
            midlertidig_hus.append(nytt_rom)
            
    return midlertidig_hus

# Fyller den globale variabelen ved oppstart
hus_data = generer_hybelhus()

# --- EKSEMPEL: FUNKSJON FERDIG UTFØRT ---

def vis_alle_rom():
    """Skriver ut en oversikt over alle rom, etasje og beboere."""
    print("\n--- OVERSIKT OVER ALLE HYBLER ---")
    
    # Siden hus_data er en liste, bruker vi en enkel for-løkke
    for rom in hus_data:
        etasje = rom["etasje"]
        nr = rom["romnr"]
        beboere = rom["studenter"]
        
        # Formaterer beboer-listen til en tekststreng
        beboer_tekst = ", ".join(beboere) if beboere else "TOMT"
        
        print(f"Etasje {etasje} | Rom {nr:3} | Beboere: {beboer_tekst}")

# --- OPPGAVER FOR ELEVENE: FYLL INN LOGIKKEN ---

def flytt_inn():
    """Spør om navn og romnr, og legger studenten til hvis det er plass (maks 3), og at romnr faktisk finnes!."""
    # TODO: Be om input for navn og romnummer.
    navn = input("navn: ")
    romnr = int(input("romnr: "))
    # Hint: Loop gjennom hus_data for å finne riktig "romnr".
    pass

def flytt_ut():
    """Fjerner en student fra et bestemt rom basert på navn."""
    # TODO: Be om navn og romnummer, finn rommet og fjern navnet fra 'studenter'-lista.
    pass

def finn_student():
    """Søker etter en student ved navn og returnerer romnummeret."""
    # TODO: Loop gjennom alle rom og sjekk om navnet finnes i 'studenter'-lista.
    pass

def tell_ledige_plasser():
    """Beregner og skriver ut totalt antall ledige sengeplasser i huset."""
    # TODO: Hvert rom har plass til 3. Tell totalt (3 - antall_beboere) for alle rom.
    pass

def oversikt_etasje():
    """Viser status kun for en spesifikk etasje valgt av brukeren."""
    # TODO: Be om etasje (1-3). Loop gjennom og print bare hvis "etasje" stemmer.
    pass

def lagre_til_fil():
    """Lagrer hus-oversikten til en tekstfil."""
    # TODO: Åpne 'hybelstatus.txt' og skriv inn dataene.
    pass

def slett_alle_i_rom():
    """Tømmer et helt rom for studenter (f.eks. ved utvask)."""
    # TODO: Finn riktig rom via romnr og sett 'studenter' = []
    pass

# --- HJELPEFUNKSJONER ---

def valider_rom(rom_nr):
    """Sjekker om et romnummer faktisk eksisterer i huset."""
    # TODO: Returner True hvis rommet finnes i lista, ellers False.
    return True

# --- HOVEDMENY ---

def meny():
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
        
        if valg == "1": vis_alle_rom()
        elif valg == "2": flytt_inn()
        elif valg == "3": flytt_ut()
        elif valg == "4": finn_student()
        elif valg == "5": tell_ledige_plasser()
        elif valg == "6": oversikt_etasje()
        elif valg == "7": slett_alle_i_rom()
        elif valg == "8": lagre_til_fil()
        elif valg == "9": 
            print("Program avsluttes. Ha en fin dag!")
            break
        else:
            print("Ugyldig valg, prøv igjen.")

if __name__ == "__main__":
    meny()