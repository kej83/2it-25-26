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
// DOM-REFERANSER Document Object Model
// Pekere fra HTML til JS
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
  // Return false dersom teksten er tom
  if (tekst.length === 0) {
    return false;
  } else {
    // Teksten er ikke tom
    return true;
  }

}

// liste: et array
// return: antall elementer i arrayet
function tellOppgaver(liste) {
  // ok
  return liste.length;
}

function leggTilOppgave(tekst) {
  // TODO: legg til tekst bakerst i arrayen
  oppgaver.push(tekst);
}

function slettOppgave(index) {
  // TODO: sjekk at index er gyldig (0 <= index < oppgaver.length), og bruk splice
  // 0 <= index < oppgaver.length
  // sjekk om index er ugyldig:
  // index < 0 || index >= oppgaver.length
  if (index >= 0 && index < oppgaver.length) {
    oppgaver.splice(index, 1);
    // slett verdien på plass index, og slett 1 stykk
    return true;
  }else {
    return false;
    
  }
}

function visMelding(tekst) {
  // TODO: skriv tekst til utMelding.textContent
  utMelding.textContent = tekst;
}

function renderTeller(liste) {
  // FERDIG
  let antallOpg = tellOppgaver(oppgaver)
  utAntallTotal.textContent = "Antall oppgaver: " + antallOpg;
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
  if (!erGyldigTekst(tekst)) {
    visMelding("Skriv noe først!");
    return;  // ut av funksjonen
  } 
  // 2) leggTilOppgave
  // TODO
  leggTilOppgave(tekst);
  // 3) tøm inputfelt og sett fokus tilbake
  // TODO
  inpTekst.value = "";
  inpTekst.focus();  // flytter markøren tilbake i feltet
  // 4) oppdater visning og teller
  // TODO
  renderListe(oppgaver);
  renderTeller(oppgaver);
  // 5) vis melding
  // TODO
  visMelding("Oppgave lagt til");
});

// Slett oppgave ved index
btnSlett.addEventListener("click", function () {
  const index = Number(inpIndex.value);

  // 1) kall slettOppgave(index)
  // TODO
  let bleSlettet = slettOppgave(index);
  if(!bleSlettet) {
    visMelding("ble ikke slettet, ugyldig index, prøv igjen");
    return;
  }
  // 2) tøm felt
  // TODO
  inpIndex.value = "";
  // 3) oppdater visning og teller
  // TODO
  renderListe(oppgaver);
  renderTeller(oppgaver);
  // 4) vis melding (f.eks. "Slettet oppgave nr X")
  // TODO
  visMelding(`Slette oppgave nr. ${index}`);
});

// =============================
// Ved oppstart
// =============================
renderListe(oppgaver);
renderTeller(oppgaver);
visMelding("");
