const express = require('express');
const axios = require('axios');
const app = express();
const PORT = process.env.PORT || 5000;

app.get('/api/articles', async (req, res) => {
    const { category } = req.query; // Get category from query parameters
    const apiKey = 'a43f6232f34e4460bfa0bee463eeb365cd news-api-proxy'; // Replace with your actual API key
    const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${apiKey}`;

    try {
        const response = await axios.get(url);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ message: 'Failed to fetch articles', error });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
