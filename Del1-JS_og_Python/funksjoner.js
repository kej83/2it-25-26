// Funksjoner som bare gjør noe
// Funksjon uten input og output
function hei() {
    console.log("morn på deg");
}
// Funksjonskall: vi kaller på funksjonen
// Eller "vi kjører funksjonen"
hei();

// Funksjon med 1 input/parameter/argument
function heiNavn(navn) {
    console.log("morn på " + navn);
    console.log(`morn på ${navn}, jeg liker deg`);
}
heiNavn();  // morn på undefined
heiNavn("jens");

// Flere input
// F.eks. navn og alder
// Funksjonen skal skrive hei jens, du fyller 50 år i 2054 f.eks.
function fylleFemti(navn, alder) {
    let aarNaa = 2025;
    let aarTilFemti = 50 - alder;
    let aar50 = aarNaa + aarTilFemti;

    let txtUt = `Hei ${navn}, du fyller 50 år i ${aar50}.`;
    console.log(txtUt);
}
fylleFemti('jens', 20);
fylleFemti('olga', 60);

// Returverdi
// Funksjon som sender et tilfeldig terningkast
function kast() {
    // Math.random() tilfeldig tall mellom 0 og 1
    return Math.floor(Math.random()*6) + 1;
}
console.log(kast());
// Alternativt skrive ut 10 kast
// for (let i=0; i<10; i++) {
//     
// }

// Funksjoner med parametere og returverdi og output.
function gange(tallA, tallB) {
    console.log(tallB);
    return tallA * tallB;
}
console.log(gange(3, 5));
console.log(gange(3 * 5));  // NaN = Not a Number
// NY LÆRDOM: 15 * undefined blir NaN

// Søkefunksjoner
// Array med ansatte, finn ansatt
// Hvis finnes, return true, ellers false
function finnNavn(navn) {
    let index = ansatte.indexOf(navn);
    if (index === -1) {
        return false;
    }
    else{
        return true;
    }
}
let ansatte = ["arne", "per", "bo", "ea"];
console.log(finnNavn("per"));
console.log(finnNavn("sara"));

// Med array som parameter
function finnNavnTo(navn, navneArray) {
    let index = navneArray.indexOf(navn);
    if (index === -1) {
        return false;
    }
    else{
        return true;
    }
}

console.log(finnNavnTo("jens", ["per", "bo", "ea"]));
console.log(finnNavnTo("jens", "jens"));
console.log("jens".indexOf("jens"));