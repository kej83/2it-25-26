# Prosjekt: Webblogg med Node.js og EJS (uten kode)

**Teknologi:** Node.js, Express, EJS, mappe **views/partials** med **header.ejs** og **footer.ejs**

---

## 1) Hva du skal lage (MVP = Minimum Viable Product)

En enkel webblogg der hvem som helst kan publisere innlegg i starten.

**Må-ha funksjoner:**

* Liste over blogginnlegg på forsiden.
* Kategorier (f.eks. *Politikk, Religion, Sport, Kultur, Teknologi*).
* Skjema for nytt innlegg: velg **kategori**, skriv **overskrift** og **tekst**. Og skriv inn **fullt navn**.
* Vise et enkelt innlegg på egen side.
* **EJS-partials:** felles **header.ejs** og **footer.ejs** brukes på alle sider.

**Hyggelig å ha (kan komme senere):**

* Filtrere innlegg per kategori.
* Søk på overskrift/innhold.

> **Viktig:** I starten kan alle poste. Senere kan dere innføre brukere (se Ekstraoppgaver).

---

## 2) Læringsmål

* Forstå hvordan **EJS** bruker **partials** for gjenbruk av HTML (header/footer).
* Kunne planlegge et lite system med **brukerflyt** og **datamodell**.
* Kunne strukturere et Node-prosjekt for **views**, **statisk innhold** og **ruter**.
* Kunne teste funksjonalitet trinnvis (MVP → forbedringer).

---

## 3) Prosessoversikt (først til sist)

1. **Skisser på papir**: Hvordan skal siden se ut? (minst forsiden + skjema for nytt innlegg).
2. **Design med KI**: Fotografer/last opp skissen til en KI og be om forslag til HTML/CSS for en blogg (layout, farger, typografi).
3. **Prosjektoppsett i Node/EJS**: Lag mappeoppsett, legg inn EJS og partials.
4. **Sider & brukerflyt**: Forside (liste), ny-post-side (skjema), vis-innlegg-side.
5. **Datahåndtering**: Start enkelt (midlertidig minne).
6. **Testing**: Prøv alle brukerreiser og fikse feil.
7. **Finpuss**: Legg til kategori-filtrering/søk/styling.
8. **(Valgfritt) Ekstraoppgaver**: Innlogging, fil-lagring, redigering, admin.

---

## 4) Før du begynner – plan & skisser

**Obligatorisk:**

* Tegn **minst to** skisser:

  * **Forside** med liste av innlegg (kortversjon: kategori, tittel, utdrag, dato/forfatter).
  * **Ny blogg**-side med skjema (kategori, overskrift, innhold + publiser-knapp).
* Hvis du har enkeltside for et innlegg: tegn også den.

**Tenk på:**

* Hvor ligger **navigasjon** (meny med Hjem, Nytt innlegg, Kategorier)?
* Hvordan ser **kortet** for et innlegg ut i lista?
* Hvor plasserer du **feilmeldinger/bekreftelser**?

**Lever:** Et foto/scan av skissene i prosjektmappa.

---

## 5) Fra skisse til HTML/CSS med KI

* Last opp bildet av skissen til en KI-tjeneste.
* Be om **HTML + CSS**-forslag som passer en enkel webblogg.
* Be om:

  * Responsivt oppsett (mobil først).
  * Tydelig typografi for overskrift/innlegg.
  * En toppmeny med lenker (Hjem, Nytt innlegg, Kategorier).
* **Kopier** resultatet inn i prosjektets **views** (senere deler du opp i EJS-templates og partials).

> **Merk:** Ikke alt KI foreslår er perfekt. Du justerer etter behov.

---

## 6) Mappestruktur (uten kode)

Foreslått struktur:

```
prosjektrot/
  public/            ← bilder, CSS, ev. JS for klientsiden
  views/
    partials/
      header.ejs     ← felles topp (logo/meny/CSS-lenke)
      footer.ejs     ← felles bunn (footer-info)
    index.ejs        ← forside med liste over innlegg
    new.ejs          ← side med skjema for nytt innlegg
    show.ejs         ← vis et enkelt innlegg
  app.js             ← hovedfil for server/konfig (uten å vise kode)
  README.md          ← dokumentasjon
```

(Denne strukturen er veiledende. Læreren kan justere ved behov.)

---

## 7) Datamodell (enkelt først)

Start i minne (midlertidig): Hvert innlegg kan ha disse feltene:

* **id** (unik identifikator)
* **kategori** (f.eks. Politikk, Religion, …)
* **overskrift**
* **innhold** (selve teksten)
* **forfatter** (tom i MVP, eller «Anonym»/navn fra skjema)
* **opprettet** (dato/tid)

Senere kan dere lagre til **txt-fil** (se Ekstraoppgave 2).

---

## 8) Brukerflyt (MVP)

