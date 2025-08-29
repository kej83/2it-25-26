# Some troubleshooting docker
### E) Stop / Start later

```powershell
# stop and remove the container
docker compose down

# start again (in background)
docker compose up -d

# view logs
docker compose logs -f
```

---

## 5) (Alternative) Run without Compose

If you prefer a one-line command:

**PowerShell**

```powershell
docker run -d --name jupyter-ijs `
  -p 8888:8888 `
  -e JUPYTER_PASSWORD=class -e JUPYTER_TOKEN= `
  -v ${PWD}:/home/jovyan/work `
  jensern/jupyter-ijs:1.0 `
  start-notebook.sh --ServerApp.token=''
```

Open **[http://127.0.0.1:8888](http://127.0.0.1:8888)**, password **class**.

To stop:

```powershell
docker rm -f jupyter-ijs
```

---

## 6) Installing npm packages for your notebook

Packages should live **next to your notebook** in your project folder.

**Option A — from Jupyter’s Terminal**

1. In Jupyter, **File → New → Terminal**.
2. Run:

   ```bash
   cd work
   npm init -y
   npm install lodash
   ```
3. In a JS notebook cell:

   ```javascript
   const _ = require("lodash");
   _.chunk([1,2,3,4,5], 2);
   ```

**Option B — from PowerShell on Windows**

```powershell
cd jupyter-class
npm init -y
npm install lodash
```

---

## 7) Updating to a new version (when told by the teacher)

```powershell
cd jupyter-class
docker compose pull
docker compose up -d
```

(Or if you used `docker run`, stop and re-run with the same command.)

---

## 8) Troubleshooting

### A) “Docker engine not running” / WSL errors

* Open **Docker Desktop** and wait for **Engine running**.
* In PowerShell (Admin):

  ```powershell
  wsl --update
  wsl --shutdown
  ```
* Docker Desktop → **Settings → General**: ensure **Use WSL 2 based engine** is checked.
  **Settings → Resources → WSL Integration**: enable your default distro.

### B) Browser asks for a token instead of password

We disable tokens via `command: start-notebook.sh --ServerApp.token=''`.
If you still see token links, you’re likely on an old container:

```powershell
docker compose down
docker compose up -d --force-recreate
```

### C) Port already in use

Edit `compose.yaml`:

```yaml
ports:
  - "8889:8888"
```

Then:

```powershell
docker compose up -d
```

### D) “JavaScript (Node.js)” kernel missing

It’s included in the image. To double-check:

```powershell
docker compose exec jupyter-ijs jupyter kernelspec list
```

You should see **javascript**. If not, recreate the container:

```powershell
docker compose down
docker compose up -d --force-recreate
```

### E) Reset everything (safe; your files stay on Windows)

```powershell
docker compose down
docker image rm jensern/jupyter-ijs:1.0
docker compose up -d
```

---

## 9) Quick command cheatsheet

```powershell
# start in background
docker compose up -d

# stop & remove
docker compose down

# restart
docker compose restart

# see running containers
docker ps

# view logs (Ctrl+C to stop watching)
docker compose logs -f
```

---

### You’re done!

Open **[http://127.0.0.1:8888](http://127.0.0.1:8888)**, log in with **password `class`**, create a **JavaScript (Node.js)** notebook, and start coding.