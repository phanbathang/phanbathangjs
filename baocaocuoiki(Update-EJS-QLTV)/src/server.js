import express from 'express';
import { connect } from 'mongoose';
import dotenv from "dotenv";
import router from './routes/index.js'
import methodOverride from 'method-override';
import bodyParser from 'body-parser';

const app = express()
dotenv.config()
const PORTS = process.env.PORTS;
const URI_DBS = process.env.URI_DBS;

app.use(express.static('src/public'));

app.set('view engine', 'ejs');

app.set('views', './src/views');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(methodOverride('_method'));

connect(URI_DBS);

app.use(express.json());

app.use("/api", router)


app.listen(PORTS, () => {
    console.log(`Server is running on port ${PORTS}`);
});