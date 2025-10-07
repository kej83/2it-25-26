function loggInn(event) {
    // Unngå reset av felt og standard form oppførself
    event.preventDefault();
    // Les brukernavn og passord fram skjema
    let user = inpUser.value;
    let pass = inpPassword.value;

    let loggInnOk = sjekkUserPass(user, pass);

    if (loggInnOk) {
        txtUt.textContent = "Logget inn!";
    } else {
        txtUt.textContent = "ikke Logget inn!";
    }
}

function sjekkUserPass(user, pass) {
    // 1. Gå gjennom alle brukere
    for (let userObject of brukere) {
        if (user === userObject["username"] &&
            pass === userObject["password"]
        ) {
            return true;
        }
    }
    // Hva vet jeg nå?
    // fant ingen med matchende loggin
    return false;
}

let brukere = [
    {
        "username":"jens",
        "password":"jens123"
    },
    {
        "username":"arne",
        "password":"arne234"
    }
];



let skjema = document.getElementById("skjema");
let inpUser = document.getElementById("inpUser");
let inpPassword = document.getElementById("inpPassword");

skjema.addEventListener("submit", loggInn);

// juks for testing
inpUser.value = "jens123";
inpPassword.value = "1234";