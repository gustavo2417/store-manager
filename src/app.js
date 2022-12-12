const express = require('express');
const productsRoute = require('./routers/products.router');
const salesRouter = require('./routers/sales.router');

const app = express();
app.use(express.json());

app.get('/', (_request, response) => {
  response.send();
});

app.use('/products', productsRoute);
app.use('/sales', salesRouter);

module.exports = app;