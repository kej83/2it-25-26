function loggInn(event){
    // Unngå reset av felt og standard form oppførself
    event.preventDefault();
    // Les brukernavn og passord fram skjema
    let user = inpUser.value;
    let pass = inpPassword.value;

    // Sjekk om både user og pass er riktige!
    // TODO: endre til objekt
    // let correctUser = {
    // "username":"jens123",
    // "password":"1234"
    // }
    // console.log(correctUser["username"]);
    if (user === correctUser["username"] && pass === correctUser["password"] ) {
        txtUt.textContent = "Logget inn!";
    } else{
        txtUt.textContent = "ikke Logget inn!";
    }
}

// let correctUser = "jens123";
// let correctPass = "1234"; 
// objekt!
let correctUser = {
    "username":"jens123",
    "password":"1234"
}
console.log(correctUser["username"]);

let skjema = document.getElementById("skjema");
let inpUser = document.getElementById("inpUser");
let inpPassword = document.getElementById("inpPassword");

skjema.addEventListener("submit", loggInn);

// juks for testing
inpUser.value = "jens123";
inpPassword.value = "1234";