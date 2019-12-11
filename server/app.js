const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const path = require('path');

const app = express();

const protocol = 'http';
const host = '127.0.0.1';
const baseURL = protocol + '://' + host;

const overviewPort = 3001;
const reservationPort = 3002;
// TODO: Miss menu port
const menuPort = 3003;
const imagePort = 3004;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/:id', (req, res) => {
  let id = req.params.id;
  console.log(id);
  axios.all([
    axios.get(baseURL + ':' + imagePort + '/images'),
    axios.get(baseURL + ':' + overviewPort + '/api/restaurant/' + id),
    axios.get(baseURL + ':' + reservationPort + '/mapper/' + id),
    axios.get(baseURL + ':' + reservationPort + '/restaurant/' + id),
  ]).then(axios.spread((imageResp, overviewResp, mapperResp, resRestaurantResp) => {
    console.log(imageResp);
    console.log(overviewResp);
    console.log(mapperResp);
    console.log(resRestaurantResp);
    res.sendFile(path.resolve(__dirname + '/../public/index.html'));
  })).catch(error => {
    res.status(500).send('Internal error!');
  });
});

module.exports = app;