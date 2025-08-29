# Jupyter + JavaScript (Node.js) in Docker (macOS Sequoia 15.6) — Student Guide

This guide gets you from zero to running **Jupyter Notebook/Lab with a JavaScript (Node.js) kernel** using Docker on **macOS**.

* Image you’ll run: **`jensern/jupyter-ijs:1.0`**
* Login password: **`class`**
* Nothing else to install (Node, Python, etc. are inside the container)

---

## 0) Requirements

* **macOS Sequoia 15.6**
* Admin rights (to install Docker Desktop)
* \~3 GB free disk space
* An internet connection

---

## 1) Install Docker Desktop for Mac

1. Download **Docker Desktop for Mac**: [https://www.docker.com/products/docker-desktop/](https://www.docker.com/products/docker-desktop/)

   * Choose the correct download for your Mac (**Apple silicon** vs **Intel**).
2. Open the `.dmg`, drag **Docker.app** to **Applications**.
3. Launch **Docker.app**. Grant any prompts for permissions.
4. Wait until it says **Engine running** in the menu bar whale icon.

> If Docker asks for **file sharing** permission later, allow access to your project folder.

---

## 2) Verify Docker works

Open **Terminal** (Applications → Utilities → Terminal) and run:

```bash
docker --version
docker compose version
docker run hello-world
```

You should see messages confirming Docker is working.

---

## 3) (Optional) Pre-pull the class image

```bash
docker pull jensern/jupyter-ijs:1.0
```

> On Apple silicon, this image should run fine. If you ever hit a platform error, see the **Apple silicon note** in section 4B.

---

## 4) Run with Docker Compose (recommended)

### A) Create a project folder

```bash
mkdir -p ~/jupyter-class
cd ~/jupyter-class
```

### B) Create `compose.yaml`

Create the file in this folder:

```bash
cat > compose.yaml <<'YAML'
services:
  jupyter-ijs:
    image: jensern/jupyter-ijs:1.0
    ports:
      - "8888:8888"
    environment:
      JUPYTER_PASSWORD: class   # login using this password
      JUPYTER_TOKEN: ""         # disable token links
    command: start-notebook.sh --ServerApp.token=''  # force no token
    volumes:
      - ./:/home/jovyan/work    # your current folder is mounted into the container
    # --- Apple silicon note ---
    # If the container refuses to start on M1/M2/M3 Macs,
    # uncomment the next line to run the AMD64 image under emulation.
    # platform: linux/amd64
YAML
```

### C) Start Jupyter

```bash
docker compose up -d
```

Open your browser to **[http://127.0.0.1:8888](http://127.0.0.1:8888)**
**Password:** `class`

> If port 8888 is busy, change the line to `"8889:8888"` in `compose.yaml`, then `docker compose up -d` again.

### D) Create your first JavaScript notebook

1. In Jupyter, click **Launcher → JavaScript (Node.js)**.
2. Test cell:

```javascript
console.log("Node:", process.version);
1 + 2
```

> Your files are saved on **your Mac** in `~/jupyter-class` (the folder is mounted into the container).

### E) Stop / Start later

```bash
# stop and remove the container
docker compose down

# start again (in background)
docker compose up -d

# view logs (Ctrl+C to stop watching)
docker compose logs -f
```

---

## 5) (Alternative) Run without Compose

If you prefer a one-line command:

```bash
docker run -d --name jupyter-ijs \
  -p 8888:8888 \
  -e JUPYTER_PASSWORD=class -e JUPYTER_TOKEN= \
  -v "$PWD":/home/jovyan/work \
  jensern/jupyter-ijs:1.0 \
  start-notebook.sh --ServerApp.token=''
```

Open **[http://127.0.0.1:8888](http://127.0.0.1:8888)**, password **class**.

To stop:

```bash
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

**Option B — from the Mac Terminal**

```bash
cd ~/jupyter-class
npm init -y
npm install lodash
```

---

## 7) Updating to a new version (when told by the teacher)

```bash
cd ~/jupyter-class
docker compose pull
docker compose up -d
```

(If you used `docker run`, stop and re-run the same command.)

---

## 8) Troubleshooting (macOS)

### A) “Docker engine not running”

* Open **Docker.app** and wait for **Engine running**.
* From the whale menu → **Troubleshoot** → **Restart** if needed.
* Check in Terminal:

  ```bash
  docker info
  ```

### B) Browser asks for a token instead of password

We disable tokens via `--ServerApp.token=''`. If you still see token links, you’re likely using an old container:

```bash
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

```bash
docker compose up -d
```

### D) “JavaScript (Node.js)” kernel missing

It’s included. To check:

```bash
docker compose exec jupyter-ijs jupyter kernelspec list
```

You should see **javascript**. If not, recreate:

```bash
docker compose down
docker compose up -d --force-recreate
```

### E) “Permission denied” when accessing files

Make sure you’re working inside `~/jupyter-class` (inside your Home directory) so Docker Desktop has file-sharing permission.
If prompted by Docker, allow file access.

### F) Apple silicon startup issues

If the container won’t start on an M-series Mac, add:

```yaml
platform: linux/amd64
```

under the service in `compose.yaml`, then:

```bash
docker compose up -d --force-recreate
```

(Performance may be slightly slower under emulation.)

### G) Reset everything (safe; your files stay on your Mac)

```bash
docker compose down
docker image rm jensern/jupyter-ijs:1.0
docker compose up -d
```

---

## 9) Quick command cheatsheet (macOS)

```bash
# start in background
docker compose up -d

# stop & remove
docker compose down

# restart
docker compose restart

# see running containers
docker ps

# view logs (Ctrl+C to stop)
docker compose logs -f
```

---

### You’re done!

Open **[http://127.0.0.1:8888](http://127.0.0.1:8888)**, log in with **password `class`**, create a **JavaScript (Node.js)** notebook, and start coding.
