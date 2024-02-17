const { send } = require('./send');
const { URL } = require('./send');

send(URL, "Some data");

const sendModule = require('./send');

sendModule.send(sendModule.URL, "Some data");

sendModule.send = function (url, data) {
    console.log(`Sent request to ${url} with another ${data}`)
}

sendModule.send(sendModule.URL, "Some data");