const express = require('express');
const ProductsRoute = require('./routers/products.router');

const app = express();

app.get('/', (_request, response) => {
  response.send();
});

app.use('/products', ProductsRoute);

module.exports = app;