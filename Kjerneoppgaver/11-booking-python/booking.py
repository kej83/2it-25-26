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
    antall_opptatte = 0

    for i in range(len(hotell)):
        
        if hotell[i] is not None:
            antall_opptatte += 1

    print("Antall opptatte rom: ", antall_opptatte)


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
