//Request Module
const request = require('request-promise');

const options = {
    method: 'POST',
    uri: 'https://risingstack.com/login',
    headers: {'User-Agent': 'Request-Promise','Authorization': 'Basic QWxhZGRpbjpPcGVuU2VzYW1l'},
    body: {foo:'bar'},
    qs: {limit: 10,skip: 20,sort: 'asc'},
    json: true 
      // JSON stringifies the body automatically
  }
  ​
  request(options)
    .then(function (response) {
      // Request was successful, use the response object at will
    })
    .catch(function (err) {
      // Something bad happened, handle the error
    })