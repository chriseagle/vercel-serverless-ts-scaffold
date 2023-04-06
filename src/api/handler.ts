import type { VercelRequest, VercelResponse } from '@vercel/node';
import { Foobar } from '../services/foobar.js';

export default function handler(
  request: VercelRequest,
  response: VercelResponse
) {
  response.status(200).json({
    body: request.body,
    query: request.query,
    cookies: request.cookies,
    foobar: Foobar('uppercase')
  });
}
