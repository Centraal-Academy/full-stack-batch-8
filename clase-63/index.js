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
        message: 'GET'
    });
});

app.post('/', (request, response) => {
    response.status(200).json({
        message: 'POST',
        data: request.body
    });
});

app.put('/', (request, response) => {
    response.status(200).json({
        message: 'PUT',
        data: request.body
    });
});

app.delete('/', (request, response) => {
    response.status(200).json({
        message: 'DELETE',
        data: request.body
    });
});

app.patch('/', (request, response) => {
    response.status(200).json({
        message: 'PATCH',
        data: request.body
    });
});

app.listen(PORT);

console.log('Magic happens at http://localhost:' + PORT);
