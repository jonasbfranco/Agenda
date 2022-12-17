const express = require('express')
//  const routes = require('./routes');
const cors = require('cors');
const routes = express.Router();
const app = express();
// require('./config/dbConfig');


// para nao ter problema em acessar a api de outro endereco
app.use(cors());
// para usar o response com json, se for send nao precisa desta linha abaixo.
app.use(express.json());
app.use(routes)


app.get('/', function (req, res) {
  return res.send('Hello World')
})

routes.get('/teste', (req, res) => {
  return res.json({ 
    message: 'Teste Rota Jonas' 
  })
})



app.listen(3333, () => console.log('Express started at http://localhost:3333'))



app.get("/", (req, res) => {
  const { q } = req.query;

  const keys = ["first_name", "last_name", "email"];

  const search = (data) => {
    return data.filter((item) =>
      keys.some((key) => item[key].toLowerCase().includes(q))
    );
  };

  q ? res.json(search(Users).slice(0, 10)) : res.json(Users.slice(0, 10));
});

app.listen(5000, () => console.log("API is working!"));
