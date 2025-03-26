const express = require('express');
const app = express();
const PORT = 1229;


const posts = [
  { title: 'Ciambellone', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', image: 'images/ciambellone.jpeg', tags: ['ciambella', 'ciambellone', 'semplice'] },
  { title: 'Cracker Barbabietola', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', image: 'images/cracker_barbabietola.jpeg', tags: ['cracker', 'barbabietola', 'leggero'] },
  { title: 'Pane Fritto Dolce', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', image: 'images/pane_fritto_dolce.jpeg', tags: ['pane', 'fritto', 'dolce'] },
  { title: 'Pasta Barbabietola', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', image: 'images/pasta_barbabietola.jpeg', tags: ['pasta', 'barbabietola', 'veloce'] },
  { title: 'Torta Paesana', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', image: 'images/torta_paesana.jpeg', tags: ['torta', 'paesana', 'dolce'] },
];


app.get('/', (_, res) => {
  res.send('Server del mio blog');
});

app.get('/bacheca', (_, res) => {
  res.send(JSON.stringify(posts));
});

app.listen(PORT, () => {
  console.log(`Server avviato su http://localhost:${PORT}`);
});