import { Request, Response, NextFunction } from "express";

interface CustomError extends Error {
  status?: number;
}

const errorHandler = (
  err: CustomError,
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  console.log("Error Middleware");
  if (res.headersSent) {
    next(err);
    return;
  }

  res.status(err.status || 500).json({
    success: false,
    error: err.message || "Server Error",
    stack: process.env.NODE_ENV === "production" ? undefined : err.stack,
  });
};

export default errorHandler;
