import express from "express";

const app = express();
const PORT = 3090;

const produkter = [
    {id: 1, navn: "keyboard", pris:249},
    {id: 2, navn: "mus", pris:399},
    {id: 3, navn: "Nvidia gtx 5090 32GB", pris: 32000}
];

app.get("/", (req, res) => {
    res.send("<h1>Velkommen til Pers produkter</h1>"); 
})

app.get('/produkter', (req, res) => { 
    let txt = "<h2>Produkter</h2><ul>";
    for (let produkt of produkter) {
        console.log(produkt.navn);
    }
});

// Hjelpefunksjon
// finner produkt fra id
// GJØR FERDIG DENNE FUNKSJONEN
function giProdukt(id) {
    // Oppgave: søk i objektarrayet, hvis id finnes, returner objektet. Hvis ikke, returner null
    for (let i=0; todo; i++) {
        // Sjekk om objektet har id, hvis ja, returner objektet.
    }
    // HVIS ingen ble funnet, returner null
}
// Dynamisk rute
app.get('/produkter/:id', (req, res) => { 
   // Skrive ut navn til produktet med id som er gitt
   let id = req.params.id;
   console.log(req.params.id);
   res.send(req.params.id);
   // req.params - fra url/ruta
   // req.body - lese skjemadata fra form

   let produkt = giProdukt(id);
   if(produkt == null) {
    res.send("produkt ikke funnet");
    return;
   }
   let navn = produkt.navn;
   
   res.send(`<h2>id ${id} er ${navn}</h2>`);
});




app.listen(PORT, () => {
  console.log(`Server kjører på http://localhost:${PORT}`);
});
