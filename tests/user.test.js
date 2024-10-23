const request = require('supertest');
const app = require('../index'); // Make sure this path is correct

// Example users data
const users = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' }
];

// Mocking the user data for tests
jest.mock('../index', () => {
    const express = require('express');
    const app = express();

    app.get('/users', (req, res) => res.json(users));

    app.get('/users/:userId/products', async (req, res) => {
        const user = users.find(u => u.id === parseInt(req.params.userId)); // Ensure this matches with req.params.userId
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Simulate a successful response from Product Service
        const productsResponse = { data: [{ id: 1, name: 'Laptop' }, { id: 2, name: 'Smartphone' }] };
        res.json({
            user,
            products: productsResponse.data
        });
    });

    return app;
});

describe('User Service', () => {
    it('should return a list of users', async () => {
        const res = await request(app).get('/users');
        expect(res.statusCode).toEqual(200);
        expect(res.body).toEqual(users);
    });

    it('should return a user and their products', async () => {
        const res = await request(app).get('/users/1/products');
        expect(res.statusCode).toEqual(200);
        expect(res.body).toEqual({
            user: users[0],
            products: [{ id: 1, name: 'Laptop' }, { id: 2, name: 'Smartphone' }]
        });
    });

    it('should return 404 for a non-existent user', async () => {
        const res = await request(app).get('/users/3/products'); // Non-existent user
        expect(res.statusCode).toEqual(404);
        expect(res.body).toEqual({ message: 'User not found' });
    });
});
