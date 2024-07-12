import compression from 'compression';
import express from 'express';
import { clientErrorHandler, errorHandler } from '../error/index';

/**
 * Configures the express application with necessary middleware.
 * 
 * @export
 * @param {express.Application} app - The express application instance
 */
export function configure(app: express.Application): void {
    // Middleware to handle 404 Not Found errors
    app.use(notFoundMiddleware);

    // Custom logger middleware to log HTTP requests
    app.use(loggerMiddleware);

    // Compression middleware to gzip response bodies for all requests
    app.use(compression());

    // Middleware to handle client-side errors
    app.use(clientErrorHandler);

    // Middleware to handle server-side errors
    app.use(errorHandler);

    // Middleware to handle CORS (Cross-Origin Resource Sharing)
    app.use((req, res, next) => {
        next();
    });
}

/**
 * Logger middleware to log the HTTP method and path of each request.
 * 
 * @param {express.Request} req - The request object
 * @param {express.Response} res - The response object
 * @param {express.NextFunction} next - The next middleware function
 */
const loggerMiddleware = (req: express.Request, res: express.Response, next: express.NextFunction) => {
    console.log(`${req.method} ${req.path}`);
    next();
};

/**
 * Middleware to handle 404 Not Found errors.
 * Responds with a JSON message when no route matches the request.
 * 
 * @param {express.Request} req - The request object
 * @param {express.Response} res - The response object
 * @param {express.NextFunction} next - The next middleware function
 */
const notFoundMiddleware = (req: express.Request, res: express.Response, next: express.NextFunction) => {
    res.status(404).json({ message: "Not Found" });
};