**Forside (/**):**

* Viser liste over innlegg (nyeste først).
* Hvert kort viser kategori, overskrift og et kort utdrag.
* Klikk på et kort → gå til visning av hele innlegget.

**Nytt innlegg (/new):**

* Skjema med: kategori (nedtrekk), overskrift (tekstfelt), innhold (tekstområde).
* Knapp **Publiser**.
* Ved publisering: valider at feltene ikke er tomme, lagre i minnet, og gå til forsiden eller visningssiden.

**Vis innlegg (/posts/:id):**

* Viser hele innlegget pent formatert.

**Kategorier:**

* Meny/lenker som filtrerer forsiden på valgt kategori (valgfritt i MVP, men anbefales).

---

## 9) Sjekkliste for EJS & partials

* **header.ejs** inneholder:

  * Dokumenttopp (doctype/head), global CSS-lenke, toppmeny (Hjem, Nytt innlegg, Kategorier).
* **footer.ejs** inneholder:

  * Bunntekst (årstall, navn/prosjekt), ev. enkle lenker.
* Alle sider **inkluderer** header/footer så layout og stil blir lik overalt.

---

## 10) Design & tilgjengelighet

* God **kontrast** og lesbar fontstørrelse.
* **Semantiske** elementer (overskrift-nivåer riktig rekkefølge, lister, avsnitt).
* **Tastaturnavigasjon** skal fungere (trykk Tab gjennom skjemaet).
* **Feilmeldinger** skal være klare (f.eks. «Overskrift mangler»).

---

## 11) Testplan (manuell)

* Kan jeg åpne forsiden og se 0, 1 og flere innlegg?
* Kan jeg opprette et nytt innlegg med alle feltene?
* Sorteres nye innlegg øverst?
* Fungerer kategori-valg og filtrering (hvis implementert)?
* Vises enkeltinnlegg riktig når jeg klikker på det?
* Er header/footer lik på alle sider?

Logg feil du finner, og fiks før levering.

---

## 12) Dokumentasjon (README)

**Kort og konkret:**

* Hva prosjektet gjør (1–3 setninger).
* Hvordan starte (uten detaljerte kommandoer; bare «Installer avhengigheter og start serveren»).
* Hva som er implementert (MVP + ev. ekstraoppgaver).
* Skjermbilder og skissefoto.

---

## 14) Ekstraoppgaver 

### Ekstra 1: Bruker-registrering og innlogging

**Mål:** Bare innloggede brukere kan **lage nye innlegg**. Alle kan lese.

* Lag en enkel registrering (brukernavn + passord).
* Innlogging holder brukeren autentisert under økten.
* Vis «Logg inn/Logg ut»-valg i headeren.
* Skjemaet for **nytt innlegg** er kun tilgjengelig for innloggede brukere.
* Marker forfatter på innlegget (brukernavn).

**Tips:** Tenk på sesjoner og hvordan du skjuler/viser lenker i EJS basert på om brukeren er innlogget.

---

### Ekstra 2: Lagre blogginnlegg i **.txt**-fil

**Mål:** Ved publisering lagres innlegg til en tekstfil (én linje per innlegg eller JSON-lignende struktur).

* Data som må med: **brukernavn**, **kategori**, **overskrift**, **innhold**, **dato/id**.
* Ved oppstart: last inn filen for å vise tidligere innlegg.
* Tenk på **feilhåndtering** (fil finnes ikke, skrivetilgang, tom fil).

**Tips:** En tydelig separator mellom felt, og ryddig lasting/lagring-rutine.

---

### Ekstra 3: Redigere eget innlegg

**Mål:** Bare forfatteren kan redigere sine egne innlegg.

* Legg til «Rediger»-knapp på visningssiden hvis innlogget bruker **er** forfatteren.
* Egen side for å endre kategori/overskrift/innhold.
* Etter lagring: oppdater visning og persistens (minne/fil).

**Tips:** Sjekk alltid hvem som er innlogget før du viser/aksepterer redigering.

---

### Ekstra 4: Administrator-rolle

**Mål:** En admin-bruker kan moderere.

* Admin kan redigere/slette **alle** innlegg.
* Admin kan **deaktivere/slette brukere** ved misbruk.
* I UI: Vis admin-kontroller kun til admin.

**Tips:** Skille mellom vanlig bruker og admin i dataene, og sjekk rolle før handlinger.

---

## 15) Personvern & etikk

* Kategorier som **Politikk** og **Religion** kan trigge sterke meninger. Ha en kort **nett-etikette** i footeren.
* Ikke samle inn mer persondata enn nødvendig.
* Ikke legg ut sensitive data.

---

## 17) Bonusidéer

* Paginering («last mer»-knapp).
* «Lik»/«Stjernemerking» av innlegg.
* Lesetid-estimat (basert på antall ord).
* Mørk/lys-modus.

