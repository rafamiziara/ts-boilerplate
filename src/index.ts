import express from 'express';
import '@controllers/UsersController';

const app = express();

app.get('/', (req, res) => {
  res.json({ message: 'Hello World!' });
});

app.listen(3000, () => {
  console.log('Listening on port 3000!');
});
