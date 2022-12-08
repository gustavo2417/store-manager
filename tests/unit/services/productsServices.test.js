const productModel = require('../../../src/models/products.model')
const { expect } = require('chai');
const sinon = require('sinon');

const { findAll, findById } = require('../../../src/services/products.service');
const { products } = require('./mocks/products.services.mock');

describe('testando a camada services de products', function () {
  afterEach(sinon.restore);

  it('testando se todos os produtos são retornados', async function () {
    sinon.stub(productModel, 'getAllProducts').resolves(products);
    const result = await findAll();

    expect(result.message).to.be.deep.equal(products);
  });

  it('testando se um produto específico é retornado quando passado o ID', async function () {
    sinon.stub(productModel, 'findByid').resolves(products[0]);
    const result = await findById(0);

    expect(result.message).to.be.deep.equal(products[0]);
  });

  it('testando se quando um for passado um ID errado retorna o erro esperado', async function () {
    const result = await findById(100);

    expect(result.message).to.equal('Product not found');
  });
});