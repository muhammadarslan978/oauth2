import express from 'express';
import AuthRouter from './oauth2/router';

const router = express.Router();

router.use('/auth', AuthRouter);

export default router;
