import express from "express";

const app = express();
const PORT = 3000;

let blogs = [
    {
        tittel:"Min første skoledag",
        forfatter:"Jens Stoltenberg",
        innhold:`Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat voluptatibus dolor sequi tenetur, asperiores sed? Sed rerum tempora magnam, reprehenderit incidunt, quam, ipsa numquam quas dolore necessitatibus ullam nihil. Deserunt.`
    },
    {
        tittel:"Å være kvinnelig murer",
        forfatter:"Sara Sørensen",
        innhold:`Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat voluptatibus dolor sequi tenetur, asperiores sed? Sed rerum tempora magnam, reprehenderit incidunt, quam, ipsa numquam quas dolore necessitatibus ullam nihil. Deserunt.`
    }
]
// for å lese form-data
app.use(express.urlencoded({ extended: true }));


app.get("/", (req, res) => {
   res.render("index.ejs", {blogs});
});

app.listen(PORT, () => {
  console.log("webblogg kjører på http://localhost:" + PORT);
});