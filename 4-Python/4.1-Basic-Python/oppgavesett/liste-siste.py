# ### **Oppgave 6 – Final Boss:**
# Lag et lite "klasseliste-system":

# 1. Lag en liste med minst 5 elevnavn.  
# 2. Skriv ut alle navnene med nummer foran:

# ```
# 1: Anna
# 2: Jonas
# 3: Fatima
# 4: Leo
# 5: Sara
# ```

# 3. Be brukeren skrive inn et nummer.  
# 4. Skriv ut navnet på den plassen.  
# 5. Hvis brukeren skriver et ugyldig tall, vis feilmelding i stedet for å krasje.

elever = ['Jonas', 'Anna', 'Fatima', 'Leo', 'Sara']
for i in range(len(elever)):
    print(f"{i + 1}: {elever[i]}")

index = int(input("Oppgi index: "))
# index >= 0 and index < len(elever)
if index >= 0 and index < len(elever):
    elev = elever[index]
    print(elev)
else:
    print("Ugyldig index, prøv igjen.")
