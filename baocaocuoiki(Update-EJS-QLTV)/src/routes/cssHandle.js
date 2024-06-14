import express from 'express';
import { admin, adminborrows, adminusers, books, index, login, news, register, support } from '../controllers/cssHandle.js';
const router = express.Router()

router.get('/index', index);
router.get('/books', books);
router.get('/news', news);
router.get('/support', support);
router.get('/login', login);
router.get('/register', register);
router.get('/admin-users', adminusers);
router.get('/admin', admin);
router.get('/admin-borrows', adminborrows);

export default router;