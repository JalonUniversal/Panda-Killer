const restify = require('restify');
const faker = require('faker');
// 引入服务器
const server = require('./server.js');
// 开启插件
server.use(restify.gzipResponse());                   // 开启gzip压缩
server.use(restify.acceptParser(server.acceptable));  // 开启请求类型解析
server.use(restify.queryParser());                    // 开启查询字符串解析
server.use(restify.bodyParser());                     // 开启请求体解析
// 开启路由
require('./routes.js')(server, faker);
// 人物信息
server.listen(8080, () => {
  console.log('%s server is listening at %s', server.name, server.url);
});