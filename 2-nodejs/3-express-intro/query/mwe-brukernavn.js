import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    // localhost:3000?name=jens&age=18
    console.log(req.query);
    console.log(req.query.name);
    res.send("Du fant servern!");
});
// TODO 1: lag personlig hilsen. hvis
// brukeren skriver localhost:3000/hilsen?name=jens skal han få teksten "Morna Jens!" på nettsiden. bruk res.send(...)
app.get("/hilsen", (req, res) => {
   const navn = req.query.name;
   const html = `<h1>Hei, ${navn}. </h1>`
   res.send(html);
});


// TODO 2: lag innlogging. riktig brukernavn og passord er arne og arne123. Brukeren blir vist en ny nettside med tilbakemelding på innloggingen. 
app.get("/login", (req, res) => {
    // localhost:3000/login?user=arne&pw=arne123
   const user = req.query.user;
   const pw = req.query.pw;
   const correctUser = "arne";
   const correctPw = "arne123";
   let html = "<h1>Login resultat</h1>";
   if (user === correctUser && pw === correctPw) {
    html += "<p>Du er logget inn!</p>";
   } else{
    html += "<p>feil bruker/password</p>";
   }
   res.send(html);
});

app.listen(port, () => {
  console.log(`Server running on port http://localhost:${port}.`);
});
