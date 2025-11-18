# **PostgreSQL + pgAdmin Installation Guide (Linux)**

*Step-by-step instructions to install PostgreSQL Server and pgAdmin on Ubuntu/Debian.*

---

## **1. Update system packages**

Open a terminal and run:

```bash
sudo apt update
sudo apt upgrade -y
```

---

## **2. Install PostgreSQL Server**

```bash
sudo apt install postgresql postgresql-contrib -y
```

This installs:

* PostgreSQL database server
* Command-line tools (psql)
* Common extensions

---

## **3. Verify that PostgreSQL is running**

```bash
sudo systemctl status postgresql
```

If it is not running:

```bash
sudo systemctl start postgresql
sudo systemctl enable postgresql
```

---

## **4. Set PostgreSQL superuser password (required for pgAdmin)**

Switch to the PostgreSQL admin user:

```bash
sudo -i -u postgres
psql
```

Inside the PostgreSQL console, set a password:

```sql
ALTER USER postgres PASSWORD 'yourpassword';
```

Exit:

```
\q
exit
```

---

## **5. Install pgAdmin 4**

### **5.1 Install required packages**

```bash
sudo apt install curl ca-certificates gnupg -y
```

### **5.2 Add pgAdmin repository key**

```bash
curl https://www.pgadmin.org/static/packages_pgadmin_org.pub | sudo gpg --dearmor -o /usr/share/keyrings/packages-pgadmin-org.gpg
```

### **5.3 Add pgAdmin apt source**

```bash
sudo sh -c 'echo "deb [signed-by=/usr/share/keyrings/packages-pgadmin-org.gpg] https://ftp.postgresql.org/pub/pgadmin/pgadmin4/apt/$(lsb_release -cs) pgadmin4 main" > /etc/apt/sources.list.d/pgadmin4.list'
```

### **5.4 Update package list**

```bash
sudo apt update
```

### **5.5 Install pgAdmin (desktop mode)**

```bash
sudo apt install pgadmin4-desktop -y
```

pgAdmin will appear in the application menu as **pgAdmin 4**.

---

## **6. Ensure PostgreSQL accepts local connections**

Open the configuration file:

```bash
sudo nano /etc/postgresql/*/main/postgresql.conf
```

Find the line:

```
listen_addresses = 'localhost'
```

Make sure it is not commented out.
Save and exit (Ctrl+O, Enter, Ctrl+X).

Restart PostgreSQL:

```bash
sudo systemctl restart postgresql
```

---

## **7. Connect to the server from pgAdmin**

1. Open **pgAdmin 4**.
2. When prompted, set a master password (this is **not** the PostgreSQL password).
3. In the left sidebar, right-click **Servers → Create → Server**.

### **General tab:**

* Name: `Local PostgreSQL`

### **Connection tab:**

* Host: `localhost`
* Port: `5432`
* Username: `postgres`
* Password: *(the one set earlier)*

Click **Save**.

---

## **8. Create a database**

Inside pgAdmin:

1. Expand **Servers → Local PostgreSQL**
2. Right-click **Databases → Create → Database**
3. Name it: `school`
4. Click **Save**

The database is now ready for tables and SQL queries.

---

## **9. Optional: Create a normal user**

If a separate user is needed:

Switch to postgres admin:

```bash
sudo -i -u postgres
psql
```

Create user:

```sql
CREATE USER student WITH PASSWORD 'student123';
ALTER USER student CREATEDB;
```

Exit:

```
\q
exit
```

The new user can now log in through pgAdmin as well.

---

## **Installation complete**

PostgreSQL Server and pgAdmin are ready to use.
You can now create databases, write SQL, and follow lessons or exercises.
