### **Oppgave 4:**
# Be brukeren skrive inn en temperatur og gi passende tilbakemelding:
# * "Kaldt" (<10)
# * "OK" (10–20)
# * "Varmt" (>20)

temp = float(input("temp: "))
if temp < 10:
    print("Kaldt")
elif temp < 20: 
    print("OK")
else:
    print("Varmt")
