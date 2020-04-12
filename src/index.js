require('dotenv').config();

const express = require('express');
const morgan = require('morgan');
const path = require('path');
const cors = require('cors');

const mongoConnect = require('./database/index');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan());
app.use('/files', express.static(path.resolve(__dirname, '..', 'tmp', 'uploads')))
app.use(cors());

app.use(require('./routes'))

app.listen(3000);