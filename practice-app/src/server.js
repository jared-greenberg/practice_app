const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const axios = require('axios');


const PORT = 5000;
const HOST = "localhost";
const API_SERVICE_URL = "http://dev.rapptrlabs.com/Tests/scripts/user-login.php";

app.use(bodyParser.json());

app.post('/login_user', (req, res) => {
  axios.post(API_SERVICE_URL, req.body).then(
     () => console.log("hello"), (err) => res.status(400).json(err)
  )
})


app.listen(PORT, HOST, () => {
   console.log(`Starting Proxy at ${HOST}:${PORT}`);
});