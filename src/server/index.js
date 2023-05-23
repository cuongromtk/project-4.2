const bodyParser = require('body-parser');
const express = require('express');
const cors = require('cors');
const FormData = require('form-data');
const dotenv = require('dotenv');
dotenv.config();

const app = express();

const axios = require("axios");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors())

app.use(express.static('dist'))

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})

app.get('/test', function (req, res) {
    res.json(mockAPIResponse);
})

// designates what port the app will listen to for incoming requests
app.listen(8080, function () {
    console.log('Example app listening on port 8080!');
});

const callBack = (req, res) => {
  const formdata = new FormData();
  formdata.append('key', process.env.API_KEY);
  formdata.append('txt', req.body.inputText);
  formdata.append('lang', 'en');
  formdata.append('model', 'general');
  axios
    .post('https://api.meaningcloud.com/sentiment-2.1', formdata)
    .then(function (response) {
      // handle success
      console.log('consolog data', response.data);
      res.json(response.data);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .finally(function () {
      // always executed
    });
};
app.post("/add", callBack);