import express from "express";
const app = express();
const port = 3000;

function summer(tallA, tallB) {
    return tallA + tallB;
}
// TODO: fiks /minus, /gange og /dele  på samme måte!
app.get("/sum", (req, res) => {
    // localhost:3000?a=4&b=5
    const a = Number(req.query.a);
    const b = Number(req.query.b);
    const summ = summer(a, b);

    let html = `<h1>${a} + ${b} = ${summ}</h1>`;
    res.send(html);
});
app.get("/", (req, res) => {
    // localhost:3000?name=jens&age=18
    res.send("Du fant servern!");
});

app.listen(port, () => {
  console.log(`Server running on port http://localhost:${port}.`);
});
