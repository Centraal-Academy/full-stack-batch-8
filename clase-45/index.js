const fs = require('fs');

const getUsers = () => {
    let users = [];
    let file;
    try {
        file = fs.readFileSync('users.json');
        users = JSON.parse(file);
    } catch (error) {
        throw new Error('The file is not available');
    }
    return users;
};

const saveUser = users => {
    try {
        fs.writeFileSync(`${process.cwd()}/users.json`, JSON.stringify(users)); // Directory in execution
        fs.writeFileSync(`${__dirname}/users.json`, JSON.stringify(users)); // Directory in file
    } catch (error) {
        throw new Error('The file is not available');
    }
};
