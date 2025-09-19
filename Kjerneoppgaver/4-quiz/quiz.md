# Håndbok for JavaScript-prosjekt: "Quiz-spillet"

Velkommen til et spennende prosjekt der du skal lage et interaktivt quiz-spill\! 🚀 I denne oppgaven får du øve deg på grunnleggende JavaScript-konsepter som variabler, logikk, funksjoner og løkker. Prosjektet er satt opp med ferdig HTML og CSS, slik at du kan fokusere fullt og helt på JavaScript-delen.

-----

## 🧭 Navigasjon

  * [**Nivå 3: Full utfordring**](#-nivå-3-full-utfordring)
  * [**Nivå 2: Med litt hjelp**](#-nivå-2-med-litt-hjelp)
  * [**Nivå 1: Maksimal hjelp**](#-nivå-1-maksimal-hjelp)

-----

## 🎯 Prosjektbeskrivelse

Målet er å lage en enkel quiz. Du skal bruke **JavaScript** for å:

  * Lagre spørsmål og svar.
  * Presentere spørsmålene og svarene på siden.
  * Sjekke om brukerens svar er riktig.
  * Holde oversikt over brukerens poengsum.
  * Gi tilbakemelding til brukeren.
  * Gå videre til neste spørsmål.

-----

## 🧠 Nivå 3: Full utfordring

Dette nivået er for deg som vil skrive all JavaScript-koden fra bunnen av. Du får kun en blank `script.js`-fil. Her må du bruke alle de nevnte konseptene.

### Oppgave:

1.  **Startprosjektet**: Lag et sett med variabler for å lagre spørsmål, svar og de korrekte svarene. Bruk separate arrays for hver type data. For eksempel: `questions`, `answers` og `correctAnswers`.

2.  **Vis spørsmål og svar**: Skriv en funksjon som tar et spørsmålsnummer som argument og viser spørsmålet og de tilhørende svaralternativene på nettsiden. Tenk på hvordan du kan bruke en løkke for å generere knapper for svarene.

3.  **Håndter klikk**: Legg til en `event listener` som lytter etter klikk på svar-knappene. Bruk en `if-else` logikk for å sjekke om det valgte svaret er riktig. Øk poengsummen hvis svaret er korrekt, og gi en tilbakemelding til brukeren.

4.  **Gå til neste**: Lag en funksjon for å håndtere "Neste spørsmål"-knappen. Funksjonen skal øke spørsmålsnummeret og kalle på funksjonen fra punkt 2 for å vise neste spørsmål. Husk å sjekke om det er flere spørsmål igjen.

5.  **Avslutt spillet**: Når alle spørsmål er besvart, skal du vise sluttresultatet til brukeren. Du kan for eksempel vise en melding som "Gratulerer\! Du fikk X av Y spørsmål riktig\!".

-----

## 💡 Nivå 2: Med litt hjelp

Her får du et rammeverk med funksjoner og variabler. Din oppgave er å fylle ut logikken inni hver funksjon og koble dem sammen.

### Steg 1: Definer variabler og data

Disse variablene er ferdig definert for deg.

```javascript
// Variabler for quiz-data
const questions = [
    "Hva er hovedstaden i Japan?",
    "Hvilket land vant fotball-VM for menn i 2022?",
    "Hvilken planet er nærmest solen?"
];

const answers = [
    ["Kyoto", "Osaka", "Tokyo", "Seoul"],
    ["Brasil", "Frankrike", "Argentina", "Tyskland"],
    ["Mars", "Venus", "Merkur", "Jorden"]
];

const correctAnswers = [2, 2, 2]; // 0-indeksert

// Variabler for HTML-elementer
const questionElement = document.getElementById("question-text");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
const scoreElement = document.getElementById("score");
const totalQuestionsElement = document.getElementById("total-questions");
const feedbackElement = document.getElementById("feedback");

// Variabler for spillets tilstand
let currentQuestionIndex = 0;
let score = 0;
let answered = false;
```

-----

### Steg 2: Skriv funksjonene

Nå skal du fylle ut logikken i hver funksjon. Se på kommentarene i hver funksjon for å se hva du skal gjøre.

```javascript
function startQuiz() {
    // 1. Sett alle spillvariablene tilbake til startverdien (første spørsmål og 0 poeng).
    // 2. Skjul "Neste spørsmål"-knappen ved å endre `style.display`.
    // 3. Oppdater totalt antall spørsmål på siden.
    // 4. Kall funksjonen som viser det første spørsmålet.
}

function showQuestion() {
    // 1. Tøm alle knapper og tilbakemeldinger fra forrige spørsmål.
    // 2. Vis spørsmålsteksten basert på `currentQuestionIndex`.
    // 3. Bruk en løkke til å lage en knapp for hvert svaralternativ.
    // 4. Gi hver knapp teksten fra `answers`-arrayen.
    // 5. Legg til en "click"-event listener som kaller `selectAnswer`-funksjonen.
    // 6. Legg knappene til i `answerButtons` div'en.
}

function selectAnswer(e) {
    // 1. Hent knappen som ble klikket på.
    // 2. Finn ut hvilken indeks den klikkede knappen har.
    // 3. Bruk en `if-else` logikk for å sjekke om svaret er riktig.
    // 4. Hvis svaret er riktig, øk poengsummen og gi visuell tilbakemelding.
    // 5. Hvis svaret er feil, gi visuell tilbakemelding og vis hva som var riktig svar.
    // 6. Deaktiver alle knappene etter at et svar er valgt.
    // 7. Vis "Neste spørsmål"-knappen.
}

function handleNextButton() {
    // 1. Øk `currentQuestionIndex` med 1.
    // 2. Bruk en `if-else`-setning for å sjekke om det er flere spørsmål igjen.
    // 3. Hvis det er flere spørsmål, kall `showQuestion()`.
    // 4. Hvis quizen er ferdig, kall `showScore()`.
}

function showScore() {
    // 1. Tøm knapper og skjul "Neste spørsmål"-knappen.
    // 2. Vis sluttresultatet i spørsmålstekst-feltet.
}

// Koble sammen alle funksjonene her, f.eks. ved å legge til event listeners og kalle startQuiz()
```

-----

## 📚 Nivå 1: Maksimal hjelp

Dette nivået er for deg som trenger en fullstendig gjennomgang av koden. Her får du all koden ferdig, med utfyllende kommentarer som forklarer hvert steg.

-----

### Steg 1: Definisjon av variabler og data

Vi starter med å definere variablene som skal holde spillets data og referansene til HTML-elementene. Her lagrer vi all informasjonen spillet trenger i enkle lister (arrays).

```javascript
// Variabler for quiz-data
// Vi bruker enkle arrays for å holde styr på spørsmålene, svaralternativene og de korrekte svarene.
const questions = [
    "Hva er hovedstaden i Japan?",
    "Hvilket land vant fotball-VM for menn i 2022?",
    "Hvilken planet er nærmest solen?"
];

// En "array av arrays" for svaralternativene. Hver indre array tilhører et spørsmål.
const answers = [
    ["Kyoto", "Osaka", "Tokyo", "Seoul"],
    ["Brasil", "Frankrike", "Argentina", "Tyskland"],
    ["Mars", "Venus", "Merkur", "Jorden"]
];

// En array som lagrer indeksen (posisjonen) til det korrekte svaret for hvert spørsmål.
// Indekser starter fra 0. For første spørsmål er "Tokyo" på indeks 2.
const correctAnswers = [2, 2, 2];

// Henter HTML-elementene vi skal manipulere med JavaScript.
const questionElement = document.getElementById("question-text");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
const scoreElement = document.getElementById("score");
const totalQuestionsElement = document.getElementById("total-questions");
const feedbackElement = document.getElementById("feedback");

// Definerer variabler for å holde styr på spillets tilstand.
let currentQuestionIndex = 0; // Hvilket spørsmål vi er på.
let score = 0; // Brukerens poengsum.
let answered = false; // En "flag"-variabel som sier om brukeren har svart.
```

-----

### Steg 2: Skriv funksjonen `startQuiz()`

Denne funksjonen fungerer som en "reset" for spillet. Den setter alt tilbake til start, slik at vi kan begynne en ny runde.

```javascript
function startQuiz() {
    // Nullstiller spillets tilstand for en ny runde.
    currentQuestionIndex = 0;
    score = 0;
    answered = false;
    nextButton.style.display = "none"; // Skjuler "Neste" knappen ved start.
    totalQuestionsElement.textContent = questions.length; // Viser totalt antall spørsmål.
    showQuestion(); // Kaller funksjonen som viser det første spørsmålet.
}
```

-----

### Steg 3: Skriv funksjonen `showQuestion()`

Denne funksjonen er hjertet i spillet, den viser spørsmål og genererer knappene for svaralternativene. Vi bruker en `for`-løkke for å lage knappene automatisk for hvert svar.

```javascript
function showQuestion() {
    // Fjerner gamle knapper og tilbakemeldinger.
    answerButtons.innerHTML = "";
    feedbackElement.textContent = "";

    // Henter det nåværende spørsmålet og viser det på siden.
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = `${currentQuestionIndex + 1}. ${currentQuestion}`;

    // Bruker en for-løkke for å iterere gjennom svaralternativene.
    const currentAnswers = answers[currentQuestionIndex];
    for (let i = 0; i < currentAnswers.length; i++) {
        // Lager et nytt HTML <button> element.
        const button = document.createElement("button");
        button.innerHTML = currentAnswers[i];
        button.classList.add("btn");

        // Legger til en event listener som lytter etter klikk.
        button.addEventListener("click", selectAnswer);
        
        // Legger den nye knappen til i HTML-elementet med id="answer-buttons".
        answerButtons.appendChild(button);
    }
}
```

-----

### Steg 4: Skriv funksjonen `selectAnswer()`

Denne funksjonen sjekker brukerens svar mot det korrekte svaret. Den gir også tilbakemelding og deaktiverer knappene.

```javascript
function selectAnswer(e) {
    // Stopper funksjonen hvis brukeren allerede har svart på spørsmålet.
    if (answered) return;
    answered = true;

    // Henter knappen som ble klikket.
    const selectedBtn = e.target;
    // Finner indeksen til den klikkede knappen for å sammenligne med korrekt svar.
    const selectedAnswerIndex = Array.from(answerButtons.children).indexOf(selectedBtn);
    const correctIndex = correctAnswers[currentQuestionIndex];

    // Bruker en if-else setning for å sjekke om svaret er riktig.
    if (selectedAnswerIndex === correctIndex) {
        selectedBtn.classList.add("correct"); // Farger knappen grønn.
        score++; // Øker poengsummen.
        feedbackElement.textContent = "Riktig! ✅";
    } else {
        selectedBtn.classList.add("incorrect"); // Farger feil knapp rød.
        feedbackElement.textContent = "Feil! ❌";
        // Finner og farger riktig svar grønt, slik at brukeren ser hva som var riktig.
        answerButtons.children[correctIndex].classList.add("correct");
    }

    // Går gjennom alle knapper og deaktiverer dem.
    Array.from(answerButtons.children).forEach(button => {
        button.disabled = true;
    });

    nextButton.style.display = "block"; // Viser "Neste" knappen.
    scoreElement.textContent = score; // Oppdaterer poengsummen på siden.
}
```

-----

### Steg 5: Håndter "Neste" knappen og spillets slutt

Her har vi logikken som flytter spillet fremover og avslutter det. Vi kobler også sammen alle funksjonene for å få spillet til å kjøre.

```javascript
function handleNextButton() {
    currentQuestionIndex++;
    answered = false;
    nextButton.style.display = "none";

    // Sjekker om det er flere spørsmål igjen.
    if (currentQuestionIndex < questions.length) {
        showQuestion(); // Viser neste spørsmål.
    } else {
        showScore(); // Viser sluttresultatet.
    }
}

// Viser sluttresultatet.
function showScore() {
    answerButtons.innerHTML = "";
    questionElement.innerHTML = `Du fikk ${score} av ${questions.length} spørsmål riktig!`;
}

// Kobler funksjonene til HTML-knappene ved å legge til event listeners.
nextButton.addEventListener("click", handleNextButton);

// Kaller startQuiz() for å starte spillet når siden lastes.
startQuiz();
```