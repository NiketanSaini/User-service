import * as http from 'http';
import * as serverHandlers from './serverHandler';
import server from './server';

// Create a new HTTP server using the Express application
const Server: http.Server = http.createServer(server);

// Start the server and listen on the configured port
Server.listen(server.get('port'));

// Handle server "error" event
Server.on('error', (error: Error) => serverHandlers.onError(error, server.get('port')));

// Handle server "listening" event, binding the context to the Server instance
Server.on('listening', serverHandlers.onListening.bind(Server));
