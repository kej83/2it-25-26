import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send("Du fant servern!");
});

app.get("/home", (req, res) => {
    let html = `<h1>Velkommen til min hjemmeside</h1>
    <p>Tilgjengelig ruter:</p>
    <ul>
    <li>/navn : denne viser ditt fulle navn</li>
    <li>/hobbier : dine hobbier</li>
    <li>/bosted : hvor du bor</li>
    <li>/lenker : 3 lenker til dine favorittnettsteder</li>
    </ul>`;
    res.send(html);
});

app.listen(port, () => {
  console.log(`Server running on port http://localhost:${port}.`);
});
