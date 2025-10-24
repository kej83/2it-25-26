import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
    let frukt = "eple";
    let data = {
        minFrukt:frukt,
        venner:["jens","per","ea"],
        lydfiler: ["koko.wav","yo.mp3","mornajens.wav","donald.mp3"]
    }
    // HINT:
    console.log("koko.mp3".split(".")[0])
    console.log("koko.mp3".split(".")[1])
    res.render("index.ejs", data);
});

app.listen(port, () => {
  console.log(`Server running on port http://localhost:${port}.`);
});


