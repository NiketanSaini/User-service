import { Request, Response, NextFunction } from 'express';

/**
 * Error handler middleware to handle server-side errors.
 * Logs the error to the console and responds with a 500 Internal Server Error status.
 * 
 * @param {any} err - The error object
 * @param {Request} req - The request object
 * @param {Response} res - The response object
 * @param {NextFunction} next - The next middleware function
 */
export const errorHandler = (err: any, req: Request, res: Response, next: NextFunction) => {
  console.error(err);
  res.status(500).json({ message: "Internal Server Error" });
};

/**
 * Client error handler middleware to handle client-side errors.
 * If the error object has a `status` property, responds with that status and the error message.
 * Otherwise, passes the error to the next middleware function.
 * 
 * @param {any} err - The error object
 * @param {Request} req - The request object
 * @param {Response} res - The response object
 * @param {NextFunction} next - The next middleware function
 */
export const clientErrorHandler = (err: any, req: Request, res: Response, next: NextFunction) => {
  if (err.hasOwnProperty('status')) {
    res.status(err.status).json({ message: err.message });
  } else {
    next(err);
  }
};
