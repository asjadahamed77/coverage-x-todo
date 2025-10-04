# 📝 Full-Stack To-Do Application

A simple **full-stack To-Do application** built with React, Node.js, Express, and MySQL.
Users can **add tasks, view the latest 5 tasks, mark them as completed, and delete tasks**.

---

## 🚀 Features

* Add new tasks (title + description)
* Show only the **5 most recent tasks**
* Mark tasks as **Done** (completed tasks are hidden)
* Delete tasks
* Light/Dark mode toggle using **shadcn/ui**
* Backend REST API built with Express + MySQL
* **Fully containerized with Docker Compose**

---

## 🛠️ Tech Stack

* **Frontend:** React (Vite), Tailwind CSS, shadcn/ui, Axios
* **Backend:** Node.js, Express.js
* **Database:** MySQL
* **Other:** Docker, Docker Compose, `.env` for config

---

## 📂 Project Structure



## ⚙️ Environment Variables

### **Frontend (`client/.env`)**

```env
VITE_BASE_URL=http://localhost:4000/api
```

### **Backend (`server/.env`)**

```env
CLIENT_URL=http://localhost:5173
PORT=4000
DB_HOST=db
DB_PORT=3306
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=todo_app
```

> ⚠️ When running inside Docker, `DB_HOST` must be `db` (the service name in `docker-compose.yml`).

---

## 🐳 Run with Docker Compose

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/todo-app.git
   cd todo-app
   ```

2. Run the app with **one command**:

   ```bash
   docker-compose up --build
   ```

3. Open in your browser:

   * Frontend → [http://localhost:5173](http://localhost:5173)
   * Backend API → [http://localhost:4000/api](http://localhost:4000/api)
   * MySQL DB → `localhost:3306`

✅ That’s it — no need to install Node.js, MySQL, or run multiple servers manually.

---

## 🗃️ Database Schema

The MySQL container will create a `todo_app` database.
You need to create a **tasks** table:

```sql
CREATE TABLE task (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  description TEXT,
  completed BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

---

## ▶️ Run Without Docker (Optional)

If you want to run manually:

**Backend**

```bash
cd server
npm install
npm run server
```

**Frontend**

```bash
cd client
npm install
npm run dev
```

---

## ✅ Requirements Coverage

* [x] Add tasks (title + description)
* [x] Show latest 5 tasks
* [x] Mark tasks as done
* [x] Delete tasks
* [x] Dark/Light mode
* [x] Docker setup for one-step run

---

## 👨‍💻 Author

**Asjad Ahamed**
Full-Stack Developer

---
