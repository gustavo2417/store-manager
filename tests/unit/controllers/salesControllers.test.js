const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

const { expect } = chai;
chai.use(sinonChai);

const saleService = require('../../../src/services/sales.service');
const saleController = require('../../../src/controllers/sales.controller');

const { sales } = require('./mocks/sale.controllers.mock');

describe('testando a camada controller de products', function () {
  afterEach(sinon.restore);

  it('testando se todos os produtos são retornados', async function () {
    const res = {};
    const req = {};

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    sinon
      .stub(saleService, 'findAll')
      .resolves({ type: null, message: sales });

    await saleController.getSales(req, res);

    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(sales);
  });
});