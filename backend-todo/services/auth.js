const jwt = require('jsonwebtoken');

const auth = async (request, response) => {
    const user = request.body;
    const users = ['test-lana','admin-lana'];
    const match = users.includes(user.username);
    if(match) {
        const token = jwt.sign(user.username, process.env.SECRET_KEY);
        try {
            response.status(200).json({
                status: 'success',
                message: 'Logged success',
                token
            });
        }catch(error){
            console.log(error);
            return;
        } 
    } else {
        response.status(500).json({status: 'error', message: 'Authentication failed. Wrong user.'});
    }
};

module.exports = {auth};
