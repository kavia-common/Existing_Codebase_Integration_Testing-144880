import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import morgan from 'morgan';

// Load environment variables from .env if present
dotenv.config();

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(morgan(process.env.NODE_ENV === 'production' ? 'combined' : 'dev'));

// PUBLIC_INTERFACE
/**
 * Health check endpoint
 * Returns 200 OK to indicate the server is running.
 */
app.get('/health', (req, res) => {
  /** This endpoint confirms service health. */
  res.status(200).json({
    status: 'ok',
    uptime: process.uptime(),
    timestamp: new Date().toISOString()
  });
});

// PUBLIC_INTERFACE
/**
 * Root endpoint
 * Provides a simple welcome message for verification.
 */
app.get('/', (req, res) => {
  /** This endpoint returns a welcome message. */
  res.status(200).send('Existing_Codebase_Integration_Testing-144880 backend is running');
});

// Determine port from environment or default to 3001 to satisfy task requirements.
const PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 3001;

// Start the server and add basic error handling
try {
  app.listen(PORT, () => {
    // eslint-disable-next-line no-console
    console.log(`Express server listening on port ${PORT}`);
  });
} catch (err) {
  // eslint-disable-next-line no-console
  console.error('Failed to start server:', err);
  process.exit(1);
}

export default app;
