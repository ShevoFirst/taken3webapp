const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 5500;

// Устанавливаем папку для статических файлов
app.use(express.static(path.join(__dirname)));

// Обрабатываем запросы к корневому маршруту
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
