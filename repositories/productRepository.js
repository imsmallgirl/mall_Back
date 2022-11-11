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

  static async findById(id) {
    return new Promise((resolve, reject) => {
      Product.findOne({
        where: {
          id,
        },
      })
        .then(res => {
          resolve(res);
        })
        .catch(err => {
          reject(new DatabaseException(err));
        });
    });
  }

  static async create(data) {
    return new Promise((resolve, reject) => {
      Product.create(data)
        .then(res => {
          resolve(res);
        })
        .catch(err => {
          reject(new DatabaseException(err));
        });
    });
  }

  static async update(id, data) {
    return new Promise((resolve, reject) => {
      Product.update(data, { where: { id } })
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
