const ProductRepository = require('../repositories/productRepository');

class ProductService {
  static async findAll() {
    const product = await ProductRepository.findAll();
    return product;
  }
}

module.exports = ProductService;
