# ⚔️ Oppdrag: KNAPPE-KRIGEN (Multiplayer)

**Tid:** 45 minutter
**Tema:** Node.js, Socket.io, HTML/CSS og sanntidslogikk.

I dette spillet skal hele klassen kjempe mot hverandre i sanntid. To lag, **Rød** og **Blå**, prøver å dytte en skillelinje over til motstanderens side. Men vær forsiktig: Dette er ikke et "clicker"-spill der man kan hamre løs. Her kreves det timing!

---

## 🛠️ Del 1: Oppsett (5 min)

1. Opprett en ny mappe: `knappe-krig`.
2. Åpne terminalen i mappen og kjør:
```bash
npm init -y
npm install express socket.io

```


3. Lag en fil som heter `server.js`.
4. Lag en mappe som heter `public`, og inni den lager du `index.html`.

---

## 🖥️ Del 2: Server-logikk (`server.js`)

Kopier inn denne koden. Legg merke til hvordan serveren fungerer som "dommer" og holder styr på cooldowns for å hindre juks.

```javascript
const express = require('express');
const http = require('http');
const { Server } = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.use(express.static('public'));

let balance = 0; // 0 er midten
const playerCooldowns = new Set(); 

io.on('connection', (socket) => {
    socket.emit('update', balance);

    socket.on('click', (team) => {
        // SJEKK: Er spilleren i pause-modus?
        if (playerCooldowns.has(socket.id)) {
            // STRAFF: Hjelp motstanderen!
            team === 'red' ? balance++ : balance--;
            io.emit('update', balance);
            socket.emit('penalty'); 
            return;
        }

        // POENG: Flytt linjen
        team === 'red' ? balance-- : balance++;
        
        // AKTIVER PAUSE: 0.5 til 3 sekunder
        playerCooldowns.add(socket.id);
        const randomPause = Math.floor(Math.random() * 2500) + 500;
        
        setTimeout(() => {
            playerCooldowns.delete(socket.id);
            socket.emit('ready');
        }, randomPause);

        io.emit('update', balance);
    });

    socket.on('disconnect', () => playerCooldowns.delete(socket.id));
});

server.listen(3000, () => console.log('Kjører på http://localhost:3000'));

```

---

## 🎨 Del 3: Frontend (`public/index.html`)

Dette er ansiktet utad. Her bruker vi CSS-overganger for å gjøre bevegelsene myke.

```html
<!DOCTYPE html>
<html>
<head>
    <title>Knappe-krigen</title>
    <style>
        body { display: flex; flex-direction: column; align-items: center; font-family: 'Arial', sans-serif; background: #eee; transition: background 0.2s; }
        #game-bar { width: 80%; height: 60px; background: #333; position: relative; border: 5px solid #222; margin: 20px; border-radius: 10px; overflow: hidden; }
        #divider { width: 8px; height: 100%; background: gold; position: absolute; left: 50%; transition: 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275); z-index: 10; }
        .red-side { background: #ff4d4d; height: 100%; width: 50%; position: absolute; left: 0; }
        .blue-side { background: #4d79ff; height: 100%; width: 50%; position: absolute; right: 0; }
        button { padding: 25px 50px; font-size: 24px; cursor: pointer; color: white; border: none; border-radius: 10px; margin: 10px; transition: 0.2s; }
        button:disabled { background: #666 !important; transform: scale(0.9); opacity: 0.7; }
        .btn-red { background: #d00; }
        .btn-blue { background: #00d; }
        #status { font-size: 20px; font-weight: bold; margin: 10px; height: 30px; }
        .penalty-flash { background: #f00 !important; }
    </style>
</head>
<body>
    <h1>⚔️ KNAPPE-KRIGEN ⚔️</h1>
    <div id="status">Klar til kamp!</div>
    <div id="game-bar">
        <div class="red-side"></div><div class="blue-side"></div>
        <div id="divider"></div>
    </div>
    <div>
        <button id="red-btn" class="btn-red" onclick="send('red')">RØD</button>
        <button id="blue-btn" class="btn-blue" onclick="send('blue')">BLÅ</button>
    </div>

    <script src="/socket.io/socket.io.js"></script>
    <script>
        const socket = io();
        const redBtn = document.getElementById('red-btn');
        const blueBtn = document.getElementById('blue-btn');
        const status = document.getElementById('status');
        const divider = document.getElementById('divider');

        function send(team) {
            socket.emit('click', team);
            redBtn.disabled = true; blueBtn.disabled = true;
            status.innerText = "Lader opp...";
        }

        socket.on('update', (bal) => {
            let pos = 50 + (bal * 3); // 3% per klikk
            divider.style.left = Math.max(0, Math.min(100, pos)) + '%';
        });

        socket.on('ready', () => {
            redBtn.disabled = false; blueBtn.disabled = false;
            status.innerText = "TRYKK NÅ!";
            status.style.color = "green";
        });

        socket.on('penalty', () => {
            status.innerText = "FOR RASK! Du hjalp fienden!";
            status.style.color = "red";
            document.body.classList.add('penalty-flash');
            setTimeout(() => document.body.classList.remove('penalty-flash'), 300);
        });
    </script>
</body>
</html>

```

---

## 🏆 Del 4: Bonusoppgaver (Velg selv!)

Hvis du blir ferdig før tiden, prøv å implementere disse funksjonene:

1. **Vinner-logikk:** Lag en sjekk på serveren. Hvis `balance` når +/- 15, send ut en `game_over`-melding til alle med navnet på vinnerlaget og reset spillet.
2. **Spiller-telling:** Vis på skjermen hvor mange spillere som er koblet til akkurat nå (bruk `io.engine.clientsCount`).
3. **Visuell "Juice":** Bruk CSS-animasjoner (`keyframes`) til å få knappen til å riste eller "pulse" når den blir klar for et nytt trykk.
4. **Lydeffekter:** Legg til en kort "klikk"-lyd ved trykk, og en "buzz"-lyd når man får straff (Bruk `new Audio('fil.mp3').play()`).
5. **Lag-balansering:** Når en spiller kobler til, tildel dem automatisk et lag (Rød eller Blå) slik at de bare ser og kan trykke på sin egen knapp.

---

### Slik tester du:

1. Kjør `node server.js` i terminalen.
2. Åpne `http://localhost:3000` i flere faner (eller be naboen gå inn på din IP-adresse).
3. **Krig!**

Lykke til! Hvem dytter linjen ut av skjermen først?
