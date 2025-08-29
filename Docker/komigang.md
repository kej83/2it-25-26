# Jupyter + JavaScript (Node.js) in Docker (Windows 11) — Student Guide

This guide gets you from zero to running **Jupyter Notebook/Lab with a JavaScript (Node.js) kernel** using Docker on Windows 11.

* Image you’ll run: **`jensern/jupyter-ijs:1.0`**
* Login password: **`class`**
* Nothing else to install (Node, Python, etc. are inside the container)

---

## 0) Requirements

* Windows 11 with **hardware virtualization** enabled (most PCs already have this).
* **Admin** rights (to install Docker Desktop).
* \~3 GB free disk space.

---

## 1) Install Docker Desktop (WSL2 backend)

1. Download **Docker Desktop for Windows**: [https://www.docker.com/products/docker-desktop/](https://www.docker.com/products/docker-desktop/)
2. Run the installer. **Keep “Use WSL 2 instead of Hyper-V” checked.**
3. When installation finishes, **restart your PC** if prompted.
4. Open **Docker Desktop** and wait until it says **Engine running**.

> If WSL isn’t installed, open **PowerShell (Admin)** and run:
>
> ```powershell
> wsl --install
> wsl --update
> ```

---

## 2) Verify Docker works

Open **PowerShell** and run:

```powershell
docker --version
docker compose version
docker run hello-world
```

You should see messages showing Docker is working.

---

## 3) Get the class image (optional pre-pull)

```powershell
docker pull jensern/jupyter-ijs:1.0
```

---

## 4) Run with Docker Compose (recommended)

### A) Create a project folder

```powershell
mkdir jupyter-class
cd jupyter-class
```

### B) Create `compose.yaml`

Create a file named **`compose.yaml`** in this folder with the following content:

```yaml
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
```

### C) Start Jupyter

```powershell
docker compose up -d
```

Open your browser to **[http://127.0.0.1:8888](http://127.0.0.1:8888)**
**Password:** `class`

> If port 8888 is busy, change the line to `"8889:8888"` and start again.



