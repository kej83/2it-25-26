import express from "express";

const app = express();
const PORT = 3000;

// for å lese form-data
app.use(express.urlencoded({ extended: true }));


app.get("/", (req, res) => {
   
});

app.listen(PORT, () => {
  console.log("webblogg kjører på http://localhost:" + PORT);
});