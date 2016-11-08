const express = require('express');
const webRoutes = require('./routes/web');

const app = express();

app.use('/', webRoutes);

module.exports = app;
