const express = require('express');
const cors = require('cors');
const path = require('path');
const { getGamesEurope } = require('nintendo-switch-eshop');

const app = express();
app.use(cors());
app.use(express.static(path.join(__dirname, 'client'))); // Раздаём Vue

app.get('/api/games', async (req, res) => {
    try {
        const games = await getGamesEurope();
        res.json(games);
    } catch (error) {
        res.status(500).json({ error: 'Ошибка при получении игр' });
    }
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client/dist', 'index.html'));
});

app.listen(3000, () => console.log('Сервер запущен на порту 3000'));