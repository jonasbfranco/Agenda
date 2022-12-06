const express = require('express')
const cors = require('cors');
const { Router } = require('express');
const router = express.Router();

const app = express();


app.use(cors());
app.use(express.json());
app.use(router)


app.get('/', function (req, res) {
  res.send('Hello World')
})

router.get('/teste', (req, res) => {
  res.json({ message: 'Teste Rota Jonas' })
})



app.listen(3333, () => console.log('Express started at http://localhost:3333'))
