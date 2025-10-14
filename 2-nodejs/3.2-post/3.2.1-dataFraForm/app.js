import express from "express";
const app = express();
const port = 3000;

// Viser frem index.html i public mappa
// når du går til localhost:3000 (app.get("/"))
app.use(express.static("public"));
// lar oss bruke req.body til å lese fra form
// f.eks. req.body.email leser feltet med name=email
app.use(express.urlencoded({ extended: true }));
app.post("/registrer", (req, res) => {
    console.log(req.body);
    console.log(req.body.email);  // bare email
    console.log(req.body.pw);
    let email = req.body.email;
    // Gi tilbakemelding
    let txt = `Du ble registrert med e-post ${email}`;
    res.send(txt);
});

app.listen(port, () => {
  console.log(`Server running on port http://localhost:${port}.`);
});


