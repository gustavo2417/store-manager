const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

const { expect } = chai;
chai.use(sinonChai);

const saleService = require('../../../src/services/sales.service');
const saleController = require('../../../src/controllers/sales.controller');

const { sales, newSale } = require('./mocks/sale.controllers.mock');

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

  it('testando se é possivel deletar uma venda', async () => {
    sinon.stub(saleService, 'deleteSale')
      .resolves({ type: null, message: undefined });
    const req = { params: { id: 2 } };
    const res = {};
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    await saleController.saleDelete(req, res);

    expect(res.status).calledWith(204);
    expect(res.json).calledWith();
  });

  it('Verifica se registra um produto de uma venda', async () => {
    sinon.stub(saleService, 'insertSale')
      .resolves({ type: null, message: { id: 100, itemsSold: newSale } });
    const req = { body: newSale };
    const res = {};
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    await saleController.insertSales(req, res);

    expect(res.status).calledWith(201);
    expect(res.json).to.have.been.calledWith({ id: 100, itemsSold: newSale });
  });
});