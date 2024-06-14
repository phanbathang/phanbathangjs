import { Router } from 'express';
import express from 'express';
import { home, news, support, userBook } from '../controllers/user.js';

const routerUser = express.Router()

routerUser.get('/home', home);
routerUser.get('/userBook', userBook);
routerUser.get('/news', news);
routerUser.get('/support', support);

export default routerUser;