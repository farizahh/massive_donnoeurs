import express from 'express';
import { refreshToken } from '../controller/RefreshToken.js';
import { getUsers, isiformulir, Login, Logout, Me, Register, updateDataUsers } from '../controller/Users.js';

const router = express.Router();

router.get('/users', getUsers);
router.post('/register', Register);
router.post('/login', Login);
router.delete('/logout', Logout);
router.get('/token', refreshToken)
router.get('/me', Me)
router.patch('/updateusers', updateDataUsers)
router.patch('/updateusers', isiformulir)


export default router;
