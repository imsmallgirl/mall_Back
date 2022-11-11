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
};
