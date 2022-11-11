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
};
