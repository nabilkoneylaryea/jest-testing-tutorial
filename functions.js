const { default: axios } = require("axios");

const functions = {
    add: (num1, num2) => num1 + num2,
    sub: (num1, num2) => num1 - num2,
    returnObject: () => {
        const obj = {
            prop: 3
        }

        return obj;
    },
    fetchUser: () => axios.get('https://jsonplaceholder.typicode.com/users/1').then(res => res.data).catch(err => 'error')
};

module.exports = functions;