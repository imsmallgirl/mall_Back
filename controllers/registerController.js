const RegisterService = require('../services/registerService');

module.exports = {
  createUserData: async (req, res, next) => {
    const userData = req.body;
    // const Id = req.params.userId;

    try {
      const createUserData = await RegisterService.createUserData(userData);
      res.send(createUserData);
    } catch (err) {
      next(err);
    }
  },
};
