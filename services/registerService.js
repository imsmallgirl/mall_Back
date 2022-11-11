const bcrypt = require('bcrypt');

const saltRounds = 10;
const UserRepositories = require('../repositories/UserRepository');

const { BadRequestException } = require('../errors');

class RegisterService {
  static async createUserData(data) {
    const Id = await UserRepositories.findByUserId(data.userId);

    if (!Id && data.password === data.verifypassword) {
      const password = await new Promise((resolve, reject) => {
        bcrypt.hash(data.password, saltRounds, (err, hash) => {
          if (err) reject(err);
          resolve(hash);
        });
      });
      const userData = {
        ...data,
        password,
      };
      const createData = await UserRepositories.CreateUserData(userData);
      return createData;
    }

    throw new BadRequestException(
      '동일한 아이디가 존재하거나 비밀번호가 일치하지 않습니다.',
    );
  }
}

module.exports = RegisterService;
