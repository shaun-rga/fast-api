import express from 'express';

const app = express();

app.use(express.json());

app.get('/', async (req, res) => {
  res.set('Access-Control-Allow-Origin', '*');
  const json = { msg: 'Hello World!' };
  res.send(json);
});

app.listen(8080, () => console.log('http://localhost:8080'));
