import express from 'express';
import productRouter from './product.js';
import routerAuth from './auth.js';
import routerCss from './cssHandle.js'
import routerBorrow from "./borrow.js";
import routerUser from './user.js';


const router = express.Router();

router.use('/product', productRouter);
router.use('/auth', routerAuth);
router.use('/cssHandle', routerCss);
router.use("/borrow", routerBorrow);
router.use("/user", routerUser);

export default router;
