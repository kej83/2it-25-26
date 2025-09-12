// =============================
// DATASTRUKTUR (kun array)
// =============================
const oppgaver = [
  "Pakke gymtøy",
  "Lekse i matte",
  "Lese 20 min",
  "Hjelpe til med middag",
  "Rydde skrivepult"
];

// =============================
// DOM-REFERANSER
// =============================
const inpTekst = document.getElementById("inpTekst");
const inpIndex = document.getElementById("inpIndex"); // nytt felt for sletting
const utMelding = document.getElementById("utMelding");
const utListe = document.getElementById("utListe");
const utAntallTotal = document.getElementById("utAntallTotal");
const skjemaOppgave = document.getElementById("skjemaOppgave");
const btnSlett = document.getElementById("btnSlett"); // ny knapp

// =============================
// HJELPEFUNKSJONER (TODO for elevene)
// =============================

function erGyldigTekst(tekst) {
  // TODO: returner true hvis tekst ikke er tom, ellers false
}

function tellOppgaver(liste) {
  // TODO: bruk for-løkke og tell opp elementene
}

function leggTilOppgave(tekst) {
  // TODO: legg til tekst bakerst i arrayen
}

function slettOppgave(index) {
  // TODO: sjekk at index er gyldig (0 <= index < oppgaver.length), og bruk splice
}

function visMelding(tekst) {
  // TODO: skriv tekst til utMelding.textContent
}

function renderTeller(liste) {
  // TODO: kall tellOppgaver og oppdater utAntallTotal.textContent
}

// =============================
// UTSKRIFT AV GJØREMÅL (FERDIG)
// =============================
function renderListe(liste) {
  utListe.innerHTML = "";
  for (let i = 0; i < liste.length; i++) {
    const tekst = liste[i];
    const li = document.createElement("li");
    li.textContent = i + ": " + tekst;
    utListe.appendChild(li);
  }
}

// =============================
// HENDELSER
// =============================

// Legg til nytt gjøremål
skjemaOppgave.addEventListener("submit", function (e) {
  e.preventDefault();
  const tekst = inpTekst.value.trim();

  // 1) Valider tekst
  // TODO: hvis ugyldig -> visMelding("Skriv noe først!") og return

  // 2) leggTilOppgave
  // TODO

  // 3) tøm inputfelt og sett fokus tilbake
  // TODO

  // 4) oppdater visning og teller
  // TODO

  // 5) vis melding
  // TODO
});

// Slett oppgave ved index
btnSlett.addEventListener("click", function () {
  const index = Number(inpIndex.value);

  // 1) kall slettOppgave(index)
  // TODO

  // 2) tøm felt
  // TODO

  // 3) oppdater visning og teller
  // TODO

  // 4) vis melding (f.eks. "Slettet oppgave nr X")
  // TODO
});

// =============================
// Ved oppstart
// =============================
renderListe(oppgaver);
renderTeller(oppgaver);
visMelding("");
