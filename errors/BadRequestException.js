class BadRequestExceoption extends Error {
  constructor(message) {
    super(message);
    this.name = 'BadRequestExceoption';
  }
}

module.exports = BadRequestExceoption;
