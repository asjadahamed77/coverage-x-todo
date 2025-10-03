import pool from "../config/db.js";

// Get latest 5 incomplete tasks
export const getTasks = async (req, res) => {
  try {
    const [rows] = await pool.query(
      "SELECT id, title, description, completed, created_at FROM task WHERE completed = FALSE ORDER BY created_at DESC LIMIT 5"
    );
    res.json(rows);
  } catch (err) {
    console.error("Error fetching tasks:", err.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Add a new task
export const addTask = async (req, res) => {
  try {
    const { title, description } = req.body;

    if (!title || title.trim() === "") {
      return res.status(400).json({ error: "Title is required" });
    }

    const [result] = await pool.query(
      "INSERT INTO task (title, description) VALUES (?, ?)",
      [title, description || null]
    );

    res.status(201).json({
      id: result.insertId,
      title,
      description: description || null,
      completed: false,
    });
  } catch (err) {
    console.error("Error adding task:", err.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Mark task as done
export const markDone = async (req, res) => {
  try {
    const { id } = req.params;

    const [result] = await pool.query(
      "UPDATE task SET completed = TRUE WHERE id = ?",
      [id]
    );

    if (result.affectedRows === 0) {
      return res.status(404).json({ error: "Task not found" });
    }

    res.status(200).json({ message: "Task marked as completed" });
  } catch (err) {
    console.error("Error updating task:", err.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Delete task
export const deleteTask = async (req, res) => {
  try {
    const { id } = req.params;

    const [result] = await pool.query(
      "DELETE FROM task WHERE id = ?",
      [id]
    );

    if (result.affectedRows === 0) {
      return res.status(404).json({ error: "Task not found" });
    }

    res.status(200).json({ message: "Task deleted successfully" });
  } catch (err) {
    console.error("Error deleting task:", err.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
