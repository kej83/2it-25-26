# Troubleshoot docker mac

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