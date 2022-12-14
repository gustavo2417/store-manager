const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

const { expect } = chai;
chai.use(sinonChai);

const saleService = require('../../../src/services/sales.service');
const saleController = require('../../../src/controllers/sales.controller');

const { sales } = require('./mocks/sale.controllers.mock');

describe('testando a camada controller de sales', function () {
  afterEach(sinon.restore);

  it('testando se todas as vendas são retornadas', async function () {
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

  it('testando se uma venda especifica é retornada', async function () {
    const res = {};
    const req = {
      params: { id: 1 },
    };

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    sinon
      .stub(saleService, 'findById')
      .resolves({ type: null, message: sales[0] });

    await saleController.getByID(req, res);

    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(sales[0]);
  });
});