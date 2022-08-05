import express from 'express';
import 'express-async-errors';
import { json } from 'body-parser';
import { updateForm } from './routes/update';
import { showForm } from './routes/show';
import { newForm } from './routes/new';
import { deleteForm } from './routes/delete';
var cors = require('cors');
require('dotenv').config();

const app = express();
app.set('trust proxy', true);
app.use(json());
app.use(cors());

app.use(updateForm);
app.use(showForm);
app.use(newForm)
app.use(deleteForm);


export { app } ;