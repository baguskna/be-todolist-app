const express = require('express');
const cors = require('cors');
const todoRouters = require('./routers/todo.router');

const app = express();

// middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routers
app.get('/', (req, res) => {
  res.send('Hello bandung!!!');
});

app.use('/todos', todoRouters);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`listen on port ${PORT}`));
