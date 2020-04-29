const request = require('supertest');
const app = require('../../src/app');
// const { User } = require('../../src/app/models');
const factory = require('../factories');
const trucante = require('../utils/truncate');

describe("Authentication", () => {
    // beforeEach(async() => {
    //     await trucante();
    // });

    it('Should authenticate with valid credentials', async() => {

        const user = await factory.create('User', {
            password: "123456"
        });

        const response = await request(app)
            .post('/sessions')
            .send({
                email: user.email,
                password: user.password
            });

        expect(response.status).toBe(200);
    });

    it('Should not authenticate with invalid credentials', async() => {
        const user = await factory.create('User', {
            password: "123456"
        });

        const password_incorrect = "1234567";
        const response = await request(app)
            .post('/sessions')
            .send({
                email: user.email,
                password: password_incorrect
            });

        expect(response.status).toBe(401);
    });

    it('Should return jwt token when authenticated', async() => {
        const user = await factory.create('User', {
            password: "123456"
        });

        const response = await request(app)
            .post('/sessions')
            .send({
                email: user.email,
                password: "123456"
            });

        expect(response.body).toHaveProperty('token');
    });

    it('Should be able to access private routes when authenticated', async() => {
        const user = await factory.create('User', {
            password: "123456"
        });

        const response = await request(app)
            .post('/dashboard')
            .set('Authorization', 'Bearer ' + user.generateToken());

        expect(response.status).toBe(200);
    });

    it('Should not be able to access private routes without jwt', async() => {
        const user = await factory.create('User', {
            password: "123456"
        });

        const response = await request(app)
            .post('/dashboard');

        expect(response.status).toBe(401);
    });

    it('Should not be able to access private routes routes with invalid jwd otken', async() => {
        const user = await factory.create('User', {
            password: "123456"
        });

        const response = await request(app)
            .post('/dashboard')
            .set('Authorization', 'Bearer as65df4a654df6as5d4f');

        expect(response.status).toBe(401);
    });
});