module.exports = function (server, faker) {
    // 商品信息
    server.get('/goods', (req, res, next) => {
        const number = req.params.number || 1;
        function generateGoods() {
            return {
            name: faker.commerce.productName(),
            base: faker.commerce.product(),
            price: faker.commerce.price(),
            property: faker.commerce.productAdjective(),
            };
        }
        const result = [];
        for (let k = 0; k < number; k++) {
            result.push(generateGoods());
        }
        res.send({
            code: 1,
            data: result,
            total: result.length
        });
    });
}