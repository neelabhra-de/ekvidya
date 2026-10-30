import express from 'express';
import cors from 'cors';
import { healthRouter } from './routes/health.routes.js';
import { errorHandler } from './middleware/error.middleware.js';

export const app = express();
app.use(cors());
app.use(express.json());
app.get('/api', (_request, response) => response.json({ name: 'EKVIDYA API', status: 'ready' }));
app.use('/api/health', healthRouter);
app.use(errorHandler);
