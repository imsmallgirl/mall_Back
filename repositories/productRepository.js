const { Product } = require('../models');

const { DatabaseException } = require('../errors');

class ProductRepository {
  static async findAll() {
    return new Promise((resolve, reject) => {
      Product.findAll()
        .then(res => {
          resolve(res);
        })
        .catch(err => {
          reject(new DatabaseException(err));
        });
    });
  }
}

module.exports = ProductRepository;
