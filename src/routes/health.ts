import { Router, Request, Response } from 'express';

const router = Router();

router.get('/', (req: Request, res: Response) => {
  res.status(200).json({
    project: 'Super Mine Dive API',
    status: 'online',
    timestamp: new Date().toISOString(),
    version: '0.0.1'
  });
});

export default router;