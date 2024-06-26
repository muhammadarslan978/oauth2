import express from 'express';

import { authenticateGoogle, googleCallback } from '../../lib/middleware/google-auth';
import { authenticateFacebook, facebookCallback } from '../../lib/middleware/facebook-auth';
import controller from './controller';

const router = express.Router();

router.get('/google', authenticateGoogle);
router.get('/google/callback', googleCallback);

router.get('/facebook', authenticateFacebook);
router.get('/facebook/callback', facebookCallback);

router.get('/profile', controller.profile);
router.get('/logout', controller.logout);

export default router;
