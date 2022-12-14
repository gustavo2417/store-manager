const productModel = require('../../../src/models/products.model')
const { expect } = require('chai');
const sinon = require('sinon');

const { findAll, findById, insertProduct, getByName } = require('../../../src/services/products.service');
const { products, newProduct } = require('./mocks/products.services.mock');

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

  it('testando se é possível criar um novo produto', async function () {
    sinon.stub(productModel, 'insert').resolves(newProduct);
    const result = await insertProduct(newProduct);

    expect(result.message).to.be.deep.equal(newProduct);
  });

  it('testando se é possivel buscar um produto pelo nome', async function () {
    sinon.stub(productModel, 'findByName').resolves(products[0]);
    const result = await getByName('Martelo');

    expect(result.message).to.be.deep.equal(products[0]);
  });

  it('testando se quando não passado nenhum parametro retorna todos os produtos', async function () {
    sinon.stub(productModel, 'findByName').resolves(products);
    const result = await getByName('');

    expect(result.message).to.be.deep.equal(products);
  });
});