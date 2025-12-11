# ✅ **Grunnleggende brukeroppsett i Windows Server 2019**

Scenario: Du skal forberede et nytt domenemiljø for **Nannestad Auto AS**.
Bedriften skal ha **2 administratorer** og **8 standardbrukere** som skal kunne logge inn på klientmaskiner i bedriften.

---

## **1. Installer og konfigurer Active Directory Domain Services**

**Mål:** Planlegging, implementering og dokumentasjon av IT-systemer.
**Oppgave:**

* Installer AD DS på Windows Server 2019
* Opprett et nytt domene: **nannestadauto.local**
* Dokumentér installasjonen (steg, viktige valg, IP-adresse, domenenavn)

---

## **2. Lag en OU-struktur tilpasset Nannestad Auto AS**

**Mål:** Strukturert drift og dokumentasjon.
**Oppgave:**
Opprett følgende OUs:

* **Nannestad Auto AS**

  * **Admins**
  * **Brukere**
  * **Maskiner**
  * **Grupper**
  * **Policy**

Vis med skjermbilder at strukturen er laget, og forklar hvorfor OU-struktur er viktig i IT-drift.

---

## **3. Opprett 2 administratorbrukere**

**Mål:** Datasikkerhet, tilgangsstyring.
**Oppgave:**
Lag brukerne:

* **admin.larsen**
* **admin.haugen**

Begge skal:

* Ligge i OU **Admins**
* Legges i gruppen **Domain Admins**
* Ha passord med minimum 10 tegn, tall og spesialtegn
* Tvinges til passordbytte ved første innlogging

---

## **4. Opprett 8 standardbrukere**

**Mål:** Implementering og drift av brukere i AD.
**Oppgave:**
Lag følgende brukere i OU **Brukere**:

1. ola.hansen
2. kari.nilsen
3. sofie.lund
4. marte.berg
5. tom.eriksen
6. espen.sand
7. mari.holt
8. jonas.dahl

Gi dem:

* Standard passord (f.eks. **Velkommen123!**)
* Krav om nytt passord ved første innlogging

---

## **5. Lag en sikkerhetsgruppe for ansatte**

**Mål:** Forståelse av tilgangskontroll og dokumentasjon.
**Oppgave:**

* Opprett gruppen **Ansatte** (Global / Security) i OU **Grupper**
* Legg alle 8 standardbrukere inn i gruppen
* Forklar hva som er forskjellen på **Security** og **Distribution** grupper

---

## **6. Lag en enkel GPO for passordpolicy**

**Mål:** Datasikkerhet, informasjonssikkerhet, regulering.
**Oppgave:**
Lag en policy i OU **Policy** som setter:

* Minste passordlengde: 10 tegn
* Maks passordtid: 60 dager
* Historikk: 5 gamle passord

Link GPO-en til domenet og dokumentér med skjermbilder.

---

## **7. Lag en innloggingspolicy (GPO) som viser en advarsel**

**Mål:** Personvern, datasikkerhet, lover og regler.
Brukerne skal få opp denne meldingen før innlogging:

> «Du bruker IT-systemer som tilhører Nannestad Auto AS. All bruk skal følge rutiner for personvern og informasjonssikkerhet.»

Oppgave:

* Lag GPO → Computer Configuration → Policies → Security Settings → Local Policies → Security Options
* Sett **Interactive logon: Message text/title**
* Dokumentér hvorfor slike meldinger er viktig for virksomheten.

---

## **8. Opprett en delt mappe for ansatte**

**Mål:** Ressursdeling, tilgangsstyring.
**Oppgave:**

* Opprett mappen: **D:\Felles**
* Del den som **\SERVER\Felles**
* Gi **Ansatte** lese/skrive-tilgang
* Gi **Admins** full tilgang
* Dokumentér NTFS og Share-permisjoner

---

## **9. Test en klientmaskin som melder seg inn i domenet**

**Mål:** Feilsøking, implementering, dokumentasjon.
**Oppgave:**

* Installer Windows 10/11 klient i VirtualBox
* Sett statisk IP og DNS → DNS skal peke på serveren
* Meld klienten inn i domenet **nannestadauto.local**
* Logg inn med en av standardbrukerne
* Dokumentér eventuelle feil og hvordan de ble løst

---