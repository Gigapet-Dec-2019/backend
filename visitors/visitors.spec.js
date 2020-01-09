const request = require('supertest');
const server = require('../api/server');



describe("GET /", function() {
    it("should return a 200 OK", function() {
    return request(server)
        .get("/api/visitors")
        .then(res => {
        expect(res.status).toBe(200);
        });
    });
});