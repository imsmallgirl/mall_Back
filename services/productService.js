const ProductRepository = require('../repositories/productRepository');

const { NotFoundException } = require('../errors');

class ProductService {
  static async findAll() {
    const product = await ProductRepository.findAll();
    return product;
  }

  static async findById(id) {
    const product = await ProductRepository.findById(id);
    if (!product) {
      throw new NotFoundException(`Cannot find product id : ${id}`);
    }
    return product;
  }
}

module.exports = ProductService;