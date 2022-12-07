# Agenda de Ramais

#### backend
- npm install express
- npm install cors
- npm install -D nodemon
  > no arquivo packpage.json inserir a linha 
  >  "dev": "nodemon src/index.js", em scripts
  ```json
   "scripts": {
    "dev": "nodemon src/index.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  ```
- npm install json-server
  > no arquivo packpage.json inserir a linha 
  >  "json-server": "json-server --watch bd/bd.json --routes routes.json -p 5000", em scripts
  > para usar arquivo de rotas (--routes routes.json)
  ```json
  "json-server": "json-server --watch bd/bd.json --routes routes.json -p 5000",
  ```



#### frontend