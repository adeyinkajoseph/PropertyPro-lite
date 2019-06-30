import express from 'express';

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('welcome to propertypro-lite');
});


app.get('/home', (req, res) => {
  res.send('this is my homepage');
});
app.listen(PORT, () => console.log('server started on port 3000'));
