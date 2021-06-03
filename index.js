const express = require('express');
const apiV1 = require('./api/v1/index');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api/v1', apiV1);
app.listen(8080)
module.exports = app