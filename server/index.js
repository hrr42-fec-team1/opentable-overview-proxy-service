const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const path = require('path');
const cors = require('cors');
const app = express();

const protocol = 'http';
const host = '127.0.0.1';
const baseURL = protocol + '://' + host;

// const overviewPort = 3001;
// const reservationPort = 3002;
// const menuPort = 3003;
// const imagePort = 3004;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(__dirname + '/../public'));
// const app = require('./app.js');
const PORT = 3000;

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});