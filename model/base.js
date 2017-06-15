module.exports = function (server, faker) {
    // 名字
    server.get('/name', (req, res, next) => {
    const randomName = faker.name.findName();
        res.send({
            code: 1,
            data: {
            name: randomName
            }
        });
    });
    // 随机数
    server.get('/number', (req, res, next) => {
    const randomNumber = faker.random.number();
        res.send({
            code: 1,
            data: {
            number: randomNumber
            }
        });
    });
    // 日期
    server.get('/date', (req, res, next) => {
    const randomDate = faker.date.past();
        res.send({
            code: 1,
            data: {
            date: randomDate
            }
        });
    });
};