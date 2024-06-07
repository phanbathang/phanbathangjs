import { Router } from 'express';
import express from 'express';
import { addUser, getAllUsers, getDetailUsers, removeUsers, signIn, signUp } from '../controllers/auth.js';

const routerAuth = express.Router()

routerAuth.post('/signup', signUp);
routerAuth.post('/signin', signIn);
routerAuth.post('/addUser', addUser);
routerAuth.get('/getUser', getAllUsers);
routerAuth.get('/:id', getDetailUsers);
routerAuth.delete('/:id', removeUsers);

export default routerAuth;