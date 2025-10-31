# Handout: Lag en app med AI (Google AI Studio) – Forenklet smidig prosess

> **Utviklingsmodell:** *Smidig utvikling – forenklet skoleversjon*
> Brukes mye i Norge. Fokus på raske forbedringer, testing og samarbeid med AI.

---

## 1) Oppgaven (4 timer)

Du og gruppen din skal:

1. Finne et **problem eller behov** hos elever eller en annen gruppe.
2. Lage en **app‑idé** som kan hjelpe målgruppen.
3. Beskrive **målgruppen**, **problemet** og **hvordan appen løser det**.
4. Lage appen ved hjelp av **Google AI Studio → Build (vibe‑coding)**.
5. **Teste** appen og **forbedre** den etter tilbakemeldinger.
6. Til slutt: **Demonstrere appen** for klassen og fortelle hva som fungerte og hva dere lærte.

**Leveranser:**

* Kort beskrivelse av problem og målgruppe (maks 5 linjer)
* Funksjonsliste / krav (Must–Should–Could)
* AI‑prompter brukt i prosjektet
* Ferdig app i Google AI Studio (eller demo av den)
* Kort refleksjon etter testing: hva dere forbedret, og hvorfor

---

## 2) Forenklet smidig prosess (uten sprint)

### Steg 1: Finn behovet

**Mål:** Forstå hvem dere lager for, og hva som er problemet.

Eksempler på målgrupper:

* Elever som vil organisere lekser eller trening
* Lærere som vil forenkle kommunikasjon
* Frivillige som vil koordinere aktiviteter

**AI‑prompt:**

```
Du er en idéhjelper. Foreslå 5 app‑idéer som kan hjelpe [målgruppe].
Forklar kort hvordan hver app løser et konkret problem.
```

### Steg 2: Velg idé og definer mål

**Mål:** Velg *én* idé som dere rekker å bygge på 4 timer.

Lag en kort visjon:

> For [målgruppe] som [problem], tilbyr [appnavn] en [løsning] som gir [verdi].

**AI‑prompt:**

```
Du er produktleder. Hjelp oss å skrive en kort visjon og tre målbare suksessmål for denne app‑ideen:
[idébeskrivelse]
```

### Steg 3: Kravspesifikasjon (enkelt)

**Mål:** Beskriv hvilke funksjoner appen *må*, *bør* og *kan* ha.

**Eksempel:**

* **Must:** Bruker kan logge inn og se dagens treningsøkt.
* **Should:** Bruker kan legge inn egne økter.
* **Could:** Appen foreslår økter automatisk.

**AI‑prompt:**

```
Du er kravanalytiker. Lag en enkel kravliste (Must/Should/Could) for denne appen:
[appidé]
```

### Steg 4: Bygg appen i AI Studio

**Mål:** Bruk AI‑assistert utvikling til å lage en fungerende app.

Bruk Google AI Studio → **Build** → skriv naturlig språk for å bygge funksjonene steg for steg.

**Tips:**

* Start med én kjernefunksjon (Must‑krav)
* Test etter hvert lite steg – bruk "Run" ofte
* Lagre versjoner når noe fungerer

**AI‑prompt (eksempel):**

```
Lag en enkel app der elever kan registrere dagens humør (glad, nøytral, stresset)
og se en oppsummering av klasse‑stemningen.
```

### Steg 5: Test og forbedre

**Mål:** Få ekte tilbakemeldinger og forbedre appen.

**Test‑plan (kort):**

1. Be 2–3 medelever prøve appen.
2. Still spørsmål som:

   * Var appen enkel å bruke?
   * Fikk du gjort det du skulle?
   * Hva burde vært annerledes?
3. Skriv ned 2 forbedringsforslag.
4. Endre appen i AI Studio.

**AI‑prompt (for forbedring):**

```
Basert på disse tilbakemeldingene, foreslå forbedringer i UI og funksjonalitet:
[brukerkommentarer]
```

### Steg 6: Demo og refleksjon

**Mål:** Vis hva dere har laget og hva dere lærte.

**Demo (maks 2 min):**

* Forklar kort problemet dere løste
* Vis appen i bruk
* Fortell hva dere forbedret etter testing

**Refleksjon:**
Skriv 5–10 linjer om:

* Hva fungerte bra?
* Hva lærte dere om å jobbe med AI?
* Hva ville dere gjort annerledes neste gang?

---

## 3) Eksempel: Appidé og gjennomføring

**Appnavn:** *KantineKø Light*

**Problem:** Elever opplever lang kø og usikkerhet om hva som er igjen i kantina.

**Visjon:** For elever som vil spare tid i kantina, tilbyr KantineKø Light en enkel menyvisning og køstatus som oppdateres automatisk.

**Krav (kort):**

* **Must:** Vise dagens meny og antall porsjoner igjen.
* **Should:** Oppdatere antall i sanntid.
* **Could:** Varsle når favorittrett er nesten tom.

**Test:** 3 elever prøver appen og foreslår at porsjoner skal vises med fargekode.
**Forbedring:** Legg til grønn/gul/rød indikator i UI via AI Studio.

**Refleksjon:**

> Vi lærte å bruke AI til å bygge funksjonene trinnvis og å teste små endringer fort. Neste gang vil vi teste tidligere med brukere.

---

## 4) Hurtigsjekkliste for gruppa

* [ ] Målgruppe og problem definert
* [ ] Én tydelig appidé valgt
* [ ] Kravliste (Must/Should/Could) skrevet
* [ ] App laget og testet
* [ ] Forbedringer gjort etter tilbakemelding
* [ ] Demo og refleksjon fullført

**Tips:** Tenk smått, test ofte, forbedre raskt – det er hele poenget med smidig utvikling!
