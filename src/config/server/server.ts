import express from 'express';
import { configure } from '../middleware/middleware';
import config from '../env/index';

// Create a new instance of an Express application
const app: express.Application = express();

// Set the port on which the server will listen
app.set('port', config.PORT);

// Configure the application with middleware and error handling
configure(app);

// Export the configured Express application
export default app;
