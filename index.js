
const express = require('express');
require('dotenv').config();
const app = express();
const bodyParser = require('body-parser');
const port = 3000;
const userRoute = require('./routes/users.route');
require('./db');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
  extended: false
}))
// parse application/json
app.use(bodyParser.json())

app.use('/user', userRoute);
app.get('/', (req, res) => {
  res.send({
    status: 200,
    data: 'Hello world'
  })
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
