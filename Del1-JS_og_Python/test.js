// Lag en funksjon som tar et tall som argument
// og skriver ut tallet og de 10 neste tallene.
// f.eks. gitt 3, skriv ut 3, 4, 5, 6, ..., 13
function skrivUt(tall) {
    console.log(tall);
    let txt = "3, ";
    let slutt = tall + 10;
    for(let i=4; i <= slutt; i++) {
        
        if(i == slutt) {
            txt += i;
        }else {
            txt += i + ", ";
        }
    }
    
    console.log(txt);
}
skrivUt(3)

// 1) Lag en funksjon som tar et tall som argument, og teller ned til 0. 
// Hvis argumentet er 6. skal utskriften bli
// 6, 5, 4, 3, 2, 1, 0

// 2) Lag en funksjon som tar to tall som argument, og skriver ut alle tallene som er imellom. F.eks. hvis argumentene er 5 og 10, skal det skrives ut 6, 7, 8 og 9.

// 3) Lag en funksjon som tar to argumenter: et passord, og et array med gyldige passord. Dersom passordet finnes i arrayet gyldige passord, returneres true, ellers false. F.eks. "abc" og ["sdf", "abc", "123"] vil gi true, mens "wer123" og ["ae","re2"] gir false.