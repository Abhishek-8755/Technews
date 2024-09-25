const express = require('express');
const axios = require('axios');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/api/articles', async (req, res) => {
    const category = req.query.category; // Get the category from query params
    try {
        const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=a43f6232f34e4460bfa0bee463eeb365`);
        res.json(response.data);
    } catch (error) {
        console.error('Error fetching articles:', error);
        res.status(500).send('Error fetching articles');
    }
});
