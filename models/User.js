const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {}

  User.init(
    {
      // 컬럼과 제약 조건을 정의한다.
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      userId: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      callNumber: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      address: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      role: {
        type: DataTypes.ENUM({
          values: ['관리자', '판매자', '일반회원'],
        }),
      },
    },
    {
      // 기타 옵션을 작성한다.

      // 연결 인스턴스를 sequelize로 한다 (필수)
      sequelize,

      // 생성된 테이블의 이름을 정의한다. (필수)
      modelName: 'User',

      // 테이블 이름을 복수로 지정하는 것을 막는다
      // false면 정의한 이름 뒤에 's'가 붙는다.
      freezeTableName: true,
    },
  );

  return User;
};
