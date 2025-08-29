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

