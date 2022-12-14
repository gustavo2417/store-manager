const saleModel = require('../../../src/models/sales.model')
const { expect } = require('chai');
const sinon = require('sinon');

const connection = require('../../../src/models/connection');
const { sales } = require('./mocks/sales.models.mock');

describe('Testes da camada Model de products', function () {
  afterEach(sinon.restore);

  it('Listando todas as sales', async function () {
    sinon.stub(connection, 'execute').resolves([sales]);
    const result = await saleModel.getAllSales();

    expect(result).to.be.deep.equal(sales);
  });

  it('Listando uma sale especifica pelo id', async function () {
    sinon.stub(connection, 'execute').resolves([[sales[0]]]);
    const [result] = await saleModel.findById(1);

    expect(result).to.be.deep.equal(sales[0]);
  });

  it('testando se é possivel deletar um produto', async function () {
    sinon.stub(connection, 'execute').resolves([{ changedRows: 1 }]);
    const result = await saleModel.deleteSale(2);

    expect(result).to.deep.equal({ changedRows: 1 });
  });

  it('testando se é possível criar uma nova venda', async () => {
    sinon.stub(connection, 'execute').resolves([{ insertId: 999 }]);
    const result = await saleModel.createSale();

    expect(result).to.deep.equal(999);
  });
});