const ProductRepository = require('../repositories/productRepository');

const { NotFoundException, BadRequestException } = require('../errors');

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

  static async create(createdProductData) {
    const createdProduct = await ProductRepository.create(createdProductData);
    return createdProduct;
  }

  static async update(updatedProductId, updatedProductData) {
    const createdProduct = await ProductRepository.update(
      updatedProductId,
      updatedProductData,
    );
    return createdProduct;
  }

  static async delete(id) {
    const deletedProduct = await this.findById(id);
    if (!deletedProduct) {
      throw new BadRequestException(`Not Exist product id : ${id}`);
    }
    await ProductRepository.delete(id);
    return deletedProduct;
  }
}

module.exports = ProductService;
