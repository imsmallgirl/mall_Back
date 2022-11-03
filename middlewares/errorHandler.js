const {
  BadRequestException,
  NotFoundException,
  DatabaseException,
  UnauthorizedException,
} = require('../errors');

// eslint-disable-next-line no-unused-vars
module.exports = (err, req, res, next) => {
  switch (true) {
    case err instanceof BadRequestException:
      res.status(400).send('400 유효하지 않은 요청입니다.');
      break;

    case err instanceof UnauthorizedException:
      res.status(401).send('401 인증이 필요합니다.');
      break;

    case err instanceof NotFoundException:
      res.status(404).send('404 잘못된 요청입니다.');
      break;

    case err instanceof DatabaseException:
      res.status(500).send('500 서버에 문제가 발생하였습니다.');
      break;

    default:
      res.status(500).send('500 예상치 못한 오류가 발생했습니다.');
      break;
  }
};
