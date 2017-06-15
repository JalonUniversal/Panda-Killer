const base = require('./model/base.js');
const user = require('./model/user.js');
const article = require('./model/article.js');
const goods = require('./model/goods.js');

module.exports = function (server, faker) {
  [base, user, article, goods].map((item) => {
    item(server, faker);
  });
}