import express from "express";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT;
// For å lese data fra skjema (form)
app.use(express.urlencoded({ extended:true }));
// Koden som blir sendt til e-post
let loginCode; 

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

// Hjelpefunksjon for å lage en 6-sifret kode 100000-999999
function generateCode() {
    return Math.floor(100000 + Math.random()*900000);
}

// Hovedsiden
app.get("/", (req, res) => {
    res.render("index.ejs");
});

app.post("/verify-code", (req, res) => {
    // TODO: verify code and send user to success.ejs for successful login!
})
// /send-code post
app.post("/send-code", async (req, res) => {
    // 1. Lage koden
    loginCode = generateCode();
    // 2. Sende koden på e-post
    const email = req.body.email;

    try {
        await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: email,
            subject: "Din innloggingskode",
            text: `Din kode er ${loginCode}.`
            }
        );

        res.render("verify", {email});
    } catch(err) {
        console.error("Feil ved sending av e-post:", err);
        res.render("index.ejs", {error: "feil med e-post sending."})
    }
});

app.listen(PORT, () => {
  console.log(`Server kjører på http://localhost:${PORT}`);
});
