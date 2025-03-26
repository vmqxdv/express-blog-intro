const express = require('express');
const app = express();
const PORT = 1229;

app.get('/', (_, res) => {
  res.send('Server del mio blog');
});

app.listen(PORT, () => {
  console.log(`Server avviato su http://localhost:${PORT}`);
});