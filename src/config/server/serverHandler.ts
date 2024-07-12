import debug from 'debug';
import * as http from 'http';

/**
 * Error handler function for HTTP server "error" event.
 * Handles specific listen errors with friendly messages.
 * 
 * @param {NodeJS.ErrnoException} error - The error object
 * @param {number|string|boolean} port - The port on which the server is attempting to listen
 * @returns {void}
 */
export function onError(error: NodeJS.ErrnoException, port: number | string | boolean): void {
    if (error.syscall !== 'listen') {
        throw error;
    }

    // Define the binding type based on whether the port is a string or number
    const bind: string = (typeof port === 'string') ? `Pipe ${port}` : `Port ${port}`;

    // Handle specific listen errors with custom messages
    switch (error.code) {
        case 'EACCES':
            console.error(`${bind} requires elevated privileges`);
            process.exit(1); // Exit the process with failure code
            break;
        case 'EADDRINUSE':
            console.error(`${bind} is already in use`);
            process.exit(1); // Exit the process with failure code
            break;
        default:
            throw error;
    }
}

/**
 * Event listener for HTTP server "listening" event.
 * Logs a message indicating that the server is listening.
 * 
 * @this http.Server - The HTTP server instance
 * @returns {void}
 */
export function onListening(this: http.Server): void {
    const addr: any = this.address();
    const bind: string = (typeof addr === 'string') ? `pipe ${addr}` : `port ${addr.port}`;

    // Use debug module to log the listening message
    debug(`Listening on ${bind}`);
}
