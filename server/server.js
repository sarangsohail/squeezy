const express = require('express');
const userRoutes = require('./routes/userRoutes');
const app = express();
const port = 8080;

  
// app.use(express.json());
// app.use('/users', userRoutes);

app.post('/users', userRoutes);


app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
