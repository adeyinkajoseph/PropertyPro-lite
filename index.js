import express from 'express';

const app = express();

app.get('/home', (req, res) => {
  res.send('welcome to propertypro-lite');
});
app.listen(3000, () => console.log('server started on port 3000'));
