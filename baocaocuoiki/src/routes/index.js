import express from 'express';
import productRouter from './product.js';
import routerAuth from './auth.js';
import routerImages from './upload.js';

const router = express.Router();

router.use('/product', productRouter);
router.use('/auth', routerAuth);
router.use('/image', routerImages);

export default router;
