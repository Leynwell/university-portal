const express = require('express');
const app = express();
const knex = require('./src/services/db');
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(express.static('public'));

app.get('/api/news', async (req, res) => {
    try {
        const limit = parseInt(req.query.limit, 10);
        let query = knex.select('*').from('news');

        if (!isNaN(limit)) {
            query = query.limit(limit);
        }

        const news = await query;
        res.json(news);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching news' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
