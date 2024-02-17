export function send(url, data) {
    console.log(`${data} sent to ${url}`)
};

const URL = "http://google.com"

module.exports = {
    send,
    URL
}

console.log("Hello from SEND-Module")
