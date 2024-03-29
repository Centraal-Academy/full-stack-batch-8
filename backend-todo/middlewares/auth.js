const jwt = require('jsonwebtoken');

const authorize = (request, response, next) => {
    const token = request.body.token || request.query.token || request.headers['x-access-token'];
    if (token) {
        jwt.verify(token, process.env.SECRET_KEY, (error, decoded) => {
            if (error) {
                return response.status(403).json(
                    {
                        status: 'error',
                        message: 'Failed to authenticate token.'
                    }
                );
            } else {
                request.decoded = decoded;
                next();
            }
        });

    } else {
        return response.status(403).send({
            status: 'error',
            message: 'No token provided.'
        });

    }
};

module.exports = {authorize};