import express from "express";
// starte local server på port 3000
const app = express();
const port = 3000;

app.listen(port, () => {
console.log(`Server running on port ${port}.`)
});