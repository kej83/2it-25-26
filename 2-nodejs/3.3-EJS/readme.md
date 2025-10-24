# EJS
Embedded JavaScript

## Oppsett
Skriv følgende for å sette opp prosjektet.

1. Initialiser prosjektet
```bash
npm init -y
```
2. Installere pakker
```bash
npm i express ejs nodemon
```
3. Åpne `package.json` og legg til følgende under main:
```json
"type": "module",
```
Under `scripts`legg til på siste linje :
```json
"start": "npx nodemon app.js"
```

4. Lag filen `app.js`.
5. Lag mappa `views` og filen `index.ejs` inni views-mappa.
6. Lag `.gitignore` på rotnivå og legg til lija `node_modules/` inni fila.