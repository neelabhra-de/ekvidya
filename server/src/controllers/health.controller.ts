import type { Request, Response } from 'express';
import type { HealthResponse } from '../types/api.js';

export function getHealth(_request: Request, response: Response<HealthResponse>) {
  response.json({ service: 'ekvidya-server', status: 'ok', timestamp: new Date().toISOString() });
}
