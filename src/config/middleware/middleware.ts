import compression from 'compression';
import express from 'express';
import { HttpError } from '../error/index';
import { sendHttpErrorModule } from '../error/sendHttpError';

/**
 * @export
 * @param {express.Application} app
 */
export function configure(app: express.Application): void {
    // returns the compression middleware
    app.use(compression());
    // custom errors
    app.use(sendHttpErrorModule);
    // cors
    app.use((req, res, next) => {
        next();
    });
}

interface CustomResponse extends express.Response {
    sendHttpError: (error: HttpError | Error, message?: string) => void;
}

/**
 * @export
 * @param {express.Application}` app
 */
export function initErrorHandler(app: express.Application): void {
    app.use((error: Error, _req: express.Request, res: CustomResponse, next: express.NextFunction) => {
        if (typeof error === 'number') {
            error = new HttpError(error); // next(404)
        }

        if (error instanceof HttpError) {
            res.sendHttpError(error);
        } else if (app.get('env') === 'development') {
            error = new HttpError(500, error.message);
            res.sendHttpError(error);
        } else {
            error = new HttpError(500);
            res.sendHttpError(error, error.message);
        }

        console.error(error);
        next();
    });
}
