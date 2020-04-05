const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express(); //antes de todas as requisições converter json em javascript para o servidor entender

app.use(cors());
app.use(express.json());
app.use(routes);//tem que ser embaixo do express.json()

app.listen(3333);