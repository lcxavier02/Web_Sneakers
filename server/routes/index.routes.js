import { Router } from 'express';
import { Login, Register } from '../handlers/Login.js';

const router = Router();

router.post('/login', Login);

router.put('/register', Register);

export default router;