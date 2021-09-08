const request = require('supertest');
const app = require('../server');

describe ('API server', () => {
    let api;

    beforeAll(() => {
        api = app.listen(5000, () =>
        console.log('Test server running on port 5000'))
    });

    afterAll((done) => {
        console.log('Gracefully stopping test server');
        api.close(done);
    });

    it('responds to GET / with status 200', (done) => {
        request(api).get('/').expect(200, done)
    })

    it('responds to GET /search with status 200', (done) => {
        request(api).get('/search').expect(200, done)
    })

    it('responds to POST /search with status 404', (done) => {
        request(api).post('/search').expect(404, done)
    })

    it('responds to Get /search/2 with status 200', (done) => {
        request(api).get('/search/2').expect(200, done)
    })

    it('responds to GET /search/2 with the right object', (done) => {
        request(api).get('/search/2')
        .expect(200)
        .expect({id: 2 , link: "", title: "" , description: ""}, done)
    })
})