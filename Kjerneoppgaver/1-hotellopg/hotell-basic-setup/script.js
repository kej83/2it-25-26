function visHilsen() {
    // Les inn navn
    let navn = txtInn.value;
    // Lag hilsen
    let hilsen = "God morgen, " + navn;
    // Skriv ut hilsen
    txtUt.textContent = hilsen;
}

//  <label for="txtInn">Navn:</label> <input type="text" name="" id="txtInn">
//     <button id="btnNavn">Klikk for å få hilsen</button>
//     <p id="txtUt"></p>
let btnNavn = document.getElementById("btnNavn");
let txtInn = document.getElementById("txtInn");
let txtUt = document.getElementById("txtUt");

btnNavn.addEventListener("click", visHilsen);