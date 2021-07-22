const express = require('express');
const bodyParser = require('express');

const API_ROUTER = require('./routes/api')
const app = express();

require('./src/db');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api', API_ROUTER)

app.listen(3000, () => {
    console.log('Server ON');
});