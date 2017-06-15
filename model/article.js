// 文章信息
module.exports = function (server, faker) {
    server.get('/article', (req, res, next) => {
        const number = req.params.number || 1;
        function generateArticle() {
            return {
            title: faker.lorem.words(),
            author: faker.name.findName(),
            occupation: faker.name.title(),
            description: faker.lorem.sentence(),
            content: faker.lorem.paragraphs(),
            createdAt: faker.date.past(),
            updatedAt: faker.date.recent()
            }
        }
        const result = [];
        for (let k = 0; k < number; k++) {
            result.push(generateArticle());
        }
        res.send({
            code: 1,
            data: result,
            total: result.length
        });
    });
}