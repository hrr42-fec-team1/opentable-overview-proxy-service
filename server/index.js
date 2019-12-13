const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const path = require('path');
const cors = require('cors');
const app = express();

const protocol = 'http';
const host = '127.0.0.1';
const baseURL = protocol + '://' + host;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(__dirname + '/../public'));
const PORT = 3000;

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});