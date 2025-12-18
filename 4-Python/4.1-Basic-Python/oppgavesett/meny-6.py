# Lag en meny:
# 1. Si hei 
# 2. Regn ut 2 + 2 
# 3. Avslutt 
# Menyen skal kjøre i en while-løkke til brukeren velger 3.
import time
meny = """
1. Si hei
2. Regn ut 2 + 2
3. Avslutt
"""

while True:
    print(meny)
    valg = input("Ditt valg (1-3): ")
    if valg == "1":
        print("Hei")
    elif valg == "2":
        print(2+2)
    elif valg == "3":
        print("Avsluttet. Morna.")
        break
    else:
        print("UGYLDIG VALG! Skriv 1, 2 eller 3.")
    time.sleep(2)

