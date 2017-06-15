module.exports = function (server, faker) {
    server.get('/user', (req, res, next) => {
        const number = req.params.number || 1;
        function generateUser() {
            return {
            name: faker.name.findName(),
            email: faker.internet.email(),
            website: faker.internet.url(),
            address: faker.address.streetAddress() + faker.address.city() + faker.address.country(),
            bio: faker.lorem.sentences(),
            image: faker.image.avatar()
            }
        }
        const result = [];
        for (let k = 0; k < number; k++ ) {
            result.push(generateUser());
        }
        res.send({
            code: 1,
            data: result,
            total: result.length
        });
    });
}