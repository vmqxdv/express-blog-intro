const express = require('express');
const app = express();
const PORT = 1229;


const posts = [
  { title: 'Ciambellone', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', image: 'public/images/ciambellone.jpeg', tags: ['ciambella', 'ciambellone', 'semplice'] },
  { title: 'Cracker Barbabietola', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', image: 'public/images/cracker_barbabietola.jpeg', tags: ['cracker', 'barbabietola', 'leggero'] },
  { title: 'Pane Fritto Dolce', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', image: 'public/images/pane_fritto_dolce.jpeg', tags: ['pane', 'fritto', 'dolce'] },
  { title: 'Pasta Barbabietola', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', image: 'public/images/pasta_barbabietola.jpeg', tags: ['pasta', 'barbabietola', 'veloce'] },
  { title: 'Torta Paesana', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', image: 'public/images/torta_paesana.jpeg', tags: ['torta', 'paesana', 'dolce'] },
];


app.use(express.static('public'));

app.get('/', (_, res) => {
  res.send('Server del mio blog');
});

app.get('/bacheca', (_, res) => {
  res.json(posts);
});

app.listen(PORT, () => {
  console.log(`Server avviato su http://localhost:${PORT}`);
});