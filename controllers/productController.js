const productService = require('../services/productService');

module.exports = {
  findAll: async (req, res, next) => {
    try {
      const allProduct = await productService.findAll();
      res.send(allProduct);
    } catch (err) {
      next(err);
    }
  },
  findById: async (req, res, next) => {
    const productId = req.params.id;
    try {
      const product = await productService.findById(productId);
      res.send(product);
    } catch (err) {
      next(err);
    }
  },
  create: async (req, res, next) => {
    const createdProductData = req.body;
    try {
      const createdProduct = await productService.create(createdProductData);
      res.send(createdProduct);
    } catch (err) {
      next(err);
    }
  },
  update: async (req, res, next) => {
    const updatedProductId = req.params.id;
    const updatedProductData = req.body;
    try {
      const updatedProduct = await productService.update(
        updatedProductId,
        updatedProductData,
      );
      res.send(updatedProduct);
    } catch (err) {
      next(err);
    }
  },
};
