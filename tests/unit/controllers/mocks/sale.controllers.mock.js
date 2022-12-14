const sales = [
  {
    "id": 1,
    "date": "2022-12-14T14:21:22.000Z",
    "saleId": 1,
    "productId": 1,
    "quantity": 5
  },
  {
    "id": 1,
    "date": "2022-12-14T14:21:22.000Z",
    "saleId": 1,
    "productId": 2,
    "quantity": 10
  },
  {
    "id": 2,
    "date": "2022-12-14T14:21:22.000Z",
    "saleId": 2,
    "productId": 3,
    "quantity": 15
  }
];

const newSale = [
  {
    "productId": 1,
    "quantity": 1
  },
  {
    "productId": 2,
    "quantity": 5
  }
]


module.exports = {
  sales,
  newSale,
};