const config = require('./config.js');
const path = require('path');
const express = require('express');
const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile('./static/index.html', { root: __dirname });
});

app.listen(config.PORT, console.log(`Listening on port ${config.PORT}`));
