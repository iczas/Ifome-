const express = require('express');
const path = require('path');

const api = express();

api.set('views', path.join(__dirname, 'views'));
api.set('view engine', 'ejs');


api.listen('1234', () => console.log('Servidor está no ar'));