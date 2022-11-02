const fs = require('fs');
const path = require('path');

const thisFileName = path.basename(__filename);
const thisFileDir = __dirname;

const routes = [];
fs.readdirSync(thisFileDir)
  .filter(file => {
    return (
      file.indexOf('.') !== 0 &&
      file !== thisFileName &&
      file.slice(-3) === '.js'
    );
  })
  .forEach(file => {
    // eslint-disable-next-line import/no-dynamic-require
    const route = require(path.join(thisFileDir, file));
    routes.push(route);
  });

module.exports = routes;
