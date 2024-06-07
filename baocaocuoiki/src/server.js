import express from 'express';
import { connect } from 'mongoose';
import dotenv from "dotenv";
// import Product from './models/product.js';
import router from './routes/index.js';
const app = express()
dotenv.config()
const PORTS = process.env.PORTS;
const URI_DBS = process.env.URI_DBS;

connect(URI_DBS);

app.use(express.json());

app.use("/api", router)

app.listen(PORTS, () => {
    console.log(`Server is running on port ${PORTS}`);
});