const request = require('supertest');
const server = require('../api/server');

describe('register endpoint', () => {
    test('it returns correct HTTP status code if no data', async ()=>{
        const response = await request(server).post('/api/auth/register')
        expect(response.status).toBe(500)
    });
});

describe('login endpoint', () => {
    test('it returns correct HTTP status code if no data', async ()=>{
        const response = await request(server).post('/api/auth/login')
        expect(response.status).toBe(500)
    });
});

describe('logout endpoint', () => {
    test('it returns correct HTTP status code if logout correctly', async ()=>{
        const response = await request(server).get('/api/auth/logout')
        expect(response.status).toBe(200)
    });
});