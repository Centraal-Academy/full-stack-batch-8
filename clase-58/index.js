const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 8080;

app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get('/', (request, response) => {
    response.status(200).json({
        message: 'Success'
    });
});

app.listen(PORT);

console.log('Magic happens at http://localhost:' + PORT);
