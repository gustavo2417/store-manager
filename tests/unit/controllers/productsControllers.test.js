const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

const { expect } = chai;
chai.use(sinonChai);

const productsService = require('../../../src/services/products.service');
const productsController = require('../../../src/controllers/products.controller');

const { products } = require('./mocks/products.controllers.mock');

describe('testando a camada controller de products', function () {
  afterEach(sinon.restore);

  it('testando se todos os produtos são retornados', async function () {
    const res = {};
    const req = {};

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    sinon
      .stub(productsService, 'findAll')
      .resolves({ type: null, message: products });

    await productsController.getAllProducts(req, res);

    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(products);
  });

  it('testando se um produto específico é retornado', async function () {
    const res = {};
    const req = {
      params: { id: 1 },
    };

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    sinon
      .stub(productsService, 'findById')
      .resolves({ type: null, message: products[0] });

    await productsController.getByProductID(req, res);

    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(products[0]);
  });

  it('testando se quando passado um valor invalido retorna a mensagem esperada', async function () {
    const res = {};
    const req = {
      params: { id: 100 },
    };

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    sinon
      .stub(productsService, 'findById')
      .resolves({ type: 'PRODUCT_NOT_FOUND', message: 'Product not found' });

    await productsController.getByProductID(req, res);

    expect(res.status).to.have.been.calledWith(404);
    expect(res.json).to.have.been.calledWith({ message: 'Product not found' });
  });

  it('testando se um produto específico é retornado pelo nome', async function () {
    const res = {};
    const req = {
      query: { q: 'Martelo' },
    };

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    sinon
      .stub(productsService, 'getByName')
      .resolves({ type: null, message: products[0] });

    await productsController.findByName(req, res);

    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(products[0]);
  });
});