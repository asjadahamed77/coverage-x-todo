import helmet from "helmet";
import cors from "cors";
import rateLimit from "express-rate-limit";
import hpp from "hpp";
import express from "express";

// Custom sanitization middleware
const customSanitize = (req, res, next) => {
  const sanitizeObject = (obj) => {
    if (!obj || typeof obj !== "object") return obj;

    const sanitized = Array.isArray(obj) ? [] : {};
    for (const [key, value] of Object.entries(obj)) {
      if (key.startsWith("$")) continue;
      sanitized[key] =
        typeof value === "object" && value !== null
          ? sanitizeObject(value)
          : value;
    }
    return sanitized;
  };

  req.sanitizedQuery = sanitizeObject(req.query);
  req.sanitizedBody = sanitizeObject(req.body);

  next();
};

export const securityConfig = (app) => {
  app.use(
    cors({
      origin: process.env.CLIENT_URL || "http://localhost:5173",
      methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
      credentials: true,
    })
  );

  app.use(helmet());

  app.use(express.json());

  app.use(customSanitize);

  app.use(hpp());
};
