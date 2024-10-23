const express = require('express');
const axios = require('axios');  // Import axios for making HTTP requests
const app = express();
const port = 3000;

// Example users data
const users = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' }
];

// Get all users
app.get('/users', (req, res) => {
    res.json(users);
});

// Get a user and their products
app.get('/users/:userId/products', async (req, res) => {
    const user = users.find(u => u.id === parseInt(req.params.userId));
    if (!user) {
        return res.status(404).json({ message: 'User not found' });
    }

    try {
        // Use the service name 'product-service' instead of localhost
        const productsResponse = await axios.get('http://product-service:3001/products');
        res.json({
            user,
            products: productsResponse.data
        });
    } catch (error) {
        res.status(500).json({ message: 'Error fetching products' });
    }
});

app.listen(port, () => {
    console.log(`User Service running on port ${port}`);
});
