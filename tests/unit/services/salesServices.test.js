const saleModel = require('../../../src/models/sales.model')
const { expect } = require('chai');
const sinon = require('sinon');

const { findAll, findById, deleteSale } = require('../../../src/services/sales.service');
const { sales } = require('./mocks/sales.services.mock');

describe('testando a camada services de products', function () {
  afterEach(sinon.restore);

  it('testando se todas as vendas são retornados', async function () {
    sinon.stub(saleModel, 'getAllSales').resolves([sales]);
    const result = await findAll();

    expect(result.message).to.be.deep.equal([sales]);
  });

  it('testando se todos os produtos são retornados', async function () {
    sinon.stub(saleModel, 'findById').resolves([sales[0]]);
    const result = await findById(1);

    expect(result.message).to.be.deep.equal([sales[0]]);
  });

  it('testando se é possivel deletar um produto', async function () {
    sinon.stub(saleModel, 'deleteSale').resolves([sales]);
    const result = await deleteSale(2);
    const expected = { type: null, message: '' };

    expect(result).to.deep.equal(expected);
  });
});