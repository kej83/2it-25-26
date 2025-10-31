import express from "express";

const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.render("index.ejs")
});

app.post("/submit", (req, res) => {
    // 1. Lese fornavn og etternavn fra skjemaet.
    let fornavn = req.body.fName;  // req.body["fName"]
    let etternavn = req.body.lName;
    // 2. Regne ut antall bokstaver til sammen
    let antall = fornavn.length + etternavn.length;
    // 3. sende tilbake med antallBokstaver som data
    let data = {
      antallBokstaver : antall
    };
    res.render("index.ejs", data);
});

app.listen(port, () => {
  console.log(`Server running on port http://localhost:${port}`);
});
