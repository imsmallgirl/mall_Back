const { User } = require('../models');

const { DatabaseException } = require('../errors');

class UserRepository {
  static async findByUserId(userId) {
    return new Promise((resolve, reject) => {
      try {
        const Id = User.findOne({
          where: {
            userId,
          },
        });
        resolve(Id);
      } catch (err) {
        reject(new DatabaseException(err));
      }
    });
  }

  static async CreateUserData(data) {
    return new Promise((resolve, reject) => {
      try {
        const dataCreate = User.create({
          userId: data.userId,
          password: data.password,
          email: data.email,
          name: data.name,
          callNumber: data.callNumber,
          address: data.address,
        });
        resolve(dataCreate);
      } catch (err) {
        reject(new DatabaseException(err));
      }
    });
  }
}

module.exports = UserRepository;
