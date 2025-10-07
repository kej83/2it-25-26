function sjekkNavn(arrayNavn) {
    let arneFinnes = arrayNavn.indexOf("arne") >= 0;
    let jensFinnes = arrayNavn.indexOf("jens") >= 0;

    if (arneFinnes && jensFinnes) {
        return true;
    }else {
        return false;
    }
}
console.log(sjekkNavn(["sara","arne","per"]));
console.log(sjekkNavn(["sara","werrne","per"]));
console.log(sjekkNavn(["sara","jens","per","arne"]));