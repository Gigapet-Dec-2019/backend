const request = require('supertest');
const server = require('../api/server');



describe('update endpoint', () => {
    it('it returns correct HTTP status code if wrong data', async ()=>{
        const response = await request(server).put('/1')
        expect(response.status).toBe(404)
    });
});

describe('delete endpoint', () => {
    it('if recipe does not exist', async ()=>{
        const response = await request(server).delete('/1')
        expect(response.status).toBe(404)
    });
});

