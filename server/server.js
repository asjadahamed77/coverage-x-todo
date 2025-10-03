import express from "express";
import cookieParser from "cookie-parser";
import "dotenv/config";
import pool from "./config/db.js";
import { securityConfig } from "./config/securityConfig.js";
import { errorHandler } from "./middlewares/errorHandler.js";



const app = express();
const port = process.env.PORT || 4000;

app.use(cookieParser());
app.use(express.json()); 

securityConfig(app);
app.use(cookieParser());
// Routes
app.get("/", (req, res) => {
  res.send("API WORKING...");
});

// Error handler
app.use(errorHandler);



app.use((err, req, res, next) => {
  console.error("Error:", err.message);
  res.status(500).json({ error: "Something went wrong" });
});

// DB + Server
(async () => {
  try {
 
    const conn = await pool.getConnection();
    await conn.ping();
    conn.release();
    console.log("Connected to Database");

    app.listen(port, () =>
      console.log(`🚀 Server running on http://localhost:${port}`)
    );
  } catch (error) {
    console.error("DB connection failed:", error.message);
    process.exit(1);
  }
})();
