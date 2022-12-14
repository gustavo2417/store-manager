const productModel = require('../../../src/models/products.model')
const { expect } = require('chai');
const sinon = require('sinon');

const connection = require('../../../src/models/connection');
const { products, newProduct } = require('./mocks/products.model.mock');

describe('Testes da camada Model de products', function () {
  afterEach(sinon.restore);

  it('Listando todos os produtos', async function () {
    sinon.stub(connection, 'execute').resolves([products]);
    const result = await productModel.getAllProducts();

    expect(result).to.be.deep.equal(products);
  });

  it('listando um produto específico pelo id', async function () {
    sinon.stub(connection, 'execute').resolves([[products[0]]]);
    const result = await productModel.findByid(1);

    expect(result).to.be.deep.equal(products[0]);
  });

  it('listando um produto específico pelo name', async function () {
    sinon.stub(connection, 'execute').resolves([[products[0]]]);
    const [result] = await productModel.findByName('martelo');

    expect(result).to.be.deep.equal(products[0]);
  });
  
  it('testando se é possivel cadastrar um produto', async function () {
    sinon.stub(connection, 'execute').resolves([{ insertId: 20 }]);
    const product = await productModel.insert('Manopla do infinito');

    expect(product).to.be.deep.equal(newProduct[0]);
  });

  it('testando se é possivel deletar um produto', async function () {
    sinon.stub(connection, 'execute').resolves([{ changedRows: 1 }]);
    const result = await productModel.deleteProduct(2);
    
    expect(result).to.deep.equal({ changedRows: 1 });
  });
});
