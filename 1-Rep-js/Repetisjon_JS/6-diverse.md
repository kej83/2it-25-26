# Oveoppgaver js 19.sep

## Opg 1 if-else
```js
// fra 0 til 12
let tall = Math.random()*12;
console.log(tall);
// mellom 2 og 8
// PYTHON: 2 < tall < 8
if (2 < tall && tall < 8) {
    console.log("ja");
}
else {
    console.log("nei");
}


```

## Opg 2 while
skrive ut 
```bash
10
8
6
4
2
1
```

```js
let tall = 10;
while (tall >= 2) {
    console.log(tall);
    tall -= 2;
    // tall = tall - 2;
}
console.log(1);
// eller
// tall--;
// console.log(tall);
```

## Opg 2 while
Lag funksjon som tar array med navn som argument. Returnerer true dersom både jens og arne finnes i arrayet, ellers false.


```js
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
```